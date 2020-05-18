import React from "react";
import { connect } from "react-redux";
import "./shopping-cart-table.css";

const ShoppingCartTable = ({
  items,
  orderTotal,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, index) => {
    const { id, name, count, total } = item;
    return (
      <tr key={id}>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            className="btn btn-outline-success btn-sm"
            onClick={() => onIncrease(id)}
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            className="btn btn-outline-warning btn-sm"
            onClick={() => onDecrease(id)}
          >
            <i className="fa fa-minus-circle" />
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => onDelete(id)}
          >
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="sum">Total: ${orderTotal}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { cartItems, orderTotal } = state;
  return {
    items: cartItems,
    orderTotal,
  };
};

const mapDispatchToProps = () => {
  return {
    onIncrease: (id) => console.log(`inc ${id}`),
    onDecrease: (id) => console.log(`dec ${id}`),
    onDelete: (id) => console.log(`del ${id}`),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
