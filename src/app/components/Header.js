import React from "react";
import Button from "./Button";
import Image from "next/image";

export default function Header() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 40px",
      }}
    >
      {/* Logo */}
      <div style={{ width: "50px", height: "50px", position: "relative" }}>
        <Image
          src="/assets/Logo.png" // put logo.png inside /public/assets/
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Navigation */}
      <div style={{ color: "white" }}>
        <div style={{ display: "flex", gap: "40px", textDecoration: "none" }}>
          <span>Home</span>
          <span>About</span>
          <span>Inventory</span>
          <span>Service</span>
          <span>FAQ</span>
        </div>
      </div>

      {/* Button */}
      <Button content="Contact Now" top="0px" />
    </div>
  );
}
