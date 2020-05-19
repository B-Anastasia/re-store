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

const bookAddedToCart = (bookId) => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: bookId,
  };
};
const decreaseCountBooksInCart = (bookId) => {
  return {
    type: "DECREASE_COUNT_BOOKS_IN_CART",
    payload: bookId,
  };
};
const deleteBookFromCart = (bookId) => {
  return {
    type: "DELETE_BOOK_FROM_CART",
    payload: bookId,
  };
};

export {
  fetchBooks,
  bookAddedToCart,
  decreaseCountBooksInCart,
  deleteBookFromCart,
};
