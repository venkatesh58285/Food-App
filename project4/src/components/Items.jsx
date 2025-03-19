import { useState, useEffect, useReducer } from "react";
import styles from "../styles/item.module.css";
function reducer(state, action) {
  switch (action.type) {
    case "set_values":
      return action.payload.map((name) => ({ name, count: 1 }));

    case "increment":
      return state.map((item) =>
        item.name == action.title
          ? { ...item, count: item.count + action.payload }
          : item
      );

    case "decrement":
    case "bought":
      if (state.some((item) => item.name === action.title && item.count <= 1)) {
        localStorage.removeItem(action.title);
        return state.filter((item) => item.name !== action.title);
      }
      return state.map((item) =>
        item.name === action.title
          ? { ...item, count: item.count - action.payload }
          : item
      );

    case "delete_values":
      return state.filter((item) => item.name != action.title);
  }
}
const Items = () => {
  const [state, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    let key = Object.keys(localStorage);
    let keys = key.filter((k) => k !== "purchase");

    let values = keys.map((key) => {
      try {
        return JSON.parse(localStorage.getItem(key));
      } catch {
        return localStorage.getItem(key);
      }
    });

    dispatch({ type: "set_values", payload: values });
  }, [state.length]);
  function handle(data) {
    localStorage.removeItem(data);
    dispatch({ type: "delete_values", title: data });
  }
  function buy(name) {
    alert(`${name} bought successfully`);

    let storedData = localStorage.getItem("purchase");
    let arr = [];

    if (storedData) {
      try {
        arr = JSON.parse(storedData);
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
        arr = [];
      }
    }

    if (!arr.includes(name)) {
      arr.push(name);
      localStorage.setItem("purchase", JSON.stringify(arr));
    }

    dispatch({ type: "bought", title: name, payload: 1 });
  }

  return (
    <div className={styles.item_container}>
      {state.length > 0 ? (
        state.map((value) => (
          <div className={styles.item}>
            <p>{value.name}</p>
            <div className={styles.count}>
              <p>Quantity:{value.count}</p>
              <button
                onClick={() =>
                  dispatch({ type: "increment", payload: 1, title: value.name })
                }
                className={styles.count1}
              >
                +
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "decrement", payload: 1, title: value.name })
                }
                className={styles.count2}
              >
                -
              </button>
            </div>
            <div>
              <button
                onClick={() => handle(value.name)}
                className={styles.delete}
              >
                Delete
              </button>
              <button onClick={() => buy(value.name)} className={styles.buy}>
                BUY
              </button>
            </div>
          </div>
        ))
      ) : (
        <>
          <p>Error loading</p>
        </>
      )}
    </div>
  );
};
export default Items;
