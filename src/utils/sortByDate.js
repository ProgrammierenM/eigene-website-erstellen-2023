export const sortByDate = (a, b) => {
  return new Date(b.data.publishedDate) - new Date(a.data.publishedDate);
};
