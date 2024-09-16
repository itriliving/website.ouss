import TestimonialCard1 from "./testimonial-card1";
import PropTypes from "prop-types";
import styles from "./consultation.module.css";

const Consultation = ({ className = "" }) => {
  return (
    <section className={[styles.consultation, className].join(" ")}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.headingParent}>
            <h1 className={styles.heading}>Itri Living</h1>
            <div className={styles.paragraph}>in custom resorts</div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.actions}>
            <div className={styles.actions}>
              <div className={styles.actions}>
                <div className={styles.actions3}>
                  <div className={styles.stylesecondarySmallfalse}>
                  <div className={styles.consultation1}>
  <a 
    href="https://calendly.com/admin-itri/itri-living-concept-explained" 
    target="_blank" 
    rel="noopener noreferrer"
    className={styles.noUnderline}
  >
    Request a call
  </a>
</div>
                    <img className={styles.icon} alt="" src="/vector-8.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonials}>
          <div className={styles.testimonialCard}>
            <div className={styles.bgCard} />
            <img
              className={styles.image6Icon}
              loading="lazy"
              alt=""
              src="/image-6@2x.png"
            />
            <b className={styles.testimonalName}>Work Space + Supplies</b>
          </div>
          <div className={styles.testimonialCard1}>
            <div className={styles.bgCard} />
            <img className={styles.image6Icon} alt="" src="/image@2x.png" />
            <b className={styles.testimonalName1}>Cozy Bedrooms</b>
          </div>
          <div className={styles.testimonialCard2}>
            <div className={styles.bgCard} />
            <img className={styles.image6Icon} alt="" src="/image-7@2x.png" />
            <div className={styles.testimonalNameWrapper}>
              <b className={styles.testimonalName2}>Solid, Reliable Wifi</b>
            </div>
          </div>
          <div className={styles.testimonialCard1}>
            <div className={styles.bgCard} />
            <img className={styles.image6Icon} alt="" src="/image-8@2x.png" />
            <b className={styles.testimonalName3}>Fully Furnished</b>
          </div>
          <div className={styles.testimonialCard4}>
            <div className={styles.bgCard} />
            <img
              className={styles.image6Icon}
              loading="lazy"
              alt=""
              src="/image-9@2x.png"
            />
            <b className={styles.testimonalName3}>Well-equipped Kitchens</b>
          </div>
          <div className={styles.testimonialCard5}>
            <div className={styles.bgCard} />
            <img className={styles.image6Icon} alt="" src="/image-10@2x.png" />
            <div className={styles.testimonalNameContainer}>
              <b className={styles.testimonalName2}>
                <p className={styles.frechTowels}>Frech Towels +</p>
                <p className={styles.frechTowels}>Linens</p>
              </b>
            </div>
          </div>
          <TestimonialCard1
            image11="/image-11@2x.png"
            professionally="Professionally"
            cleaned="Cleaned"
          />
          <TestimonialCard1
            image11="/image-12@2x.png"
            propWidth="113.3px"
            propHeight="9.9px"
            professionally="Safe and"
            cleaned="Secure"
          />
          <TestimonialCard1
            image11="/image-13@2x.png"
            propWidth="192.7px"
            propHeight="unset"
            professionally="Local community"
            cleaned="Manager"
          />
          <div className={styles.testimonialCard6}>
            <div className={styles.bgCard} />
            <img className={styles.image6Icon} alt="" src="/image-14@2x.png" />
            <b className={styles.testimonalName3}>24/7 Support</b>
          </div>
          <div className={styles.testimonialCard6}>
            <div className={styles.bgCard} />
            <img className={styles.image6Icon} alt="" src="/image-15@2x.png" />
            <b className={styles.testimonalName3}>Coffee + Tea</b>
          </div>
          <div className={styles.testimonialCard8}>
            <div className={styles.bgCard} />
            <img className={styles.image6Icon} alt="" src="/image-16@2x.png" />
            <b className={styles.testimonalName8}>Contactless Check- in</b>
          </div>
        </div>
      </div>
    </section>
  );
};

Consultation.propTypes = {
  className: PropTypes.string,
};

export default Consultation;
