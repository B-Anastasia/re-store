import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { bookAddedToCart, fetchBooks } from "../../actions";
import { compose } from "../../utils";
import "./book-list.css";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({ books, addBookToCart }) => {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              addBookToCart={() => addBookToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};
//rendering

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, addBookToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} addBookToCart={addBookToCart} />;
  }
}
//logic

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    addBookToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ loadedBooks }, dispatch);
// };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
