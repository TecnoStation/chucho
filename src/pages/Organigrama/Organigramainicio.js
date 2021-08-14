import React from "react";
import { Button } from "antd";
import Screen from "../../components/Screens/Screenorganigramainicio";
import Inicio from "../../assets/img/iconos/Grupo 262.svg";
import "./Organigramainicio.scss";

export default function Organigramainicio() {
  return (
    <div className="square custom">
      <div className="message">
        <p>
          <img alt="ico" className="" src={Inicio} />
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
      <Screen />
    </div>
  );
}

function showMesage() {
  let screen = document.getElementById("screen");
  screen.setAttribute("style", "display: flex;");
}
