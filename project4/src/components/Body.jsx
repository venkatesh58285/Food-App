import { useState, useEffect } from "react";
import styles from "../styles/body.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const api_key = "589541c97c3d4e5594d17a7bb74be047";
export default function Body({ type, val }) {
  const [data, setData] = useState({ results: [] });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${URL}?query=${val}&apiKey=${api_key}&number=12&type=${type}`
        );
        if (!res.ok) throw new Error("There is a error ");
        const da = await res.json();
        setData(da);
      } catch (err) {
        console.error(err);
        setData([]);
      }
    };
    fetchData();
  }, [val, type]);
  const dataRequired = data.results.filter((item) => {
    if (!val) {
      return true;
    }
    let regex = new RegExp(val, "i");
    return regex.test(item.title);
  });
  function handle_cart({ item }) {
    localStorage.setItem(item.title, item.title);
    alert("Item Added TO Cart");
  }
  return (
    <div className={styles.body}>
      {dataRequired.length > 0 ? (
        dataRequired.map((item) => (
          <div key={item.id} className={styles.m_b}>
            <div className={styles.m_b_i}>
              <div className={styles.m_b_i_l}>
                <img src={item?.image} alt="Failed to load" />
              </div>
              <div className={styles.m_b_i_r}>
                <div className={styles.m_b_i_r_u}>
                  <p className={styles.item_title}>{item?.title}</p>
                  <p>
                    This is a famous dish loved by many and it have rating
                    greater than 5 star you should try it..
                  </p>
                </div>
                <div className={styles.m_b_i_r_d}>
                  <button onClick={() => handle_cart({ item })}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Error</div>
      )}
    </div>
  );
}
