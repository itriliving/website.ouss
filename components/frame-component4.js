import PropTypes from "prop-types";
import styles from "./frame-component4.module.css";
import React, { useEffect, useState } from "react";



const FrameComponent4 = ({ className = "" }) => {
  const [data, setData] = useState({
    f1: "",
    f2: "",
    f3: "",
    f4: "",
    f5: "",
    f6: "",
    f7: "",
    f8: "",
    f9: "",
    f10: "",
    f11: "",
    f12: "",
    f13: "",
    f14: "",
    f15: "",
    f16: ""
  });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get_data7")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className={[styles.partnershipWrapper, className].join(" ")}>
      <div className={styles.partnership}>
        <div className={styles.partnershipContent}>
          <div className={styles.partnershipInfo}>
            <h1 className={styles.itrinftPartnershipWithContainer}>
              <span className={styles.itrinftPartnershipWithContainer1}>
                <div className={styles.itrinftPartnershipWith}>
                  <b>{data.f1}</b>
                </div>
                <div className={styles.itriliving}>
                  <i className={styles.itriliving1}>{data.f2}</i>
                </div>
              </span>
            </h1>
            <div className={styles.partnershipDescription}>
              <div className={styles.itrilivingHasDevelopedContainer}>
                <div className={styles.itrinftPartnershipWith}>
                  {data.f3}
                </div>
                <div className={styles.itrinftPartnershipWith}>&nbsp;</div>
                <div className={styles.itrinftPartnershipWith}>
                  {data.f4}
                </div>
                <div className={styles.itrinftPartnershipWith}>&nbsp;</div>
                <div className={styles.itrinftPartnershipWith}>
                  {data.f5}
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.valentinLacosteGzu0bAe2ckUIcon}
            loading="lazy"
            alt=""
            src="/valentinlacostegzu0b-ae2ckunsplash-1@2x.png"
          />
        </div>
        <div className={styles.islandArticle}>
          <img
            className={styles.faitesVosValisesPourCesI}
            loading="lazy"
            alt=""
            src="/faites-vos-valises-pour-ces-iles-mediterraneennes-1@2x.png"
          />
          <div className={styles.commitment}>
            <div className={styles.commitmentContent}>
              <h1 className={styles.itrilivingCommitmentToContainer}>
                <span>
                  <div className={styles.itrinftPartnershipWith}>
                    <i className={styles.itriliving2}>{data.f6}</i>
                    <b>{data.f7}</b>
                  </div>
                  <div className={styles.itrinftPartnershipWith}>
                    <b>{data.f8}</b>
                  </div>
                </span>
              </h1>
              <div className={styles.weAreDedicatedContainer}>
                <span className={styles.itrinftPartnershipWithContainer1}>
                  <div className={styles.itrinftPartnershipWith}>
                    {data.f9}
                  </div>
                  <div className={styles.itrinftPartnershipWith}>&nbsp;</div>
                  <div className={styles.itrinftPartnershipWith}>
                    <i className={styles.ourCommitmentTo}>
                      {data.f10}
                    </i>
                    <span>&nbsp;</span>
                  </div>
                  <ol className={styles.exclusiveAccommodationOffers}>
                    <li className={styles.continuousResortExpansion}>
                      <span>
                        <b className={styles.exclusiveAccommodationOffers2}>{data.f11}</b>
                        <span className={styles.exclusiveAccommodationOffers2}>&nbsp;</span>
                        <span className={styles.eachNftHolder}>
                          {data.f12}
                        </span>
                      </span>
                    </li>
                    <li className={styles.continuousResortExpansion}>
                      <span>
                        <b className={styles.exclusiveAccommodationOffers2}>{data.f13}</b>
                        <span className={styles.exclusiveAccommodationOffers2}>&nbsp;</span>
                        <span className={styles.wePledgeTo}>
                          {data.f14}
                        </span>
                      </span>
                    </li>
                    <li className={styles.continuousResortExpansion}>
                      <span>
                        <b className={styles.exclusiveAccommodationOffers2}>{data.f15}</b>
                      </span>
                    </li>
                    <li>
                      <span className={styles.wePledgeTo}>
                        {data.f16}
                      </span>
                    </li>
                  </ol>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};
export default FrameComponent4;