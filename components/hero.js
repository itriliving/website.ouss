import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./hero.module.css";

const Hero = ({ className = "" }) => {

    const [data, setData] = useState({
      a1: "",
      a2: "",
      a3: "",
      a4: "",
      a5: ""
    });
      
    useEffect(() => {
      const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL; // Fetch the base URL from env variables
    fetch(`${baseURL}/get_data0`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
           
  return (
    <section className={[styles.hero, className].join(" ")}>
      <header className={styles.heroContainerParent}>
        <div className={styles.heroContainer}>
          <img
            className={styles.captureDEcran20240625AIcon}
            alt=""
            src="/capture-d-ecran-20240625-a-132902removebgpreview-1@2x.png"
          />
          <div className={styles.heroContent}>
            <div className={styles.heroTitle}>
              <div className={styles.vectorWrapper}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.heroButton}>
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
</div>


              <div className={styles.buttonMenu}>
                <img
                  className={styles.backgroundborderIcon}
                  alt=""
                  src="/backgroundborder.svg"
                />
                <div className={styles.imgWrapper}>
                  <img className={styles.imgIcon} alt="" src="/img.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.experience} />
      </header>
      <div className={styles.uniquely}>
        <div className={styles.experienceUniquelyParent}>
          <h1 className={styles.experienceUniquely}>
            <span>
              <p className={styles.travelUniquely}>
                <span className={styles.travel}>{data.a1}</span>
                <i>{data.a2}</i>
              </p>
              <p className={styles.travelUniquely}>
                <span className={styles.travel}>{data.a3}</span>
                <i>{data.a4}</i>
              </p>
            </span>
          </h1>
          <div className={styles.frameWrapper}>
            <div className={styles.discoverItriLivingParent}>
              <div className={styles.discoverItriLiving}>
              {data.a5}
              </div>
              <img className={styles.icon} alt="" src="/8@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;