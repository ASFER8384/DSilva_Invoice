import Image from "next/image";
import React from "react";

export default function Services() {
  const packages = [
    {
      id: 1,
      title: "Basic",
      description:
        "Simple plan designed to cover essential needs for six months.",
      image: "/assets/Basic.png",
    },
    {
      id: 2,
      title: "Platinum",
      description: "Premium package crafted to provide a full value & support.",
      image: "/assets/Platinum.png",
    },
    {
      id: 3,
      title: "Standard",
      description:
        "Balanced option created to offer reliable cover at fair cost.",
      image: "/assets/Standard.png",
    },
  ];

  return (
    <div
      style={{
        minHeight: "70vh",
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
          height: "80px",
          padding: "50px 0px",
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
          Extend and upgrade your cover for less than <br></br>Đ 1 per day!
        </span>
      </div>
      <div style={{ width: "70%", height: "300px", border: "0px solid white" }}>
        {/* <div
          style={{ border: "1px solid white", width: "250px", height: "250px" }}
        >
          One
        </div> */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {(packages || []).map((content, index) => (
            <div
              key={index}
              style={{
                width: "250px",
                height: "250px",
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
                  // border: "1px solid? white",
                  width: "85%",
                  height: "70%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    marginBottom: "20px",
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
                    color: "white",
                    marginBottom: "20px",
                    fontSize: "18px",
                  }}
                >
                  {content?.title}
                </span>
                <span
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "18px",
                  }}
                >
                  {content?.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
