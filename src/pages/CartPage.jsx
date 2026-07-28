import React from "react";
import "../styles/CartPage.css";

export const CartPage = ({ cart = [] }) => {
  const shipping_fee = "Free";

  const totalPrice = cart.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;
    return acc + price * quantity;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>your cart is empty🛒</h2>
        <p>add some awesome products !</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart ({cart.length} items)</h2>

      <div className="cart-content">
        <div className="cart-items-list">
          {cart.map((item, index) => (
            <div key={item._id || item.id || index} className="cart-item">
              <img
                src={item.image}
                alt={item.title || item.name || "Product"}
              />
              <div className="item-details">
                <h4>{item.title || item.name}</h4>

                <p className="item-quantity">Qty: {item.quantity || 1}</p>
                <span className="item-price">
                  ${Number(item.price || 0).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping Fee</span>
            <span>{shipping_fee}</span>
          </div>
          <hr />
          <div className="summary-row total">
            <span>Total Amount</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};
