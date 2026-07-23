import React from "react";
import { useCartContext } from "../context/cart_context";
import "../styles/CartPage.css";

// Demo Data / YA phir aap API/Props se actual products pass kar sakte hain
export const CartPage = ({ allProducts = [] }) => {
  const { cart, shipping_fee } = useCartContext();

  // IDs ki madad se saare product objects collect kar rahe hain
  const cartItems = cart
    .map((id) => {
      // id variable standard integer ya object dono format me ho sakta hai
      const actualId = typeof id === "object" ? id.productid : id;
      return allProducts.find((item) => (item._id || item.id) === actualId);
    })
    .filter(Boolean); // undefined elements hata do

  // Total Price Calculate kar rahe hain
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Aapka Cart Khali Hai 🛒</h2>
        <p>Kuch awesome products add karein!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart ({cart.length} items)</h2>

      <div className="cart-content">
        {/* Left: Cart Items List */}
        <div className="cart-items-list">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title || item.name} />
              <div className="item-details">
                <h4>{item.title || item.name}</h4>
                <p className="item-category">{item.category}</p>
                <span className="item-price">${item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Order Summary */}
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
