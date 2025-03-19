import styles from "../styles/navbar.module.css";
import image from "../assets/image.png";
import { useState } from "react";
import Items from "./Items";
import {useNavigate} from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  function handle(){
    navigate("/items")
  }
  return (
    <>
      <button onClick={handle} className={styles.cart}>
        <img src={image} alt="Failed to upload" />
      </button>
    </>
  );
};
export default Cart;
