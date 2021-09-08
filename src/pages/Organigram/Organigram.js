import React, { useEffect, useState } from "react";
import Zoom from "./components/Zoom/Zoom";
import { useTranslation } from "react-i18next";
import ModalMoveArea from "../../components/Modals/ModalMoveArea/ModalMoveArea";

export default function Organigram({ setEraser }) {
  const [t, i18n] = useTranslation("global");
  useEffect(() => {
    setEraser("hide");
  });

  return (
    <>
      <Zoom />
    </>
  );
}
