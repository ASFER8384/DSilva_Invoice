import React from "react";
import Button from "./Button";
import Image from "next/image";

export default function Header() {
  return (
    <div
      style={{
        height: "120px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 40px",
      }}
    >
      <div style={{ width: "150px", height: "80px", position: "relative" }}>
        <Image
          src="/assets/Logo.png"
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <div style={{ color: "white" }}>
        <div style={{ display: "flex", gap: "40px", textDecoration: "none" }}>
          <span>Home</span>
          <span>About</span>
          <span>Products</span>
          <span>Spare Parts</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
}
