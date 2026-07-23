import React from "react";

export const cartReducer = (state, action) => {
  if (action.type === "Add_to_cart") {
    const { productid } = action.payload;
    console.log(productid);

    // 🟢 Return ko IF condition ke ANDAR hi hona chahiye
    return {
      ...state,
      cart: [...state.cart, productid],
    };
  }

  // 🟢 Agar action match na ho, toh default state return karein
  return state;
};
