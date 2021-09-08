import { Button } from "antd";
import React, { useEffect } from "react";
import ModalEraser from "../../components/Modals/ModalEraser/ModalEraser";
import ZoomStarted from "./components/Zoom/ZoomStarted";

function OrganigramMain({ setEraser, setSave, save }) {
  useEffect(() => {
    setEraser("hide");
  }, []);

  return (
    <div>
      <ZoomStarted setEraser={setEraser} />
      <ModalEraser setSave={setSave} save={save} />
    </div>
  );
}

export default OrganigramMain;
