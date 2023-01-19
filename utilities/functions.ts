export function capitalize(string: string) {
  return string
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1, word.length);
    })
    .join(" ");
}
