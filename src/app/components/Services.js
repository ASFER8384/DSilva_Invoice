import Image from "next/image";
import React from "react";

export default function Services() {
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

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "black",
        display: "flex",
        // justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        // border: "1px solid white",
      }}
    >
      <div
        style={{
          // border: "1px solid white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: "80px",
          padding: "20px 0px",
          marginBottom: "50px",
        }}
      >
        <span
          style={{
            color: "rgba(213, 162, 53, 1)",
            fontSize: "30px",
            textAlign: "center",
            letterSpacing: "2px",
          }}
        >
          Our Products
        </span>
      </div>
      <div style={{ width: "90%", height: "500px", border: "0px solid white" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {(packages || []).map((content, index) => (
            <div
              key={index}
              style={{
                width: "350px",
                height: "400px",
                border: "1px solid white",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  // border: "1px solid white",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    marginBottom: "20px",
                    position: "relative",
                    // border: "1px solid white",
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
                    marginBottom: "20px",
                    fontSize: "18px",
                  }}
                >
                  {content?.title}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            // border: "1px solid white",
            width: "100%",
            padding: "80px 0px",
            display: "flex",
            justifyContent: "center",
            // marginBottom: "50px",
          }}
        >
          <div
            style={{
              width: "150px",
              height: "40px",
              // marginTop: top,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // borderRadius: "20px",
              backgroundColor: "rgba(213, 162, 53, 0.3)",
              // marginBottom: "50px",
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
