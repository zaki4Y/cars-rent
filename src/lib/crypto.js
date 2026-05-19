async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + 'driveease_salt_2024');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function verifyPassword(password, hash) {
  const computedHash = await hashPassword(password);
  return computedHash === hash;
}

export { hashPassword, verifyPassword };
