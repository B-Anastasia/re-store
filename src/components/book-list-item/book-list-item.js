import React from "react";
import "./book-list-item.css";

const BookListItem = ({ book }) => {
  const { name, author, price, imageUrl } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img alt="book-cover" src={imageUrl} />
      </div>
      <div className="book-details">
        <a href="#" className="book-title">
          {name}
        </a>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <btn className="btn btn-info add-to-cart">Add to cart</btn>
      </div>
    </div>
  );
};
export default BookListItem;
