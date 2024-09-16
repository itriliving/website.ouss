import PropTypes from "prop-types";
import React, { useEffect, useState, useRef } from "react";
import styles from "./exceptional.module.css";

const Exceptional = ({ className = "" }) => {
  const [data, setData] = useState({
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    b5: ""
  });
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const sectionRef = useRef(null); 
  useEffect(() => {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL; // Fetch the base URL from env variables
    fetch(`${baseURL}/get_data3`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the animation when it's visible
          observer.disconnect(); // Stop observing after it's visible
        }
      },
      { threshold: 0.1 } // Change this threshold to 30% visibility
    );
  
    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing
    }
  
    return () => observer.disconnect(); // Cleanup the observer
  }, []);
  return (
    <section className={[styles.exceptional, className].join(" ")}>
      <div className={styles.exceptionalContentParent}>
        <div className={styles.exceptionalContent}>
          <h1 className={`${styles.mediumLengthHeroContainer} ${!isVisible ? styles.hidden :  styles.slideInFromLeft}`}>
            <span
              className={styles.benefitsToBe}
            >{data.b1}</span>
            <i className={styles.customResorts}>{data.b2}</i>
          </h1>
          <div className={styles.actions}>
            <div className={styles.stylesecondarySmallfalse}>
            <div className={styles.contactUsFor}>
                 <a 
                      href="https://calendly.com/admin-itri/itri-living-concept-explained" 
                          target="_blank" 
                          rel="noopener noreferrer"
                           className={styles.noUnderline} // Ensure there's no underline
                                >
    Express your interest
  </a>
</div>

            </div>
          </div>
        </div>
        <h3 className={styles.exceptionalLocationBeachfroContainer}>
          <p className={styles.exceptionalLocationBeachfro}>
            <i>{data.b3}</i>
          </p>
          <p
            className={styles.authenticAccommodationFor}
          >{data.b4}</p>
          <p className={styles.authenticAccommodationFor}>&nbsp;</p>
          <p className={styles.stateOfTheArtFacilities}>
          {data.b5}
          </p>
        </h3>
      </div>
    </section>
  );
};

Exceptional.propTypes = {
  className: PropTypes.string,
};

export default Exceptional;
