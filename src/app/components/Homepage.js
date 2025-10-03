import React from "react";
import Image from "next/image";

export default function Homepage() {
  return (
    <div className="homepage-container">
      {/* Desktop Banner */}
      <div className="desktop-banner">
        <Image
          src="/assets/Cover3.png"
          alt="Desktop Banner"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Mobile Banner */}
      <div className="mobile-banner">
        <Image
          src="/assets/CoverMobile2.png"
          alt="Mobile Banner"
          fill
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      <style jsx>{`
        .homepage-container {
          position: relative;
          width: 100%;
          height: 100vh; /* default desktop height */
          overflow: hidden;
          background: black;
        }

        .desktop-banner {
          display: block;
        }
        .mobile-banner {
          display: none;
        }

        @media (max-width: 768px) {
          .homepage-container {
            height: 70vh; /* mobile height */
          }
          .desktop-banner {
            display: none;
          }
          .mobile-banner {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
