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
      if (state.some((item) => item.name === action.title && item.count <= 1)) {
        localStorage.removeItem(action.title);
        return state.filter((item) => item.name !== action.title);
      }
      return state.map((item) =>
        item.name === action.title
          ? { ...item, count: item.count - action.payload }
          : item
      );

    case "bought":
      return state.map((item) =>
        item.name == action.title
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
    let keys = Object.keys(localStorage);
    let values = keys.map((key) => localStorage.getItem(key));
    dispatch({ type: "set_values", payload: values });
  }, []);
  function handle(data) {
    localStorage.removeItem(data);
    dispatch({ type: "delete_values", title: data });
  }
  function buy(name) {
    alert(`${name} bought successfully`);
    let arr = JSON.parse(localStorage.getItem("purchase")) || [];
    arr.push(name);
    localStorage.setItem("purchase", JSON.stringify(arr));
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
