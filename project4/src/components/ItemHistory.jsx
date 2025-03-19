import styles from "../styles/historyitems.module.css";
export default function ItemHistory() {
  let ele = JSON.parse(localStorage.getItem("purchase"));
  return (
    <div className={styles.item}>
      <h1>Items Purchased</h1>
     <div className = {styles.itemContainer}> 
     {ele.map((item) => (
        <p>{item}</p>
      ))}
     </div>
    </div>
  );
}
