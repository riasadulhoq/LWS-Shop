export const getImageUrl = (fileName) => {
  const url = `/img/${fileName}`;
  const base = import.meta.url;
  return new URL(url, base).href;
};
