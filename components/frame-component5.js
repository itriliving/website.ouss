import HorizontalBorder from "./horizontal-border";
import PropTypes from "prop-types";
import styles from "./frame-component5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={[styles.questionWrapper, className].join(" ")}>
      <div className={styles.question}>
        <div className={styles.questionContent}>
          <div className={styles.questionInfo}>
            <h1 className={styles.heading2Container}>
              <b>{`Go to questions on `}</b>
              <i className={styles.itrilivingClub}>Itri.living club?</i>
            </h1>
            <div className={styles.ifOurMembershipFaqsAreNotWrapper}>
              <div className={styles.ifOurMembership}>
                If our Membership FAQs are not enough, feel free to book a call
                with us and we’ll be happy to assist you!
              </div>
            </div>
            <div className={styles.consultation}>
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
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector-8.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.border}>
          <div className={styles.fAQList}>
            <div className={styles.fAQItem}>
              <div
                className={styles.whatIsItriliving}
              >{`What is Itri.Living? `}  </div>
             
              <div className={styles.imageContainer}>
                <img className={styles.imgIcon} alt="" src="/img-1.svg" />
              </div>
            </div>
          </div>
          <div className={styles.fAQList1}>
            <HorizontalBorder howDoesItriLivingWork="How does Itri Living work?" />
            <HorizontalBorder
              howDoesItriLivingWork="What makes Itri Living unique?"
              propWidth="349.9px"
              propDisplay="flex"
            />
            <HorizontalBorder
              howDoesItriLivingWork="How can I take advantage of the exclusive offers and discounts?"
              propWidth="unset"
              propDisplay="unset"
            />
            <HorizontalBorder
              howDoesItriLivingWork="What types of experiences does Itri Living offer?"
              propWidth="410px"
              propDisplay="flex"
            />
            <HorizontalBorder
              howDoesItriLivingWork="Who are the partners of Itri Living?"
              propWidth="322.8px"
              propDisplay="flex"
            />
            <HorizontalBorder
              howDoesItriLivingWork="Where are the Itri Living locations?"
              propWidth="466.9px"
              propDisplay="flex"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
