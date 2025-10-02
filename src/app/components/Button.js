import React from "react";

export default function Button({ content, top }) {
  return (
    <div
      style={{
        width: "120px",
        height: "40px",
        marginTop: top,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        backgroundColor: "rgba(213, 162, 53, 0.3)",
      }}
    >
      <span style={{ color: "white", fontSize: "12px", letterSpacing: "1px" }}>
        {content}
      </span>
    </div>
  );
}
