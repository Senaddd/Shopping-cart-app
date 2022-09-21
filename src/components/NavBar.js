import React from "react";
import { NavLink, Routes } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between pr-10 gap-4 p-5">
        <NavLink to={"/"}>
          <h1>Shop online!</h1>
        </NavLink>
        <div className="flex justify-end gap-5">
          <NavLink to={"/products"}>
            <h2>Products</h2>
          </NavLink>
          <NavLink to={"/about"}>
            <h2> About us</h2>
          </NavLink>
          <NavLink to={"/cart"}>
            <h2>Go to cart</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
