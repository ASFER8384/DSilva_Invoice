import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function Homepage2() {
  return (
    <div className="homepage2-wrapper" style={{ background: "black" }}>
      <div className="homepage2-content">
        {/* Left Content */}
        <div className="homepage2-text">
          <span className="homepage2-title">
            Trusted partner for trading used equipments
          </span>

          <h4 className="homepage2-subtitle">
            Cherry Pickers Equipments – trusted for the best service.
          </h4>

          <div className="button-wrapper">
            <Button content="Let's Connect" top="20px" />
          </div>
        </div>

        {/* Right Image */}
        <div className="homepage2-image">
          <Image
            src="/assets/Banner1.png"
            alt="Banner"
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "contain" }}
            fill
          />
        </div>
      </div>

      <style jsx>{`
        .homepage2-wrapper {
          color: white;
          width: 100%;
          padding: 20px;
          box-sizing: border-box;
        }

        .homepage2-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .homepage2-text {
          flex: 1 1 500px;
          max-width: 700px;
          padding: 20px;
          margin-top: 40px;
          text-align: left;
        }

        .homepage2-title {
          font-size: clamp(32px, 5vw, 60px);
          color: rgba(213, 162, 53, 1);
          font-weight: bold;
          line-height: 1.2;
          letter-spacing: 1px;
          display: block;
          margin-bottom: 20px;
        }

        .homepage2-subtitle {
          font-size: clamp(12px, 2vw, 16px);
          letter-spacing: 2px;
          font-weight: 300;
          margin-bottom: 20px;
          color: #ddd;
        }

        .button-wrapper {
          margin-top: 20px;
        }

        .homepage2-image {
          flex: 1 1 600px; /* bigger default for desktop */
          max-width: 1200px;
          position: relative;
          height: clamp(400px, 70vh, 800px); /* bigger image height */
          margin-top: 20px;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .homepage2-text {
            text-align: center;
            margin-top: 20px;
            padding: 10px;
          }

          .button-wrapper {
            display: flex;
            justify-content: center;
          }

          .homepage2-image {
            height: 30vh; /* hide image completely on mobile */
            // display: none;
          }

          .homepage2-wrapper {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
}
