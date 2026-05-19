import { hashPassword, verifyPassword } from '../lib/crypto';

const USERS_KEY = 'driveease_users';
const CURRENT_USER_KEY = 'driveease_current_user';
const MIGRATION_KEY = 'driveease_password_migration_v1';

function getAllUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveAllUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function isPasswordHashed(password) {
  return /^[a-f0-9]{64}$/.test(password);
}

export async function migratePlaintextPasswords() {
  if (localStorage.getItem(MIGRATION_KEY)) return;
  const users = getAllUsers();
  let migrated = false;
  for (const user of users) {
    if (user.password && !isPasswordHashed(user.password)) {
      user.password = await hashPassword(user.password);
      migrated = true;
    }
  }
  if (migrated) {
    saveAllUsers(users);
  }
  localStorage.setItem(MIGRATION_KEY, 'done');
}

export async function registerUser({ name, email, phone, password }) {
  const users = getAllUsers();
  if (users.find(u => u.email === email)) {
    return { success: false, message: 'An account with this email already exists.' };
  }
  const hashedPassword = await hashPassword(password);
  const newUser = {
    id: crypto.randomUUID(),
    name,
    email,
    phone: phone || '',
    password: hashedPassword,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  saveAllUsers(users);
  setCurrentUser({ id: newUser.id, name: newUser.name, email: newUser.email, phone: newUser.phone, createdAt: newUser.createdAt });
  return { success: true, user: { id: newUser.id, name: newUser.name, email: newUser.email, phone: newUser.phone, createdAt: newUser.createdAt } };
}

export async function loginUser(email, password) {
  const users = getAllUsers();
  const user = users.find(u => u.email === email);
  if (!user) {
    return { success: false, message: 'Invalid email or password.' };
  }
  let isValid = false;
  if (isPasswordHashed(user.password)) {
    isValid = await verifyPassword(password, user.password);
  } else {
    isValid = user.password === password;
    if (isValid) {
      user.password = await hashPassword(password);
      saveAllUsers(users);
    }
  }
  if (!isValid) {
    return { success: false, message: 'Invalid email or password.' };
  }
  setCurrentUser({ id: user.id, name: user.name, email: user.email, phone: user.phone, createdAt: user.createdAt });
  return { success: true, user: { id: user.id, name: user.name, email: user.email, phone: user.phone, createdAt: user.createdAt } };
}

export function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

export function getCurrentUser() {
  try {
    const raw = localStorage.getItem(CURRENT_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setCurrentUser(user) {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

export function updateUser(userId, updates) {
  const users = getAllUsers();
  const idx = users.findIndex(u => u.id === userId);
  if (idx === -1) return { success: false, message: 'User not found.' };
  users[idx] = { ...users[idx], ...updates };
  saveAllUsers(users);
  setCurrentUser(users[idx]);
  return { success: true, user: users[idx] };
}
