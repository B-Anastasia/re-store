import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { loadedBooks } from "../../actions";
import { compose } from "../../utils";
import "./book-list.css";
import Spinner from "../spinner";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, loadedBooks } = this.props;
    bookstoreService.getBooks().then((data) => loadedBooks(data)); //to get data and dispatch to store
  }

  render() {
    const { books, loading } = this.props;

    return loading ? (
      <Spinner />
    ) : (
      <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  loadedBooks,
};

//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ loadedBooks }, dispatch);
// };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
