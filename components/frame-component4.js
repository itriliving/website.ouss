import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { useLanguage } from "./LanguageContext"; 
import englishData from "../public/locales/en/common.json";
import frenchData from "../public/locales/fr/common.json";
import germanData from "../public/locales/de/common.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image';

const FrameComponent4 = ({ className = "" }) => {
  const { language } = useLanguage(); 
  const [data, setData] = useState({
    f1: "", f2: "", f3: "", f4: "", f5: "",
    f6: "", f7: "", f8: "", f9: "", f10: "",
    f11: "", f12: "", f13: "", f14: "", f15: "", f16: ""
  });

  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let selectedData;
    if (language === "English") {
      selectedData = englishData.get_data7;
    } else if (language === "Français") {
      selectedData = frenchData.get_data7;
    } else if (language === "Deutsch") {
      selectedData = germanData.get_data7;
    }

    setData(selectedData);
  }, [language]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  if (!mounted) {
    return null; 
  }

  return (
    <section className={`container ${className}`} ref={componentRef}>
      <div className="row">
        {/* Left Section */}
        <div className="col-lg-6 d-flex flex-column align-items-start">
          <div className={`d-flex flex-column ${inView ? "animate__animated animate__slideInRight" : ""}`}>
            <h1 style={{
              fontFamily: "Inria Serif, serif",
              fontSize: "40px",
              lineHeight: "normal",
              color: "#012E2E"
            }}>
              <span>
                <div style={{ fontWeight: "bold", color: "#333" }}>{data.f1}</div>
                <div style={{ fontStyle: "italic", fontWeight: "700", color: "#555" }}>{data.f2}</div>
              </span>
            </h1>

            <p className="mt-4" style={{
             
              fontFamily: "Inter",
           
            }}>
              <div style={{ marginBottom: "15px", display: "flex" }}>{data.f3}</div>
              <div style={{ marginBottom: "15px" }}>{data.f4}</div>
              <div>{data.f5}</div>
            </p>
          </div>
          {!isMobile && (
          <Image
          className="img-fluid rounded mt-4 shadow"
          loading="lazy"
          alt="Description Image"
          src="/faites-vos-valises-pour-ces-iles-mediterraneennes-1@2x.png"
          style={{ width: '100%', height: '100%' }}
          width={1200} // Replace with actual image width
          height={800} // Replace with actual image height
        />
        )}
        </div>

        {/* Right Section */}
        <div className="col-lg-6 d-flex flex-column align-items-start">
          {/* Conditionally render the second image based on the screen size */}
     
          <Image
        className="img-fluid rounded mb-4 shadow"
        loading="lazy"
        alt="Another Description Image"
        src="/valentinlacostegzu0b-ae2ckunsplash-1@2x.png"
        style={{ width: '100%', height: 'auto' }}
        width={1200} // Replace with actual image width
        height={800} // Replace with actual image height
      />
        
          <div className={`d-flex flex-column ${inView ? "animate__animated animate__slideInLeft" : ""}`}>
            <h1 style={{ fontFamily: "Inria Serif, serif", fontWeight: "bold", fontSize: "2rem" }}>
              <span style={{ color: "#AC8E60" }}>{data.f6}</span> {data.f7} {data.f8}
            </h1>
            <p style={{ fontSize: '20px', fontWeight: 400, lineHeight: '28px' }}>
              {data.f9}
            </p>

            <p style={{
              marginTop: "5px",
              fontFamily: "Inria Serif, Arial, sans-serif", 
              fontWeight: 400, 
              fontStyle: "italic", 
              fontSize: "22px", 
              lineHeight: "28px", 
              color : "#074B4B"
            }}>
              {data.f10}
            </p>
            <div className="mt-4" style={{ color: "#555" }}>
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
  <li style={{ marginBottom: "10px" }}>
    <b style={{
      display: "inline-block", // Add this line
      color: "#012E2E",
      fontFamily: "Inter",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "28px"
    }}>
      {data.f11}
    </b>
    <span style={{
      color: "#012E2E",
      fontFamily: "Inter",
    }}>
      {data.f12}
    </span>
  </li>
  <li style={{ marginBottom: "10px" }}>
    <b style={{
      display: "inline-block", // Add this line
      color: "#012E2E",
      fontFamily: "Inter",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "28px"
    }}>
      {data.f13}
    </b>
    <span style={{
      color: "#012E2E",
      fontFamily: "Inter",
    }}>
      {data.f14}
    </span>
  </li>
  <li>
    <b style={{
      display: "inline-block", // Add this line
      color: "#012E2E",
      fontFamily: "Inter",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "28px"
    }}>
      {data.f15}
    </b>
    <span style={{
      color: "#012E2E",
      fontFamily: "Inter",
    }}>
      {data.f16}
    </span>
  </li>
</ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
