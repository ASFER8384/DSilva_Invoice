import React from "react";

export default function Footer() {
  return (
    <>
      <div
        style={{
          height: "45vh",
          padding: "50px",
          background: "black",
          display: "flex",
          gap: "50px",
        }}
      >
        <div style={{ border: "0px solid white", width: "40%" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              // marginBottom: "15px",
            }}
          >
            <img
              src="/assets/Logo.png" // make sure your logo is inside public folder
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
            At Golden Tower Auto Paints, we have proudly served the automotive
            industry for over 25 years, delivering premium auto paints,
            refinishing solutions, and unmatched customer service.
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
              //   border: "1px solid white",
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
              height: "90%",
            }}
          >
            <div
              style={{
                width: "fit-content",
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
                  Services
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  Product
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  FAQ
                </span>
              </div>
            </div>
            <div
              style={{
                width: "fit-content",
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
                Service Links
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
                  Painting
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  Refinishing
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  Workshops
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  Innovation
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  Support
                </span>
              </div>
            </div>
            <div
              style={{
                width: "fit-content",
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
                Social Links
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
                  Linkdin
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  Email
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  Whatsapp
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    letterSpacing: ".5px",
                  }}
                >
                  Phone
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
          style={{ color: "white", fontSize: "12px", letterSpacing: "2px" }}
        >
          Copy rights reserved by golden auto mobile
        </span>
        <span
          style={{ color: "white", fontSize: "12px", letterSpacing: "2px" }}
        >
          Terms and condition - Privacy & Policy
        </span>
      </div>
    </>
  );
}
