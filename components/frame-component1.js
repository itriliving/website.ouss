import CommunityImages from "./community-images";
import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.communityContentWrapper, className].join(" ")}>
      <div className={styles.communityContent}>
        <CommunityImages image5="/image-5-2@2x.png" community="Community" />
        <CommunityImages
          image5="/image-5-3@2x.png"
          propFlex="unset"
          propWidth="114px"
          community="Sport"
          propWidth1="42px"
        />
        <CommunityImages
          image5="/image-5-4@2x.png"
          propFlex="unset"
          propWidth="139px"
          community="Wellness"
          propWidth1="67px"
        />
        <CommunityImages
          image5="/image-5-5@2x.png"
          propFlex="unset"
          propWidth="133px"
          community="Ecology"
          propWidth1="61px"
        />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
