import PropTypes from "prop-types";
import styles from "./frame-component3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.blogWrapper, className].join(" ")}>
      <div className={styles.blog}>
        <h1 className={styles.heading2}>From our blog</h1>
        <div className={styles.blogPostContainer}>
          <div className={styles.blogPostList}>
            <div className={styles.postList}>
              <div className={styles.postItem}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image-1@2x.png"
                />
                <img
                  className={styles.gradientIcon}
                  loading="lazy"
                  alt=""
                  src="/gradient@2x.png"
                />
              </div>
              <div className={styles.border}>
                <a className={styles.news}>News</a>
              </div>
            </div>
            <div className={styles.postList1}>
              <img
                className={styles.gradientIcon1}
                alt=""
                src="/gradient1@2x.png"
              />
              <div className={styles.border1}>
                <div className={styles.location}>Location</div>
              </div>
            </div>
            <div className={styles.postList2}>
              <img
                className={styles.gradientIcon2}
                alt=""
                src="/gradient2@2x.png"
              />
              <div className={styles.border2}>
                <div className={styles.location}>Community</div>
              </div>
            </div>
            <div className={styles.postList3}>
              <img
                className={styles.gradientIcon1}
                alt=""
                src="/gradient3@2x.png"
              />
              <div className={styles.border3}>
                <a className={styles.news}>News</a>
              </div>
            </div>
          </div>
          <div className={styles.postPreview}>
            <div className={styles.previewContent}>
              <div className={styles.feb282024}>Feb 28, 2024</div>
              <div className={styles.embracingAuthenticityWith}>
                Embracing Authenticity with Itri Residences
              </div>
              <div className={styles.discoverTheTrue}>
                Discover the true essence of authenticity at Itri Residences,
                where every stay feels like a genuine cultural immersion...…
              </div>
            </div>
            <div className={styles.travelGuide}>
              <div className={styles.monthContainer}>
                <div className={styles.may242024}>May 24, 2024</div>
              </div>
              <div
                className={styles.yourAuthenticTravel}
              >{`Your Authentic Travel Guide: Beach & Spa Edition`}</div>
              <div className={styles.guideDescription}>
                <div className={styles.exploreOurGuide}>
                  Explore our guide to experiencing the best beach and spa
                  retreats with a touch of authenticity at Itri Residences
                </div>
              </div>
            </div>
            <div className={styles.previewContent1}>
              <div className={styles.aug212024}>Aug 21, 2024</div>
              <div className={styles.embracingAuthenticityWith}>
                Itri’s Eco-Friendly Practices
              </div>
              <div className={styles.learnHowItriContainer}>
                <p className={styles.learnHowItri}>
                  Learn how Itri Residences is committed to sustainable living
                  and authentic, eco-friendly
                </p>
                <p className={styles.learnHowItri}> travel experiences…</p>
              </div>
            </div>
            <div className={styles.communityPost}>
              <div className={styles.sep272024}>Sep 27, 2024</div>
              <div className={styles.embracingAuthenticityWith}>
                Itri Residences Partners with Local Communities
              </div>
              <div className={styles.discoverOurCollaboration}>
                Discover our collaboration with local communities to offer
                authentic cultural experiences to our guests
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
