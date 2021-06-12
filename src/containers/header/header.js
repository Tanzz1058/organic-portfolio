import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "antd/dist/antd.css";

import { Drawer } from "antd";
import logo from "../../assets/images/logo.png";
import "./header.css";
import MenuItems from "../menuItems/menuItems";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  return (
    <header className="page-header">
      <div className="logo-title">
        <img src={logo} alt="logo" className="logo-image" />
        <span>organic</span>
      </div>
      <AiOutlineMenu className="menu-icon" onClick={() => setVisible(true)} />
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <MenuItems />
      </Drawer>
      <div className="menu-items">
        <a href="/">Home</a>
        <a href="/">Products</a>
        <a href="/">Blog</a>
        <a href="/">About Us</a>
        <a href="/">Contact</a>
      </div>
    </header>
  );
};

export default Header;
