import PropTypes from "prop-types";
import styles from "./content-container.module.css";

const ContentContainer = ({ className = "" }) => {
  return (
    <div className={[styles.contentContainer, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.content1}>
          <div className={styles.row}>
            <div className={styles.card}>
              <img
                className={styles.placeholderImageIcon}
                loading="lazy"
                alt=""
                src="/placeholder-image@2x.png"
              />
              <div className={styles.title}>
                <div className={styles.title}>
                  <div className={styles.name}>Wellness center</div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img
                className={styles.placeholderImageIcon}
                alt=""
                src="/placeholder-image-1@2x.png"
              />
              <div className={styles.title}>
                <div className={styles.title}>
                  <div className={styles.name}>Sailing School (¹) </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img
                className={styles.placeholderImageIcon}
                alt=""
                src="/placeholder-image-2@2x.png"
              />
              <div className={styles.title}>
                <div className={styles.title}>
                  <div className={styles.name}>Water Sports (¹) </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img
                className={styles.placeholderImageIcon}
                alt=""
                src="/placeholder-image-3@2x.png"
              />
              <div className={styles.title}>
                <div className={styles.title}>
                  <div className={styles.name}>Cycling</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.card4}>
            <img
              className={styles.placeholderImageIcon}
              alt=""
              src="/placeholder-image-4@2x.png"
            />
            <div className={styles.title}>
              <div className={styles.title}>
                <div className={styles.name4}>
                  <span
                    className={styles.privateBeachClub}
                  >{`PRIVATE Beach club `}</span>
                  <span>(¹) </span>
                </div>
                <div className={styles.jobTitle}>
                  (¹) : For beachfront resort only
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card5}>
            <img
              className={styles.placeholderImageIcon}
              alt=""
              src="/placeholder-image-5@2x.png"
            />
            <div className={styles.title}>
              <div className={styles.title}>
                <div className={styles.name}>Kids Club</div>
              </div>
            </div>
          </div>
          <div className={styles.card5}>
            <img
              className={styles.placeholderImageIcon}
              alt=""
              src="/placeholder-image-6@2x.png"
            />
            <div className={styles.title}>
              <div className={styles.title}>
                <div className={styles.name}>Yoga and Meditation Area</div>
              </div>
            </div>
          </div>
          <div className={styles.card5}>
            <img
              className={styles.placeholderImageIcon}
              alt=""
              src="/placeholder-image-7@2x.png"
            />
            <div className={styles.title}>
              <div className={styles.title}>
                <div className={styles.name}>Outdoor Cinema</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContentContainer.propTypes = {
  className: PropTypes.string,
};

export default ContentContainer;
