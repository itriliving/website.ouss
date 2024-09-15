import PropTypes from "prop-types";
import styles from "./spaces.module.css";

const Spaces = ({ className = "" }) => {
  return (
    <section className={[styles.spaces, className].join(" ")}>
      <div className={styles.wrapper}>
        <div className={styles.exploreItrilivingSpacesParent}>
          <h1
            className={styles.exploreItrilivingSpaces}
          >{`Explore Itri.living Spaces : `}</h1>
          <h1 className={styles.toBeFound}>
            to be found in most of the resorts we bring to the Club
          </h1>
          <h3 className={styles.aPlaceTo}>
            A place to call your own. Perfect for couples, friends, or solo
            travellers.
          </h3>
        </div>
        <div className={styles.amenities}>
          <img
            className={styles.tooltipIcon}
            loading="lazy"
            alt=""
            src="/tooltip@2x.png"
          />
          <img className={styles.tooltipIcon} alt="" src="/tooltip-1@2x.png" />
          <div className={styles.checkbox}>
            <h2 className={styles.authenticPool}>Authentic pool</h2>
          </div>
        </div>
        <div className={styles.features}>
          <div className={styles.tooltip}>
            <h2 className={styles.authenticPool}>Warm living room</h2>
          </div>
          <div className={styles.tooltip1}>
            <h2 className={styles.authenticPool}>Elegant lounge</h2>
          </div>
          <div className={styles.tooltip2}>
            <h2 className={styles.authenticPool}>Cozy bedroom</h2>
          </div>
        </div>
        <div className={styles.booking}>
          <div className={styles.stylesecondarySmallfalse}>
          <div className={styles.bookAStay}>

    Book a Stay
 
</div>
          </div>
        </div>
        <div className={styles.locations}>
          <h1 className={styles.locationsUnderConsideration}>
            Locations under consideration
          </h1>
          <div className={styles.listing}>
            <h1 className={styles.makeItriResidencesContainer}>
              <p
                className={styles.makeItriResidences}
              >{`Make Itri Residences Beach &`}</p>
              <p className={styles.makeItriResidences}>
                Spa your home away from home
              </p>
            </h1>
            <div className={styles.location}>
              <div className={styles.details}>
                <img
                  className={styles.image2Icon}
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
                <div className={styles.actions}>
                  <div className={styles.stylesecondarySmallfalse1}>
                    <div className={styles.bookAStay}>Nador</div>
                    <div className={styles.icon}>
                      <img
                        className={styles.shapeIcon}
                        alt=""
                        src="/vector-9.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.location1}>
                <div className={styles.details1}>
                  <div className={styles.images}>
                    <img
                      className={styles.image3Icon}
                      loading="lazy"
                      alt=""
                      src="/image-3@2x.png"
                    />
                    <div className={styles.actionContainer}>
                      <div className={styles.actions1}>
                        <div className={styles.stylesecondarySmallfalse1}>
                          <div className={styles.bookAStay}>Dakhla</div>
                          <div className={styles.icon}>
                            <img
                              className={styles.shapeIcon}
                              alt=""
                              src="/vector-9.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.images1}>
                    <img
                      className={styles.image4Icon}
                      loading="lazy"
                      alt=""
                      src="/image-4@2x.png"
                    />
                    <div className={styles.actionsWrapper}>
                      <div className={styles.actions2}>
                        <div className={styles.stylesecondarySmallfalse1}>
                          <div className={styles.bookAStay}>Merzouga</div>
                          <div className={styles.icon}>
                            <img
                              className={styles.shapeIcon}
                              alt=""
                              src="/vector-9.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.actionContainer1}>
                  <div className={styles.actions3}>
                    <div className={styles.styleprimarySmallfalseDa}>
                      <div className={styles.bookAStay}>Explore</div>
                    </div>
                    <div className={styles.stylesecondarySmallfalse4}>
                      <div className={styles.bookAStay}>
                      <div className={styles.contactUsFor}>
  <a 
    href="https://calendly.com/admin-itri/itri-living-concept-explained" 
    target="_blank" 
    rel="noopener noreferrer"
    className={styles.noUnderline} // Ensure there's no underline
  >
    Express your interest
  </a>
</div>
                      </div>
                      <div className={styles.icon}>
                        <img
                          className={styles.shapeIcon}
                          alt=""
                          src="/vector-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.image}>
                <img
                  className={styles.image2Icon}
                  alt=""
                  src="/image-5-6@2x.png"
                />
                <div className={styles.actionContainer2}>
                  <div className={styles.actions4}>
                    <div className={styles.stylesecondarySmallfalse5}>
                      <div className={styles.bookAStay}>Sierra Leone</div>
                      <div className={styles.icon}>
                        <img
                          className={styles.shapeIcon}
                          alt=""
                          src="/vector-9.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Spaces.propTypes = {
  className: PropTypes.string,
};

export default Spaces;
