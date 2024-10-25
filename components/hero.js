import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import styles from "./hero.module.css";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "./LanguageContext";

import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';

const Hero = ({ className = "" }) => {
    const { language } = useLanguage();
    const [data, setData] = useState({
        a1: "",
        a2: "",
        a3: "",
        a4: "",
        a5: "",
        a6: "",
        button: ""
    });

    useEffect(() => {
        console.log("language changed in component hero.js", language);

        let selectedData;
        if (language === 'English') {
            selectedData = englishData.get_data0;
        } else if (language === 'Français') {
            selectedData = frenchData.get_data0;
        } else if (language === 'Deutsch') {
            selectedData = germanData.get_data0;
        }

        setData(selectedData);
    }, [language]);

    const handleScrollDown = () => {
        window.scrollTo({
            top: 500,
            behavior: "smooth",
        });
    };

    return (
        <section className={[styles.hero, className].join(" ")}>
            <header className={styles.heroContainerParent}>
                <div className={styles.heroContainer}>
                    <a href={"/"}>
                        <Image
                            className={styles.captureDEcran20240625AIcon}
                            alt="Hero"
                            src="/capture-d-ecran-20240625-a-132902removebgpreview-1@2x.png"
                            width={500}
                            height={300}
                        />
                    </a>
                    <div className={styles.heroContent}>
                        <div className={styles.heroTitle}>
                            <div className={styles.vectorWrapper}>
                                <LanguageSelector />
                            </div>
                            <div className={styles.vectorWrapper}>
                                <Image
                                    className={styles.vectorIcon1}
                                    alt="Vector Icon"
                                    src="/vector-1.svg"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <div className={styles.heroButton}>
                                <a
                                    href="https://calendly.com/admin-itri/itri-living-concept-explained"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.buttonContainer}
                                    style={{ textDecoration: "none" }}
                                >
                                    <b className={styles.requestACallContainer}>
                                        <span
                                            className={styles.aCall}
                                            style={{ fontSize: "10px" }}
                                        >
                                            {data.a6}
                                        </span>
                                    </b>
                                </a>
                            </div>

                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="link"
                                    id="dropdown-basic"
                                    className={styles.dropdownToggle}
                                    style={{ minWidth: '200px' }}
                                >
                                    <img
                                        className={styles.backgroundborderIcon}
                                        alt="Background Border Icon"
                                        src="/backgroundborder.svg"
                                    />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/SignIn">{data.signIn}</Dropdown.Item>
                                    <Dropdown.Item href="/SignIn">{data.createAccount}</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div />
            </header>
            <div className={styles.uniquely}>
                <div className={styles.experienceUniquelyParent}>
                    {/* Déplacer le bouton au-dessus du texte */}
                  
                    
                    <h1 className={styles.experienceUniquely}>
                        <span>
                            <p className={styles.travelUniquely}>
                                <span className={styles.travel}>{data.a1}</span>
                                <i>{data.a2}</i>
                            </p>
                            <p className={styles.travelUniquely}>
                                <span className={styles.travel}>{data.a3}</span>
                                <i>{data.a4}</i>
                            </p>
                        </span>
                    </h1>
                    <div className={styles.expressInterestWrapper}>
    <button
        className={styles.expressInterestButton}
        style={{
            background: "#AC8E60",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "109px",
            cursor: "pointer",
            fontSize: "16px",
            margin: "0",
        }}
        onClick={() => window.open("https://8xw0ins2dnr.typeform.com/to/Ja7LbQzC", "_blank")}
    >
        {data.button}
    </button>
</div>
                    <div className={styles.frameWrapper}>
                        <div className={styles.discoverItriLivingParent}>
                            <div
                                className={styles.discoverItriLiving}
                                onClick={handleScrollDown}
                                style={{
                                    cursor: "pointer",
                                    textAlign: "center",
                                }}
                            >
                                {data.a5}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = {
    className: PropTypes.string,
};

export default Hero;
