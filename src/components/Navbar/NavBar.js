import React, { useContext } from "react";
import { NavLink, Routes } from "react-router-dom";
import CartIcon from "./CartIcon";

const NavBar = () => {
  return (
    <div className="text-white">
      <div className="flex justify-between pr-10 gap-4 p-5 bg-blue-900 ">
        <NavLink to={"/"}>
          <h1 className="font-bold text-4xl">Online Shop</h1>
        </NavLink>
        <div className="flex justify-end gap-6 font-bold pr-4 text-2xl">
          <NavLink to={"/"}>
            <h2>Products</h2>
          </NavLink>
          <NavLink to={"/about"}>
            <h2> About us</h2>
          </NavLink>
          <span>Cart</span>
          <NavLink to={"/cart"}>
            <CartIcon />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
