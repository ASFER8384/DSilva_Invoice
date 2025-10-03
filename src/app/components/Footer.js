import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer-main">
        {/* Left Column: Logo + Description */}
        <div className="footer-col logo-col">
          <div style={{ width: "120px", height: "80px", position: "relative" }}>
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
          <br />
          <span className="footer-desc">
            Cherry Pickers Equipment is a platform and your perfect partner to
            trade used access platforms and other construction equipment.
          </span>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <span className="footer-title">Quick Links</span>
          <div className="footer-list">
            {["Home", "About us", "Products", "Spare Parts", "Contact Us"].map(
              (link, i) => (
                <span key={i} className="footer-item">
                  {link}
                </span>
              )
            )}
          </div>
        </div>

        {/* Support Links */}
        <div className="footer-col">
          <span className="footer-title">Support Links</span>
          <div className="footer-list">
            {[
              "test1@gmail.com",
              "test2@gmail.com",
              "+971 5655746478",
              "+971 6574648908",
              "Whatsapp Chat",
            ].map((item, i) => (
              <span key={i} className="footer-item">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Head Office */}
        <div className="footer-col">
          <span className="footer-title">Head Office</span>
          <span className="footer-item">
            Office no 2029, ABN Victor Business center, Burjuman Business Tower,
            Bur Dubai, Dubai, UAE
          </span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <span>All Rights Reserved By Cherry Pickers Equipment</span>
      </div>

      <style jsx>{`
        .footer-main {
          padding: 40px 50px 30px 50px; /* reduced padding */
          background: black;
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .footer-col {
          flex: 1 1 200px;
          min-width: 200px;
        }

        .logo-col {
          flex: 1 1 300px;
          min-width: 250px;
        }

        .footer-title {
          color: rgba(213, 162, 53, 1);
          font-weight: bold;
          font-size: 14px;
          letter-spacing: 0.5px;
          margin-bottom: 8px; /* reduce margin */
          display: block;
        }

        .footer-item {
          color: white;
          font-size: 12px;
          line-height: 1.4; /* reduce line height */
        }

        .footer-list {
          display: flex;
          flex-direction: column;
          gap: 6px; /* reduce gap */
        }

        .footer-desc {
          color: white;
          font-size: 14px;
          letter-spacing: 1px;
          line-height: 1.4; /* reduce line height */
          display: block;
        }

        .footer-bottom {
          display: flex;
          justify-content: center;
          background: black;
          padding: 15px 0; /* reduce padding */
          font-size: 12px;
          color: white;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 768px) {
          .footer-main {
            // flex-direction: column;
            padding: 20px 20px;
            gap: 20px;
          }
          .footer-col,
          .logo-col {
            min-width: 100%;
          }
        }
      `}</style>
    </>
  );
}
