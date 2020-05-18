const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220,
};

const updateBook = (book, item = {}) => {
  const { id = book.id, name = book.name, count = 0, total = 0 } = item;
  return {
    id,
    name,
    count: count + 1,
    total: total + book.price,
  };
};

const updateCartItems = (cartItems, newBook, index) => {
  if (index === -1) {
    return [...cartItems, newBook];
  }
  return [...cartItems.slice(0, index), newBook, ...cartItems.slice(index + 1)];
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: state.books,
        loading: true,
        error: null,
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    case "BOOK_ADDED_TO_CART":
      const bookId = action.payload;

      const book = state.books.find((book) => book.id === bookId);
      const indexBook = state.cartItems.findIndex((book) => book.id === bookId);
      const item = state.cartItems[indexBook];

      const newItem = updateBook(book, item);
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, indexBook),
      };

    default:
      return state;
  }
};
export default reducer;
