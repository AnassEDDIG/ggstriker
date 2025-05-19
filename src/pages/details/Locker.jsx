// src/components/Locker.jsx
import React from "react";

const Locker = () => {
  return (
    <iframe
      src="https://bestlocker.eu/iframe/74c753ea-34cd-11f0-8372-c2a106037d45?allow_translate=1"
      sandbox="allow-top-navigation allow-scripts allow-same-origin allow-popups allow-forms"
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "100vw",
        minHeight: "100%",
        border: "none",
        margin: 0,
        padding: 0,
        zIndex: 9999999,
        overflow: "hidden",
      }}
      title="Content Locker"
    />
  );
};

export default Locker;
