import React, { useEffect } from "react";
import TreeEraser from "./components/TreeEraser/TreeEraser";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ZoomEraser from "./components/Zoom/ZoomEraser";
import ModalEraser from "../../components/Modals/ModalEraser/ModalEraser";

export default function Eraser({ setEraser, setSave, save }) {
  const [t, i18n] = useTranslation("global");
  useEffect(() => {
    setEraser("show");
  });

  return (
    <>
      <br />
      <ZoomEraser />
      <ModalEraser setSave={setSave} save={save} />
    </>
  );
}
