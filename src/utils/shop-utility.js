export const getImageUrl = (fileName) => {
  const url = `../assets/img/${fileName}`;
  const base = import.meta.url;
  return new URL(url, base).href;
};
