import Image from "next/image";
import React from "react";

export default function Details() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "80vh",
        padding: "40px",
        background: "black",
        color: "white",
      }}
    >
      {/* Left Side - Image */}
      <div style={{ width: "50%", position: "relative", height: "400px" }}>
        <Image
          src="/assets/Details.png" // put your image in public/assets/
          alt="Car"
          fill
          style={{ objectFit: "cover", borderRadius: "12px" }}
        />
      </div>

      {/* Right Side - Content */}
      <div
        style={{
          width: "45%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            margin: 0,
            color: "rgba(213, 162, 53, 1)",
          }}
        >
          Future of the Auto Paint Industry with Human + AI
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          The automotive world is evolving at lightning speed, where human
          expertise meets artificial intelligence to redefine driving, safety,
          and vehicle management. Smart technologies are enhancing efficiency,
          personalization, and sustainability, making cars more intuitive and
          roads safer. 
        </p>
        <button
          style={{
            padding: "12px 24px",
            background: "rgba(213, 162, 53, 0.3)",
            border: "none",
            borderRadius: "20px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            width: "fit-content",
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
