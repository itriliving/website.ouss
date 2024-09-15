import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./concept.module.css";

const Concept = ({ className = "" }) => {
  const [data, setData] = useState({
    title: "",
    title2: "",
    p1: "",
    p2: "",
    p3: "",
    p4: ""
  });

  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const sectionRef = useRef(null); // Ref for the section to observe

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL; // Fetch the base URL from env variables
    fetch(`${baseURL}/get_data1`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Intersection Observer to trigger animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the animation when visible
          observer.disconnect(); // Disconnect the observer once triggered
        }
      },
      { threshold: 0.3 } // Adjust as necessary, 10% visibility
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section
    }

    return () => observer.disconnect(); // Cleanup the observer
  }, []);

  return (
    <section ref={sectionRef} className={[styles.concept, className].join(" ")}>
      <div className={styles.itriLivingConceptParent}>
        <h1
          className={`${styles.itriLivingConceptContainer} ${
            isVisible ? styles.slideInFromLeft : ""
          }`}
        >
          <span className={styles.itriLivingConceptContainer1}>
            <span className={styles.itriLiving}>{data.title}</span>
            <i className={styles.concept1}>{data.title2}</i>
          </span>
        </h1>
        <div className={styles.conceptContent}>
          <div className={styles.contentContainerWrapper}>
            <div
              className={`${styles.contentContainer} ${
                isVisible ? styles.slideInFromLeft : ""
              }`}
            >
              <div className={styles.itrilivingIsAContainer}>
                <p className={styles.itrilivingIsA}>{data.p1}</p>
                <p className={styles.itrilivingIsA}>&nbsp;</p>
                <p className={styles.itrilivingIsA}>{data.p2}</p>
                <p className={styles.itrilivingIsA}>&nbsp;</p>
                <p className={styles.itrilivingIsA}>{data.p3}</p>
                <p className={styles.itrilivingIsA}>&nbsp;</p>
                <p className={styles.itrilivingIsA}>{data.p4}</p>
              </div>
            </div>
          </div>
          <img
            className={`${styles.sea815134012801Icon} ${
              isVisible ? styles.slideInFromRight : ""
            }`}
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
