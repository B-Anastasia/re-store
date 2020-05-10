const loadedBooks = (newBooks) => {
  return {
    type: "LOADED_BOOKS",
    payload: newBooks,
  };
};
export { loadedBooks };
