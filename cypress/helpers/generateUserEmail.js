export function generateUserEmail() {
  const user = chance.string({
    length: 12,
    alpha: true,
    casing: "lower",
    symbols: false,
  });
  const domain = `${chance.string({
    length: 12,
    alpha: true,
    casing: "lower",
    symbols: false,
  })}.com`;

  return `${user}@${domain}`;
}
