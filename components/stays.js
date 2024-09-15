import PropTypes from "prop-types";
import styles from "./stays.module.css";
import React, { useEffect, useState } from "react";


const Stays = ({ className = "" }) => {
  const [data, setData] = useState({
    d1: "",
    d2: "",
    d3: "",
    d4: ""
  });
    
  useEffect(() => {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL; // Fetch the base URL from env variables
    fetch(`${baseURL}/get_data5`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className={[styles.stays, className].join(" ")}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.experience}>
            <h1 className={styles.stayWithItriContainer}>
              <p className={styles.stayWith}>{data.d1}</p>
              <p className={styles.itriLiving}>
                <i className={styles.itriLiving1}>{data.d2}</i>
              </p>
            </h1>
            <h3 className={styles.eachStayIsContainer}>
              <p className={styles.eachStayIs}>
              {data.d3}
              </p>
              <p className={styles.eachStayIs}>&nbsp;</p>
              <p className={styles.eachStayIs}>
              {data.d4}
              </p>
            </h3>
            <div className={styles.stylesecondarySmallfalse}>
            <div className={styles.bookAStay}>
    Book a Stay
</div>
            </div>
          </div>
        </div>
        <img
          className={styles.sea815134012802Icon}
          loading="lazy"
          alt=""
          src="/sea8151340-1280-2@2x.png"
        />
      </div>
    </section>
  );
};

Stays.propTypes = {
  className: PropTypes.string,
};

export default Stays;
