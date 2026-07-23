import React from "react";
import "../styles/Product.css";
import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://shopease-api-six.vercel.app/api";
import { useCartContext } from "../context/cart_context";

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { Addtocart } = useCartContext();
  useEffect(() => {
    const fetchproducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "/products?page=1&limit=12&sort=newest",
        );

        setProducts(response.data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchproducts();
  }, []);
  if (loading) {
    return <div className="loading-text">Loading All Products...</div>;
  }

  if (error) {
    return <div className="error-text">Error: {error}</div>;
  }

  return (
    <div className="dark-container">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          {/* Top Image Section */}
          <div className="image-container">
            <span className="category-badge">{product.category}</span>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </div>

          {/* Content Section */}
          <div className="card-content">
            <h2 className="product-title">{product.name}</h2>
            <p className="product-description">{product.description}</p>

            {/* Footer Section */}
            <div className="card-footer">
              <span className="product-price">${product.price}</span>
              <button
                className="cart-button"
                onClick={() => {
                  Addtocart(product._id);
                }}
              >
                <svg
                  className="cart-icon"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
