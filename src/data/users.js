const USERS_KEY = 'driveease_users';
const CURRENT_USER_KEY = 'driveease_current_user';

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

export function registerUser({ name, email, phone, password }) {
  const users = getAllUsers();
  if (users.find(u => u.email === email)) {
    return { success: false, message: 'An account with this email already exists.' };
  }
  const newUser = {
    id: `user_${Date.now()}`,
    name,
    email,
    phone: phone || '',
    password,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  saveAllUsers(users);
  setCurrentUser(newUser);
  return { success: true, user: newUser };
}

export function loginUser(email, password) {
  const users = getAllUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return { success: false, message: 'Invalid email or password.' };
  }
  setCurrentUser(user);
  return { success: true, user };
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
