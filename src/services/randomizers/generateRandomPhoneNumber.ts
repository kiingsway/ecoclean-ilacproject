export default function generateRandomPhoneNumber(): string {
  const country = Math.random() < 0.5 ? "BR" : "CA";

  if (country === "BR") {
    const ddd = Math.floor(Math.random() * 89) + 11;
    const prefix = Math.floor(Math.random() * 90000) + 10000;
    const suffix = Math.floor(Math.random() * 9000) + 1000;
    return `+55 (${ddd}) 9${prefix}-${suffix}`
  }

  const area = Math.floor(Math.random() * 800) + 200;
  const prefix = Math.floor(Math.random() * 800) + 200;
  const suffix = Math.floor(Math.random() * 9000) + 1000;
  return `+1 (${area}) ${prefix}-${suffix}`
}