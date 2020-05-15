const initialState = {
  books: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADED_BOOKS":
      return {
        books: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
