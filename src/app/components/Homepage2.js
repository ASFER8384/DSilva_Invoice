import Image from "next/image";
import React from "react";
import Button from "./Button";

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
            // border: "1px solid white",
          }}
        >
          <div
            style={{
              width: "50%",
              // border: "1px solid white",
              padding: "0px 40px",
              marginTop: "80px",
            }}
          >
            <span
              style={{
                fontSize: "60px",
                color: "rgba(213, 162, 53, 1)",
                fontWeight: "bold",
                marginBottom: "30px",
                // marginTop: "20px",
                // border: "1px solid white",
                letterSpacing: "1px",
              }}
            >
              Trusted partner for trading used equipments{" "}
            </span>
            <br></br>
            <h4
              style={{
                fontSize: "13px",
                letterSpacing: "2px",
                // marginTop: "80px",
                // border: "1px solid white",
                fontWeight: "100",
              }}
            >
              Cherry Pickers Equipments – trusted for the best service.
            </h4>
            <Button content="Lets Connect" top="20px" />
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
              src="/assets/Banner1.png"
              alt="Banner"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
