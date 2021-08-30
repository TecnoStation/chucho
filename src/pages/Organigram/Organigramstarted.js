import React from "react";
import { Button } from "antd";
import ScreenOrganigram from "../../components/Screens/ScreenOrganigram";
import Start from "../../assets/img/icons/Grupo 262.svg";
import { useTranslation } from "react-i18next";

import "./Organigramstarted.scss";

export default function Organigramstarted() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="square custom"> 
      <div className="message">
        <p>
          <img alt="ico" className="" src={Start} />
        </p>
        <br />
        <h1>{t("organigram.empty-organigram-layout.h1-welcome")}</h1>
        <p>
        {t("organigram.empty-organigram-layout.p-row1")}
        </p>
        <br />
        <p>
          <Button
            className="primary"
            style={{ width: "100px" }}
            onClick={showMesage}
          >
            {t("organigram.empty-organigram-layout.btn-start")}
          </Button>
        </p>
      </div>
      <ScreenOrganigram />
    </div>
  );
}

function showMesage() {
  let screen = document.getElementById("screen");
  screen.setAttribute("style", "display: flex;");
}
