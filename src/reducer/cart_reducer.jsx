import React from "react";

export const cartReducer = (state, action) => {
  if (action.type === "Add_to_cart") {
    const product = action.payload;

    if (!product) {
      return state;
    }

    const normalizedProduct =
      typeof product === "object" && product !== null
        ? { ...product, quantity: 1 }
        : { id: product, quantity: 1 };

    return {
      ...state,
      cart: [...state.cart, normalizedProduct],
    };
  }

  return state;
};
