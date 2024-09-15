import PropTypes from "prop-types";
import React, { useEffect, useState, useRef } from "react";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  const [data, setData] = useState({
    title: "",
    title2: "",
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    p6: "",
    p7: "",
    p8: "",
    p9: "",
    p10: "",
    p11: "",
    p12: "",
    p13: "",
    p14: "",
    p15: "",
    p16: "",
    p17: "",
    p18: "",
    p19: "",
  });
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const sectionRef = useRef(null); 
  // Fetch data from the API when the component loads
  useEffect(() => {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL; // Fetch the base URL from env variables
    fetch(`${baseURL}/get_data2`)
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData))
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
      { threshold: 0.3 } // Change this threshold to 30% visibility
    );
  
    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing
    }
  
    return () => observer.disconnect(); // Cleanup the observer
  }, []);
  return (

    
    <div ref={sectionRef} className={[styles.image5Parent, className].join(" ")}>
      <img
        className={styles.image5Icon}
        loading="lazy"
        alt=""
        src="/image-5@2x.png"
      />
      <div className={styles.memberContent}>
      <div className={`${styles.memberContentChild} ${isVisible ? styles.slideInFromBottom : ""}`} />
        <div className={styles.contentContainer}>
          <div className={styles.heading2WhyBecomeAMembeParent}>
          <h1 className={`${styles.heading2Container} ${isVisible ? styles.slideInFromLeft : ""}`}>
              <span className={styles.heading2Container1}>
                <span
                  className={styles.tokenisedAccomodationRights}
                >{data.title}</span>
                <i className={styles.itriToken}>{data.title2}</i>
              </span>
            </h1>
            <div className={styles.memberToken}>
              <img
                className={styles.leonardoPhoenixAHighlyDetaIcon}
                loading="lazy"
                alt=""
                src="/leonardo-phoenix-a-highly-detailed-gold-token-with-a-prominent-1@2x.png"
              />
              <div className={styles.tokenDescription}>
                <div className={styles.atItrilivingAccomodationsContainer}>
                  <p
                    className={styles.atItrilivingAccomodations}
                  > {data.p1}</p>
                  <p className={`${styles.asItriTokensItriTokensHa} ${isVisible ? styles.slideInFromRight : ""}`}>
                    <span className={styles.asItriTokens}>{data.p2}</span>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>
                      {data.p3} 
                      </span>
                    </span>
                  </p>
                  <p className={`${styles.blankLine} ${isVisible ? styles.slideInFromRight : ""}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>&nbsp;</span>
                    </span>
                  </p>
                  <p className={`${styles.blankLine} ${isVisible ? styles.slideInFromRight : ""}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <b>{data.p4}</b>
                    </span>
                  </p>
                  <p className={`${styles.blankLine} ${isVisible ? styles.slideInFromRight : ""}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>{data.p5}</span>
                    </span>
                  </p>
                  <p className={`${styles.blankLine} ${isVisible ? styles.slideInFromRight : ""}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>
                      {data.p6}
                      </span>
                    </span>
                  </p>
                  <p className={`${styles.blankLine} ${isVisible ? styles.slideInFromRight : ""}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>&nbsp;</span>
                    </span>
                  </p>
                  <p className={`${styles.blankLine} ${isVisible ? styles.slideInFromRight : ""}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <b>{data.p7}</b>
                    </span>
                  </p>
                  <p className={`${styles.blankLine} ${isVisible ? styles.slideInFromRight : ""}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>{data.p8}</span>
                    </span>
                  </p>
                  <p className={`${styles.blankLine} ${isVisible ? styles.slideInFromRight : ""}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>{data.p9}</span>
                    </span>
                  </p>
                  <p className={`${styles.blankLine} ${isVisible ? styles.slideInFromRight : ""}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>{data.p10}</span>
                    </span>
                  </p>
                  <p className={`${styles.blankLine} ${isVisible ? styles.slideInFromRight : ""}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>{data.p11}</span>
                    </span>
                  </p>
                  <p className={`${styles.blankLine} ${isVisible ? styles.slideInFromRight : ""}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>&nbsp;</span>
                    </span>
                  </p>
                  <p className={`${styles.blankLine} ${isVisible ? styles.slideInFromRight : ""}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <b className={styles.royaltyFees}>{data.p12}</b>
                      <span className={styles.itriTokensHaveTheFollowing}>
                      {data.p13}
                      </span>
                    </span>
                  </p>
                  <p className={`${styles.blankLine} ${isVisible ? styles.slideInFromRight : ""}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span className={styles.itriTokensHaveTheFollowing}>
                        &nbsp;
                      </span>
                    </span>
                  </p>
                  <p className={`${styles.blankLine} ${isVisible ? styles.slideInFromRight : ""}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <b className={styles.accomodationBooking2}>
                      {data.p14}
                      </b>
                      <span>{` : `}</span>
                    </span>
                  </p>
                  <p className={`${styles.blankLine} ${isVisible ? styles.slideInFromRight : ""}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>
                      {data.p15}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.valuable}>
          <div className={styles.valuableContainerWrapper}>
            <div className={styles.valuableContainer}>
              <div className={styles.valuableContainerChild} />
              <div className={styles.valuableContent}>
                <h1 className={styles.mediumLengthHeroContainer}>
                  <span
                    className={styles.tokenisedAccomodationRights}
                  >{data.p16}</span>
                  <i className={styles.value}>{data.p17}</i>
                  <span className={styles.tokenisedAccomodationRights}>
                    {" "}
                    {data.p18}
                  </span>
                </h1>
                <h3 className={styles.theseAreWhat}>
                 {data.p19}
                </h3>
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
            </div>
          </div>
          <div className={styles.family}>
            <div className={styles.image5Group}>
              <img
                className={styles.image5Icon1}
                alt=""
                src="/image-5-1@2x.png"
              />
              <div className={styles.familyButton}>
                <div className={styles.stylesecondarySmallfalse1}>
                  <div className={styles.contactUsFor}>Family</div>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.nature}>
              <div className={styles.natureCircleWrapper}>
                <div className={styles.natureCircle}>
                  <img
                    className={styles.divcircleIcon}
                    alt=""
                    src="/divcircle@2x.png"
                  />
                  <img
                    className={styles.divcircleIcon1}
                    alt=""
                    src="/divcircle-1.svg"
                  />
                </div>
              </div>
              <div className={styles.stylesecondarySmallfalse1}>
                <div className={styles.contactUsFor}>Nature</div>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
