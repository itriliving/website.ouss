import Hero from "../components/hero";
import Concept from "../components/concept";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import Exceptional from "../components/exceptional";
import ContentContainer from "../components/content-container";
import Members from "../components/members";
import Wrapper from "../components/wrapper";
import Layout from "../components/layout";
import Stays from "../components/stays";
import Consultation from "../components/consultation";
import Spaces from "../components/spaces";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent5 from "../components/frame-component5";
import Newsletter1 from "../components/newsletter1";
import Membership from "../components/membership";
import FooterLinksContainer from "../components/footer-links-container";
import Newsletter from "../components/newsletter";
import styles from "./index.module.css";
import React, { useState, useEffect, useRef } from "react";

const LandingPageItriLiving = () => {
  const [isNewsletterVisible, setIsNewsletterVisible] = useState(false);
  const [isMembersVisible, setIsMembersVisible] = useState(false); // State for Members visibility
  const newsletterRef = useRef(null);
  const membersRef = useRef(null); 

  useEffect(() => {
    const newsletterObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsNewsletterVisible(true);
          newsletterObserver.disconnect(); // Stop observing after the animation is triggered
        }
      },
      { threshold: 0.05 } // Trigger when 5% of the element is visible
    );

    const membersObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsMembersVisible(true);
          membersObserver.disconnect(); // Stop observing after the animation is triggered
        }
      },
      { threshold: 0.05 } // Trigger when 5% of the element is visible
    );

    if (newsletterRef.current) {
      newsletterObserver.observe(newsletterRef.current);
    }

    if (membersRef.current) {
      membersObserver.observe(membersRef.current);
    }

    return () => {
      newsletterObserver.disconnect();
      membersObserver.disconnect();
    };
  }, []);
  return (
    <div className={styles.landingPageItriLiving}>
      <Hero />
      <section className={styles.amalfi}>
        <img
          className={styles.amalfi201204112801Icon}
          loading="lazy"
          alt=""
          src="/amalfi2012041-1280-1@2x.png"
        />
      </section>
      <Concept />
      <section className={styles.whyMember}>
        <FrameComponent />
        <FrameComponent1 />
      </section>

      <Exceptional />
      <section className={styles.landingPageItriLivingInner}>
        <div className={styles.contentContainerParent}>
    
          <ContentContainer />
         
          <div
            ref={membersRef}
            className={`${styles.membersWrapper} ${
              isMembersVisible ? styles.slideInFromBottom : styles.hidden
            }`}
          >
            <Members />
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.container}>
        <div
        ref={newsletterRef}
        className={`${styles.newsletterWrapper} ${
          isNewsletterVisible ? styles.slideInFromBottom : styles.hidden
        }`}
      >
          <Wrapper />
          </div>
          <Layout />
        </div>
      </section>
      <Stays />
      
      <Consultation />
      <Spaces />
      <FrameComponent2 />
      <FrameComponent3 />
      <FrameComponent4 />
      <FrameComponent5 />
    
        <Newsletter1 />
      
      <Membership />
      <footer className={styles.card}>
        <div className={styles.spacesImage}>
          <img
            className={styles.captureDEcran20240628AIcon}
            loading="lazy"
            alt=""
            src="/capture-d-ecran-20240628-a-193249removebgpreview-1@2x.png"
          />
        </div>
        <div className={styles.spacesDescription}>
          <div className={styles.discoverDynamicSpaces}>
            {" "}
            Discover dynamic spaces, engaging events, and an interactive online
            Member Hub.
          </div>
        </div>
        <FooterLinksContainer />
        <Newsletter />
        <div className={styles.horizontalborder}>
          <div className={styles.itriLivingAll}>
            © 2024 Itri Living. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageItriLiving;
