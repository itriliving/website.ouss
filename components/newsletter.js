import PropTypes from "prop-types";
import styles from "./newsletter.module.css";

const Newsletter = ({ className = "" }) => {
  return (
    <div className={[styles.newsletter, className].join(" ")}>
      <div className={styles.newsletterContent}>
        <div className={styles.newsletterForm}>
          <div className={styles.keepUpWithContainer}>
            <span>
              <p className={styles.keepUpWith}>
                Keep up with location openings,
              </p>
              <p className={styles.keepUpWith}>
                community events, and other news.
              </p>
            </span>
          </div>
          <div className={styles.form}>
            <div className={styles.input}>
              <div className={styles.nameemailcom}>name@email.com</div>
            </div>
            <img
              className={styles.buttonIcon}
              loading="lazy"
              alt=""
              src="/button.svg"
            />
          </div>
        </div>
        <div className={styles.verticalborder}>
          <div className={styles.downloadTheItriAppNowWrapper}>
            <div className={styles.downloadTheItri}>
              Download the Itri App Now
            </div>
          </div>
          <div className={styles.appStoreButtons}>
            <img
              className={styles.linkAppStoreButton667a53}
              loading="lazy"
              alt=""
              src="/link--appstorebutton667a5374svg.svg"
            />
            <img
              className={styles.linkGooglePlayButton0e48}
              loading="lazy"
              alt=""
              src="/link--googleplaybutton0e482296svg.svg"
            />
          </div>
          <img
            className={styles.removalai121894cdCd9e424bIcon}
            loading="lazy"
            alt=""
            src="/removalai-121894cdcd9e424baed2259dea93b24e-graident-ai-robot-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

Newsletter.propTypes = {
  className: PropTypes.string,
};

export default Newsletter;
