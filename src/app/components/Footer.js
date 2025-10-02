import React from "react";

export default function Footer() {
  return (
    <>
      <div
        style={{
          height: "45vh",
          padding: "100px 50px 50px 50px",
          background: "black",
          display: "flex",
          gap: "50px",
          // marginTop: "50px",
        }}
      >
        <div style={{ border: "0px solid white", width: "40%" }}>
          <div
            style={{
              width: "120px",
              height: "80px",
              // marginBottom: "15px",
            }}
          >
            <img
              src="/assets/Logo.png"
              alt="Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <br></br>
          <span
            style={{
              color: "white",
              fontSize: "16px",
              //   border: "1px solid white",
              letterSpacing: "1px",
            }}
          >
            Cherry Pickers Equipment is a platform and your perfect partner to
            trade used access platforms and other construction equipment.
          </span>
        </div>
        <div
          style={{
            //   border: "1px solid white",
            width: "70%",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <div
            style={{
              // border: "1px solid white",
              width: "90%",
              display: "flex",
              justifyContent: "space-between",
              height: "90%",
            }}
          >
            <div
              style={{
                width: "40%",
                border: "0px solid white",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <span
                style={{
                  color: "rgba(213, 162, 53, 1)",
                  height: "20%",
                  fontWeight: "bold",
                  fontSize: "14px",
                  letterSpacing: ".5px",
                }}
              >
                Quick Links
              </span>
              <div
                style={{
                  height: "80%",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  Home
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  About us
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  Products
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  Spare Parts
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  Contact Us
                </span>
              </div>
            </div>
            <div
              style={{
                width: "40%",
                border: "0px solid white",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <span
                style={{
                  color: "rgba(213, 162, 53, 1)",
                  height: "20%",
                  fontWeight: "bold",
                  fontSize: "14px",
                  letterSpacing: ".5px",
                }}
              >
                Supports Links
              </span>
              <div
                style={{
                  height: "80%",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  test1@gmail.com
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  test2@gmail.com
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  +971 5655746478
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  +971 6574648908
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  Whatsapp Chat
                </span>
              </div>
            </div>
            <div
              style={{
                width: "40%",
                border: "0px solid white",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <span
                style={{
                  color: "rgba(213, 162, 53, 1)",
                  height: "20%",
                  fontWeight: "bold",
                  fontSize: "14px",
                  letterSpacing: ".5px",
                }}
              >
                Head Office Links
              </span>
              <div
                style={{
                  height: "50%",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  Office no 2029., ABN Victor Business center Burjuman Business
                  Tower, Bur Dubai, Dubai, UAE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          background: "black",
          padding: "40px",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{ color: "white", fontSize: "12px", letterSpacing: "0px" }}
        >
          All Rights Reserved By Cherry Pickers Equipment
        </span>
        <span
          style={{ color: "white", fontSize: "12px", letterSpacing: "0px" }}
        >
          Terms and condition - Privacy & Policy
        </span>
      </div>
    </>
  );
}
