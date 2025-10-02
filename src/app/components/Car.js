import Image from "next/image";
import React from "react";

export default function Car() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "black",
        paddingBottom: "40px",
        // border: "1px solid white",
      }}
    >
      {/* Heading */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80px",
          padding: "50px 0px",
          flexDirection: "column",
          paddingBottom: "20px",
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
          Ultimate Lifetime Protection Plan at Đ 10,000
        </span>
        <span
          style={{
            color: "white",
            fontSize: "18px",
            textAlign: "center",
            letterSpacing: "2px",
            // paddingBottom: "20px",
          }}
        >
          Hurry Up this is up to next 30 days only !{" "}
        </span>
      </div>

      {/* Image Section */}
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "600px",
        }}
      >
        <div
          style={{
            width: "90%",
            height: "100%",
            position: "relative", // needed for next/image fill
          }}
        >
          <Image
            src="/assets/Car.png" // put your image inside public/assets/car.png
            alt="Car"
            fill
            style={{ objectFit: "contain", borderRadius: "10px" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
