export function generateUserPassword() {
  const password = chance.string({ length: 12 });

  return password;
}
