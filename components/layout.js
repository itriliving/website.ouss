import PropTypes from "prop-types";
import styles from "./layout.module.css";

const Layout = ({ className = "" }) => {
  return (
    <div className={[styles.layout, className].join(" ")}>
      <div className={styles.layoutChild} />
      <div className={styles.images}>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/rectangle-6@2x.png"
        />
        <div className={styles.imageContainer}>
          <img
            className={styles.imageIcon1}
            loading="lazy"
            alt=""
            src="/rectangle-7@2x.png"
          />
        </div>
      </div>
      <div className={styles.booking}>
        <div className={styles.wrapper}>
          <div className={styles.heading2WhyBecomeAMembeParent}>
            <h1 className={styles.heading2}>Save up 80%</h1>
            <h1 className={styles.heading2Container}>
              <span>
                <p className={styles.onYourSeaside}>On your seaside</p>
                <p className={styles.onYourSeaside}>vacation</p>
              </span>
            </h1>
          </div>
          <div className={styles.stylesecondarySmallfalse}>
          <div className={styles.bookAStay}>
 
    Book a Stay
 
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
};

export default Layout;
