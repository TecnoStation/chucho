import { Button } from "antd";
import React, { useEffect } from "react";
import ZoomStarted from "./components/Zoom/ZoomStarted";

function OrganigramMain({ setEraser }) {
  useEffect(() => {
    setEraser("hide");
  }, []);

  return (
    <div>
      <ZoomStarted setEraser={setEraser} />
    </div>
  );
}

export default OrganigramMain;
