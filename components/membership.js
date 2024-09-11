import ReservationType from "./reservation-type";
import PropTypes from "prop-types";
import styles from "./membership.module.css";

const Membership = ({ className = "" }) => {
  return (
    <section className={[styles.membership, className].join(" ")}>
      <div className={styles.membershipContent}>
        <div className={styles.membershipHeading}>
          <h1 className={styles.heading1}>Learn more about Itri Living</h1>
        </div>
        <div className={styles.bookCall}>
          <div className={styles.wantToLearn}>
            Want to learn more? Book a call with Jean and we'll help answer your
            questions.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.eventCardContent}>
            <div className={styles.left}>
              <div className={styles.top}>
                <div className={styles.top}>
                  <div className={styles.infos}>
                    <div className={styles.infos}>
                      <img
                        className={styles.titleBackgroundIcon}
                        loading="lazy"
                        alt=""
                        src="/rectangle-9@2x.png"
                      />
                      <h2 className={styles.title1}>Product Demo</h2>
                    </div>
                  </div>
                  <div className={styles.details}>
                    <div className={styles.time}>
                      <img className={styles.icon} alt="" src="/icon-1.svg" />
                      <b className={styles.label}>30 min</b>
                    </div>
                    <ReservationType />
                  </div>
                </div>
                <div className={styles.description}>
                  This is an example of a meeting you would have with a
                  potential customer to demonstrate your product.
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.cookieSettings}>Cookie settings</div>
                <div className={styles.reportAbuse}>Report abuse</div>
              </div>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.calendarContainerWrapper}>
            <div className={styles.calendarContainer}>
              <b className={styles.title2}>{`Select a Date & Time`}</b>
              <div className={styles.calendarControls}>
                <div className={styles.month}>
                  <img
                    className={styles.previousIcon}
                    alt=""
                    src="/previous.svg"
                  />
                  <div className={styles.currentMonth}>
                    <div className={styles.cookieSettings}>April 2024</div>
                  </div>
                  <img className={styles.nextIcon} alt="" src="/next.svg" />
                </div>
                <div className={styles.calendarGrid}>
                  <div className={styles.calendarDays}>
                    <div className={styles.day}>SUN</div>
                    <div className={styles.day}>MON</div>
                    <div className={styles.day}>TUE</div>
                    <div className={styles.day}>WED</div>
                    <div className={styles.day}>THU</div>
                    <div className={styles.day}>FRI</div>
                    <div className={styles.day}>SAT</div>
                  </div>
                  <div className={styles.calendarButtons}>
                    <div className={styles.dateButtons}>
                      <div className={styles.button}>
                        <div className={styles.emptyButtons}>{` `}</div>
                      </div>
                      <div className={styles.button1}>
                        <div className={styles.cookieSettings}>1</div>
                      </div>
                      <div className={styles.button2}>
                        <div className={styles.cookieSettings}>2</div>
                      </div>
                      <div className={styles.button2}>
                        <div className={styles.cookieSettings}>3</div>
                      </div>
                      <div className={styles.button2}>
                        <div className={styles.cookieSettings}>4</div>
                      </div>
                      <div className={styles.button2}>
                        <div className={styles.cookieSettings}>5</div>
                      </div>
                      <div className={styles.button2}>
                        <div className={styles.cookieSettings}>6</div>
                      </div>
                      <div className={styles.button2}>
                        <div className={styles.cookieSettings}>7</div>
                      </div>
                      <div className={styles.button2}>
                        <div className={styles.cookieSettings}>8</div>
                      </div>
                      <div className={styles.button2}>
                        <div className={styles.cookieSettings}>9</div>
                      </div>
                      <div className={styles.button10}>
                        <div className={styles.cookieSettings}>10</div>
                      </div>
                      <div className={styles.button11}>
                        <div className={styles.cookieSettings}>11</div>
                      </div>
                      <div className={styles.button10}>
                        <div className={styles.cookieSettings}>12</div>
                      </div>
                      <div className={styles.button10}>
                        <div className={styles.cookieSettings}>13</div>
                      </div>
                      <div className={styles.button10}>
                        <div className={styles.cookieSettings}>14</div>
                      </div>
                      <div className={styles.button10}>
                        <div className={styles.cookieSettings}>15</div>
                      </div>
                      <div className={styles.button10}>
                        <div className={styles.cookieSettings}>16</div>
                      </div>
                      <div className={styles.button17}>
                        <div className={styles.cookieSettings}>17</div>
                      </div>
                      <div className={styles.button10}>
                        <div className={styles.cookieSettings}>18</div>
                      </div>
                      <div className={styles.button10}>
                        <div className={styles.cookieSettings}>19</div>
                      </div>
                      <div className={styles.button20}>
                        <div className={styles.cookieSettings}>20</div>
                      </div>
                    </div>
                    <div className={styles.nextMonthButtons}>
                      <div className={styles.previousMonthButtons}>
                        <div className={styles.button10}>
                          <div className={styles.cookieSettings}>21</div>
                        </div>
                        <div className={styles.button22}>
                          <div className={styles.cookieSettings}>22</div>
                          <div className={styles.buttonContainer}>
                            <div className={styles.container1} />
                          </div>
                        </div>
                        <div className={styles.button23}>
                          <b className={styles.cookieSettings}>23</b>
                        </div>
                        <div className={styles.button20}>
                          <div className={styles.cookieSettings}>28</div>
                        </div>
                        <div className={styles.button23}>
                          <b className={styles.cookieSettings}>29</b>
                        </div>
                        <div className={styles.button23}>
                          <b className={styles.cookieSettings}>30</b>
                        </div>
                      </div>
                      <div className={styles.button27}>
                        <b className={styles.cookieSettings}>24</b>
                      </div>
                      <div className={styles.button27}>
                        <b className={styles.cookieSettings}>25</b>
                      </div>
                      <div className={styles.button27}>
                        <b className={styles.cookieSettings}>26</b>
                      </div>
                      <div className={styles.button30}>
                        <div className={styles.cookieSettings}>27</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.timeZone}>
                  <b className={styles.title3}>Time zone</b>
                  <div className={styles.select}>
                    <div className={styles.iconLabel}>
                      <img className={styles.icon1} alt="" src="/icon-3.svg" />
                      <div className={styles.cookieSettings}>
                        Central European Time (8:11pm)
                      </div>
                    </div>
                    <img className={styles.icon2} alt="" src="/icon-4.svg" />
                  </div>
                </div>
              </div>
              <div className={styles.button31}>
                <div className={styles.cookieSettings}>Troubleshooting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Membership.propTypes = {
  className: PropTypes.string,
};

export default Membership;
