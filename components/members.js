import Card1 from "./card1";
import PropTypes from "prop-types";
import styles from "./members.module.css";

const Members = ({ className = "" }) => {
  return (
    <div className={[styles.members, className].join(" ")}>
      <div className={styles.membersChild} />
      <h1 className={styles.mediumLengthHeroContainer}>
        <p className={styles.whatMakesOur}>What makes our resorts</p>
        <p className={styles.trulyAuthentic}>
          <span className={styles.truly}>{`truly `}</span>
          <i className={styles.authentic}>authentic</i>
        </p>
      </h1>
      <div className={styles.row}>
        <Card1
          placeholderImage="/placeholder-image-8@2x.png"
          strongCommunityAnd="Strong Community and"
          sustainabilityFocus="Sustainability Focus"
        />
        <Card1
          placeholderImage="/placeholder-image-9@2x.png"
          propColor="#012e2e"
          strongCommunityAnd="Eco-Friendly Architecture"
          sustainabilityFocus="Rooted in Local Traditions"
        />
        <div className={styles.card}>
          <img
            className={styles.placeholderImageIcon}
            alt=""
            src="/placeholder-image-10@2x.png"
          />
          <div className={styles.content}>
            <div className={styles.content}>
              <div className={styles.name}>Immersive Cultural Experiences</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Members.propTypes = {
  className: PropTypes.string,
};

export default Members;
