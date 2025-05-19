// src/components/Locker.jsx
import React from "react";

const Locker = () => {
  return (
    <iframe
      src="https://bestreward.eu/iframe/f93c489e-34b2-11f0-afb3-c2a106037d45?allow_translate=1"
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
