const startLoadingBooks = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};
const loadedBooks = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks,
  };
};
const errorBooks = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};
const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(startLoadingBooks());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(loadedBooks(data)))
    .catch((err) => dispatch(errorBooks(err))); //to get data and dispatch to store
};
export { fetchBooks };
