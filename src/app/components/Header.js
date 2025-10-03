import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
  const navItems = ["Home", "About", "Products", "Spare Parts", "Contact Us"];

  return (
    <header
      // style={{
      //   height: "80px",
      //   display: "flex",
      //   justifyContent: "space-between",
      //   alignItems: "center",
      //   padding: "0 20px",
      //   backgroundColor: "black",
      //   position: "relative",
      // }}
      className="header-wrapper"
    >
      {/* Logo */}
      <div
        className="logo-wrapper"
        // style={{ width: "120px", height: "60px", position: "relative" }}
      >
        <Image
          src="/assets/Logo.png"
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Desktop Menu */}
      <nav className="desktop-menu">
        {navItems.map((item, i) => (
          <span
            key={i}
            style={{
              cursor: "pointer",
              color: "white",
              fontSize: "14px",
              marginLeft: i === 0 ? 0 : "30px",
            }}
          >
            {item}
          </span>
        ))}
      </nav>

      {/* Hamburger for mobile (just visual) */}
      <div className="mobile-menu-icon">
        <div
          style={{
            height: "3px",
            width: "25px",
            background: "white",
            marginBottom: "5px",
          }}
        />
        <div
          style={{
            height: "3px",
            width: "25px",
            background: "white",
            marginBottom: "5px",
          }}
        />
        <div style={{ height: "3px", width: "25px", background: "white" }} />
      </div>

      {/* Media Queries */}
      <style jsx>{`
        .desktop-menu {
          display: flex;
        }
        .mobile-menu-icon {
          display: none;
          flex-direction: column;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none; /* ✅ hides nav links on mobile */
          }
          .mobile-menu-icon {
            display: flex; /* ✅ shows hamburger on mobile */
          }
        }

        .header-wrapper {
          height: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          background-color: black;
          position: relative;
        }

        @media (max-width: 768px) {
          .header-wrapper {
            height: 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 20px; /* desktop padding */
            background-color: black;
            position: relative;
          }
        }
        .logo-wrapper {
          position: relative;
          width: 120px;
          height: 60px;
        }

        @media (max-width: 768px) {
          .logo-wrapper {
            width: 100px; /* smaller width on mobile */
            height: 60px; /* smaller height on mobile */
          }
        }
      `}</style>
    </header>
  );
}
