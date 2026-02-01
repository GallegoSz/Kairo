export function initials(text: string): string {
  return text
    .trim()
    .split(" ")
    .map(word => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}
