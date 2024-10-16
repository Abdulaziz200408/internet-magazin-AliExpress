import { Menu } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "95%",
          position: "fixed",
          top: -10,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
        className="container mx-auto flex justify-center py-4"
      >
        <nav
          style={{
            height: "70px",
            borderBottom: "1px solid #ccc",
            paddingTop: "10px",
          }}
          className="bg-red-600 text-white rounded-lg w-full "
        >
          <div className="flex items-center justify-between px-6">
            <div className="text-2xl font-bold">
              <Link to="/card" className="text-white font-semibold">
                AliExpress
              </Link>
            </div>

            <div className="flex items-center bg-white rounded-lg px-2 py-1 w-1/4">
              <input
                type="text"
                placeholder="Mahsulot qidirish"
                className="flex-grow px-2 py-1 text-black outline-none rounded-md"
              />
              <button className="bg-green-400 text-white px-3 py-1 rounded-md font-semibold">
                Qidirish
              </button>
            </div>

            <div className="flex items-center space-x-6 ms-5">
              <Link to="/orders" className="text-white">
                Buyurtmalar
              </Link>
              <Link to="/cart" className="text-white">
                <ShoppingCartOutlined style={{ fontSize: "24px" }} />
                Savat
              </Link>
              <Link to="/login" className="text-white">
                <UserOutlined style={{ fontSize: "24px" }} />
                Kirish
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
