import React, { useEffect } from "react";
import ZoomStarted from "./components/Zoom/ZoomStarted";

function OrganigramMain({ setEraser }) {
  useEffect(() => {
    setEraser("hide");
  });
  return (
    <div>
      <ZoomStarted />
    </div>
  );
}

export default OrganigramMain;
