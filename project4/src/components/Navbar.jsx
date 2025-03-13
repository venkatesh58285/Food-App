import { useState } from "react";
import styles from "../styles/navbar.module.css";
export default function Navbar({ setType,val,setInterval }) {
  

  return (
    <div className={styles.nav}>
      <div className={styles.nav_head}>
        <h1>Foody Zone</h1>
        <input
          type="text"
          value={val}
          placeholder="Search Food..."
          onChange={(e) => setInterval(e.target.value)}
        />
      </div>
      <div className={styles.nav_main}>
        <ul className={styles.nav_main_ul}>
          <li>
            <button
              onClick={() => {
                setType("");
              }}
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setType("breakfast");
              }}
            >
              Breakfast
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setType("lunch");
              }}
            >
              Lunch
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setType("snacks");
              }}
            >
              Snacks
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
