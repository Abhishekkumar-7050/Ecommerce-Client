import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import CartItem from "../../components/cartItem/CartItem";
import "./SideCart.scss";

function SideCart({ onClose }) {
  const price = `₹ ${5000}`;

  return (
    <div className="SideCart">
      <div className="overlay" onClick={onClose}></div>
      <div className="sideCartContent">
        <div className="sideCartHeading">
          <h3>Shopping Cart</h3>
          <div onClick={onClose}>
            <IoIosCloseCircleOutline className="closeBtn" />
          </div>
        </div>
        <div className="cartItem">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="totalPrice">
          <h2>TOTAL:</h2>
          <h2>{price}</h2>
        </div>

        <div className="checkOutBtn">
          <button className="primary-btn">CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
}

export default SideCart;
