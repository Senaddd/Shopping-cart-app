import React, { useContext, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
const CartIcon = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  return (
    <div>
      <ShoppingCartIcon></ShoppingCartIcon>
      <span> {cartItems.length}</span>
    </div>
  );
};

export default CartIcon;
