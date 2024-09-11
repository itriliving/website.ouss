import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./horizontal-border.module.css";

const HorizontalBorder = ({
  className = "",
  howDoesItriLivingWork,
  propWidth,
  propDisplay,
}) => {
  const howDoesItriStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div className={[styles.horizontalborder, className].join(" ")}>
      <div className={styles.howDoesItri} style={howDoesItriStyle}>
        {howDoesItriLivingWork}
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.imgIcon} alt="" src="/img-1.svg" />
      </div>
    </div>
  );
};

HorizontalBorder.propTypes = {
  className: PropTypes.string,
  howDoesItriLivingWork: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default HorizontalBorder;
