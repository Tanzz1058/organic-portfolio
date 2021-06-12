import React from "react";

const MenuItems = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: "20px",
        justifyContent: "space-between",
      }}
    >
      <a href="/">Home</a>
      <a href="/">Products</a>
      <a href="/">Blog</a>
      <a href="/">About Us</a>
      <a href="/">Contact</a>
    </div>
  );
};

export default MenuItems;
