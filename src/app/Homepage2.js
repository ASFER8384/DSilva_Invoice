import Image from "next/image";
import React from "react";
import Button from "./components/Button";

export default function Homepage2() {
  return (
    <>
      <div
        style={{
          //   border: "1px solid white",
          height: "90%",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "90%",
            overflow: "hidden",
          }}
        >
          {/* Box 1 */}
          <div
            style={{
              width: "40%",
              //   border: "1px solid white",
              padding: "0px 40px",
              marginTop: "40px",
            }}
          >
            <span
              style={{
                fontSize: "50px",
                color: "rgba(213, 162, 53, 1)",
                fontWeight: "bold",
                // marginBottom: "40px",
                marginTop:"20px"
              }}
            >
              Your Trusted Auto Paint Partner for 25+ Years
            </span>
            <br></br>
            <span
              style={{
                fontSize: "13px",
                letterSpacing: "2px",
                marginTop: "40px",
              }}
            >
              We started with a vision to provide quality paint solutions and
              have grown into a trusted name in the automotive industry.
            </span>
            <Button content="Book Now" top="20px" />
          </div>

          {/* Box 2 with full cover image */}
          <div
            style={{
              width: "60%",
              //   border: "1px solid white",
              position: "relative",
              height: "100%",
            }}
          >
            <Image
              src="/assets/Banner.png"
              alt="Banner"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
