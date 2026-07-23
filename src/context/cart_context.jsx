import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cart_reducer";

const CartContext = createContext();
const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
  shipping_fee: "Free",
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const Addtocart = (productid) => {
    dispatch({ type: "Add_to_cart", payload: { productid } });
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
