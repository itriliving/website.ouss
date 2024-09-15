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
import { useState, useEffect } from "react";

const LandingPageItriLiving = () => {
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Set a timer (e.g., 3 seconds = 3000 ms)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 5000); // Change the delay time in milliseconds (3000ms = 3 seconds)

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  if (loading) {
    // Show a loading indicator during the timer
    return <div>Loading...</div>;
  }
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
          <Members />
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.container}>
          <Wrapper />
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
