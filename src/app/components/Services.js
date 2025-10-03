import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);

  const packages = [
    {
      id: 1,
      title: "660SJ 2011 DENMARK",
      image: "/assets/Product1.png",
    },
    {
      id: 2,
      title: "660SJ 2011 DENMARK",
      image: "/assets/Product2.png",
    },
    {
      id: 3,
      title: "660SJ 2011 DENMARK",
      image: "/assets/Product3.png",
    },
  ];

  useEffect(() => {
    const el = containerRef.current;
    const cards = el.querySelectorAll(".product-card");

    gsap.from(cards, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      stagger: 0.3,
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
        minHeight: "100vh",
        background: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Section Heading */}
      <div
        style={{
          textAlign: "center",
          padding: "20px 0px",
          marginBottom: "30px",
        }}
      >
        <span
          style={{
            color: "rgba(213, 162, 53, 1)",
            fontSize: "26px",
            letterSpacing: "2px",
          }}
        >
          Our Products
        </span>
      </div>

      {/* Product Cards */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {(packages || []).map((content, index) => (
            <div
              key={index}
              className="product-card"
              style={{
                flex: "1 1 300px", // grow/shrink with min width 300px
                maxWidth: "350px",
                height: "380px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "70%",
                    marginBottom: "15px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={content.image}
                    alt={content.title}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span
                  style={{
                    color: "rgba(213, 162, 53, 1)",
                    marginBottom: "10px",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  {content?.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* More Products Button */}
        <div
          style={{
            width: "100%",
            padding: "50px 0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "150px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(213, 162, 53, 0.3)",
              cursor: "pointer",
              borderRadius: "8px",
            }}
          >
            <span
              style={{ color: "white", fontSize: "12px", letterSpacing: "1px" }}
            >
              More Products
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
