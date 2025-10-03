import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    const spans = el.querySelectorAll("span, div");

    gsap.from(spans, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      stagger: 0.25,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        background: "#F5F5F5",
        minHeight: "80vh",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        // alignItems: isMobile ? "center" : "flex-start", // center on mobile, left on desktop
      }}
    >
      <span
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          // textAlign: isMobile ? "center" : "left",
        }}
      >
        About Company
      </span>

      <br />
      <br />

      <span
        style={{
          fontSize: "clamp(20px, 5vw, 44px)",
          letterSpacing: ".5px",
          // textAlign: isMobile ? "center" : "left",
          lineHeight: "1.4",
          // maxWidth: isMobile ? "800px" : "100%",
        }}
      >
        Our trusted platform and perfect partner for trading used access
        platforms and other construction equipment.
      </span>

      <br />
      <br />

      <span
        style={{
          fontSize: "clamp(12px, 2.5vw, 18px)",
          letterSpacing: ".5px",
          // textAlign: isMobile ? "center" : "left",
          lineHeight: "1.6",
          // maxWidth: isMobile ? "800px" : "100%",
        }}
      >
        In today’s dynamic market, the demand for quality, pre-owned machines
        remain steady. Customers seek reputable sources such as auction houses,
        rental companies, and reliable traders to procure top-notch equipment.
        At Cherry Pickers Equipments, we understand the importance of customer
        trust and strive to provide you with the best possible experience.
      </span>

      <br />
      <br />

      <span
        style={{
          fontSize: "clamp(12px, 2.5vw, 18px)",
          letterSpacing: ".5px",
          // textAlign: isMobile ? "center" : "left",
          lineHeight: "1.6",
          // maxWidth: isMobile ? "800px" : "100%",
        }}
      >
        Our founder, Balakumar, brings over 18 years of expertise in used
        equipment sales and rental services for access platforms, earthmoving
        equipment, cranes, and diesel generators. Throughout his career, he has
        successfully sold more than 1500 machines, building a reputation based
        on reliability and customer satisfaction.
      </span>

      <br />
      <br />

      <div
        style={{
          width: "140px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#D5A235",
          cursor: "pointer",
          borderRadius: "6px",
          marginTop: "20px",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "14px",
            letterSpacing: "1px",
            fontWeight: "bold",
          }}
        >
          Learn More
        </span>
      </div>
    </div>
  );
}
