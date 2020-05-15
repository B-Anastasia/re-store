import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { loadedBooks } from "../../actions";
import { compose } from "../../utils";
import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, loadedBooks } = this.props;
    const data = bookstoreService.getBooks();
    console.log(this.props.dispatch);
    loadedBooks(data);
  }

  render() {
    const { books } = this.props;

    return (
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
