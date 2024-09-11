import PropTypes from "prop-types";
import styles from "./frame-component2.module.css";
import React, { useEffect, useState } from "react";

const FrameComponent2 = ({ className = "" }) => {
  const [data, setData] = useState({
    e1: "",
    e2: "",
    e3: "",
    e4: "",
    e5: "",
    e6: "",
    e7: "",
    e8: "",
    e9: ""
  });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get_data6")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className={[styles.contentWrapper, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.content1}>
          <h1 className={styles.reminder}>{data.e1}</h1>
          <div className={styles.pleaseNoteThatContainer}>
            <p className={styles.pleaseNoteThat}>{data.e2}</p>
            <p className={styles.pleaseNoteThat}>&nbsp;</p>
            <p className={styles.howeverWeHave}>{data.e3}</p>
            <p className={styles.pleaseNoteThat}>&nbsp;</p>
            <p className={styles.pleaseNoteThat}>{data.e4}</p>
            <p className={styles.pleaseNoteThat}>&nbsp;</p>
            <p className={styles.pleaseNoteThat}>{data.e5}</p>
            <p className={styles.pleaseNoteThat}>&nbsp;</p> {/* Corrected here */}
            <p className={styles.pleaseNoteThat}>{data.e6}</p>
          </div>
        </div>
        <div className={styles.content2}>
          <div className={styles.commitment}>
            <div className={styles.commitmentChild} />
            <div className={styles.weAreCommittedContainer}>
              <b>{data.e7}</b>
              <i className={styles.tailorMade}>{data.e8}</i>
              <b>{data.e9}</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
