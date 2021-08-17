import React from "react";
import { Button } from "antd";
import ScreenOrganigram from "../../components/Screens/ScreenOrganigram";
import Start from "../../assets/img/icons/Grupo 262.svg";
import "./Organigramstarted.scss";

export default function Organigramstarted() {
  return (
    <div className="square custom">
      <div className="message">
        <p>
          <img alt="ico" className="" src={Start} />
        </p>
        <br />
        <h1>¡Bienvenido al Organigrama!</h1>
        <p>
          Aquí podrás visualizar todas las estructuras de la organización,
          además de facilitar la evaluación 360 y la vista de los equipos para
          alcanzar los Objetivos.
        </p>
        <br />
        <p>
          <Button
            className="primary"
            style={{ width: "100px" }}
            onClick={showMesage}
          >
            Iniciar
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
