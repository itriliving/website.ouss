import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./concept.module.css";

const Concept = ({ className = "" }) => {
  // State to hold the API response
  const [data, setData] = useState({
    title: "",
    title2: "",
    p1: "",
    p2: "",
    p3: "",
    p4: ""
  });

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch("http://127.0.0.1:5000/get_data1")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className={[styles.concept, className].join(" ")}>
      <div className={styles.itriLivingConceptParent}>
        <h1 className={styles.itriLivingConceptContainer}>
          <span className={styles.itriLivingConceptContainer1}>
            <span className={styles.itriLiving}>{data.title}</span>
            <i className={styles.concept1}>{data.title2}</i>
          </span>
        </h1>
        <div className={styles.conceptContent}>
          <div className={styles.contentContainerWrapper}>
            <div className={styles.contentContainer}>
              <div className={styles.itrilivingIsAContainer}>
                <p className={styles.itrilivingIsA}>{data.p1}</p>
                <p className={styles.itrilivingIsA}>&nbsp;</p>
                <p className={styles.itrilivingIsA}>{data.p2}</p>
                <p className={styles.itrilivingIsA}>&nbsp;</p>
                <p className={styles.itrilivingIsA}>{data.p3}</p>
                <p className={styles.itrilivingIsA}>&nbsp;</p>
                <p className={styles.itrilivingIsA}>{data.p4}</p>
              </div>
              <div className={styles.requestCall}>
                <b className={styles.requestACallContainer}>
                <a 
    href="https://calendly.com/admin-itri/itri-living-concept-explained" 
    target="_blank" 
    rel="noopener noreferrer"
    className={styles.buttonContainer}
    style={{ textDecoration: 'none' }} // Inline style as an option
  >
    <b className={styles.requestACallContainer}>
      
      <span className={styles.aCall}>Request a Call</span>
    </b>
  </a>
                </b>
              </div>
            </div>
          </div>
          <img
            className={styles.sea815134012801Icon}
            loading="lazy"
            alt=""
            src="/sea8151340-1280-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

Concept.propTypes = {
  className: PropTypes.string,
};

export default Concept;
