export const CapitalFirstCharacter = (word: string) => {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
};
