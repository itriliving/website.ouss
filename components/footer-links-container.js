import PropTypes from "prop-types";
import styles from "./footer-links-container.module.css";

const FooterLinksContainer = ({ className = "" }) => {
  return (
    <div className={[styles.footerLinksContainer, className].join(" ")}>
      <div className={styles.horizontalborder}>
        <div className={styles.productLinks}>
          <a className={styles.heading5}>Product</a>
          <a className={styles.linkLocations}>Locations</a>
          <a className={styles.linkSpaces}>Spaces</a>
          <a className={styles.linkCommunity}>Community</a>
          <a className={styles.linkBenefits}>Benefits</a>
          <div className={styles.linkMember}>Member Deals</div>
          <a className={styles.linkMobile}>Mobile App</a>
          <div className={styles.linkEarn}>Earn $50 per Referral</div>
        </div>
        <div className={styles.companyLinks}>
          <div className={styles.companyLinkItems}>
            <a className={styles.heading51}>Company</a>
            <a className={styles.linkAbout}>About Us</a>
            <div className={styles.linkValues}>Values</div>
            <a className={styles.linkPress}>Press</a>
            <div className={styles.linkSustainability}>Sustainability</div>
            <div className={styles.linkEarn}>Real Estate Partners</div>
            <a className={styles.linkBlog}>Blog</a>
            <div className={styles.linkCode}>Code of Conduct</div>
            <a className={styles.linkPrivacy}>Privacy Policy</a>
            <a className={styles.linkTerms}>{`Terms & Conditions`}</a>
          </div>
          <div className={styles.supportLinks}>
            <a className={styles.heading52}>Support</a>
            <div className={styles.linkContact}>Contact Us</div>
            <div className={styles.linkUltimate}>ITRI Guides</div>
            <a className={styles.linkFaq}>{`FAQ `}</a>
          </div>
        </div>
        <div className={styles.socialContainer}>
          <div className={styles.heading53}>Social</div>
          <div className={styles.socialLinks}>
            <img
              className={styles.linkFacebookIcone22a9a0b}
              alt=""
              src="/link--facebookicone22a9a0bsvg@2x.png"
            />
            <img
              className={styles.linkTwitterIcon2594da59s}
              alt=""
              src="/link--twittericon2594da59svg.svg"
            />
            <img
              className={styles.linkFacebookIcone22a9a0b}
              alt=""
              src="/link--instagramiconb8d11734svg@2x.png"
            />
            <img
              className={styles.linkFacebookIcone22a9a0b}
              alt=""
              src="/link--linkediniconc7955ce3svg@2x.png"
            />
            <img
              className={styles.linkTwitterIcon2594da59s}
              alt=""
              src="/link--youtubeicon932fdd3csvg.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FooterLinksContainer.propTypes = {
  className: PropTypes.string,
};

export default FooterLinksContainer;
