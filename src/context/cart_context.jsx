import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cart_reducer";

const CartContext = createContext();
const initialState = {
  cart: [],
  total_item: 0,
  total_amount: 0,
  shipping_fee: "Free",
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const Addtocart = (product) => {
    dispatch({ type: "Add_to_cart", payload: product });
  };

  return (
    <CartContext.Provider value={{ ...state, Addtocart }}>
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
