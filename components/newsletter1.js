import PropTypes from "prop-types";
import styles from "./newsletter1.module.css";

const Newsletter1 = ({ className = "" }) => {
  return (
    <section className={[styles.newsletter, className].join(" ")}>
      <div className={styles.card}>
        <div className={styles.newsletterContent}>
          <h1 className={styles.heading}>
            <span>{`Get Early Access to Sign-up to your `}</span>
            <i className={styles.itrilivingAccount}>Itri.living account</i>
          </h1>
          <div className={styles.description}>
            Be the first to experience our latest innovative Hospitality
            technologies.
          </div>
        </div>
        <div className={styles.emailForm}>
          <div className={styles.formContainer}>
            <div className={styles.form}>
              <div className={styles.typedefault}>
                <div className={styles.yourEmail}>Your email</div>
              </div>
              <div className={styles.styleprimarySmallfalseDa}>
                <div className={styles.go}>Go</div>
              </div>
            </div>
            <div className={styles.byClickingSign}>
              By joining, you agree to our Terms and Conditions.
            </div>
            <div className={styles.socialLogin}>
              <div className={styles.button}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.socialLabels}>Sign In with Google</div>
              </div>
              <div className={styles.button1}>
                <img
                  className={styles.icon}
                  alt=""
                  src="/facebook--original.svg"
                />
                <div className={styles.socialLabels}>Sign In with Facebook</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Newsletter1.propTypes = {
  className: PropTypes.string,
};

export default Newsletter1;
