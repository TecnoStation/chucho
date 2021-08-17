import { Button, Card } from "antd";
import Item from "antd/lib/list/Item";
import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Arrorup from "../../assets/img/icons/upload.svg";
import Business from "../../assets/img/icons/empresa.svg";
import Warning from "../../assets/img/icons/atencion.svg";
import "./Screen.scss";

let carusel = document.getElementsByTagName("Carousel");

export default function ScreenOrganigram() {
  const titles = [
    "¿Por qué crear un Organigrama?",
    "¿Qué compone a mi organigrama?",
    "¿Como puedo subir los datos?",
    "",
  ];

  const [link, setLink] = useState("link");
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(75);
  const [br, setBr] = useState("");
  let title = titles[count];

  return (
    <div className="screen" id="screen">
      <Card
        title={title}
        className="cardCarrousel"
        id="cardOrganigram"
        headStyle={{ textAlign: "center" }}
      >
        <div>
          <Carousel ref={(ref) => (carusel = ref)}>
            <Item>
              <div className="carruselItem">
                <p>
                  <b>Podrás mejora la organización y definición</b> de los ejes
                  principales en la toma de decisiones.
                </p>
                <p>
                  <b>Divide y segmenta el trabajo</b> por unidades tácticas,
                  mejorando la gestión de la estrategia.
                </p>
                <p>
                  <b>
                    Visualiza el vínculo entre el alcance del puesto y el
                    talento del colaborador
                  </b>{" "}
                  cerrando las brechas de las áreas de acción de la compañías
                  así como las responsabilidades de los miembros que la forman.
                </p>
                <p>
                  <b>
                    Optimiza y facilita la gestión de los procesos entre EVOU y
                    Evaluatest
                  </b>
                </p>
              </div>
            </Item>
            <Item>
              <div className="carruselItem">
                <p>
                  Para poder implementar tu organigrama se necesita conocer:
                </p>
                <p>
                  <b>Tu empresa,</b>su información básica y su cultura.
                </p>
                <p>
                  <b>La estructura de tu empresa,</b>es decir que áreas la
                  componen y que puestos existen dentro de ella.
                </p>
                <p>
                  <b>El perfil de tus puestos,</b>lo que se traduce en los datos
                  básicos, las habilidades requeridas y las competencias de cada
                  uno.
                </p>
                <p>
                  <b>El perfil de las personas</b> que ocupan estos puestos, lo
                  que significa sus datos básicos y las habilidades de cada uno.
                </p>
              </div>
            </Item>
            <Item>
              <div className="carruselItem">
                <p>
                  Siempre vas a poder subir los datos directamente de forma
                  manual, sin embargo, entendemos que existen ocasiones en las
                  que es tanta la información, que hemos habilitado la carga
                  masiva.
                </p>
                <p>
                  La carga masiva estará habilitada en los puntos donde hemos
                  detectado esta necesidad dentro del organigrama.
                </p>
                <p>
                  En el panel principal vas a poder encontrar este icono para
                  poder acceder a esta función:
                </p>
                <p style={{ textAlign: "center" }}>
                  <img alt="ico" width="80" className="" src={Arrorup} />
                </p>
              </div>
            </Item>
            <Item>
              <div className="carruselItem">
                <h4 style={{ textAlign: "center" }}>
                  Iniciemos la creación de tu organigrama
                </h4>

                <p className={br}>
                  Para iniciar la creación de tu organigrama, te sugerimos
                  comenzar llenando la información de la sección de “Mi
                  Empresa”.
                </p>

                <p className={br}>
                  Si te faltara información para completar lo que te pedimos,
                  siempre vas a poder regresar dando click desde el menú
                  principal o en este icono:
                </p>

                <p className={br} style={{ textAlign: "center" }}>
                  <img alt="ico" width={visible} src={Business} />
                </p>
                <div className={br} style={{ textAlign: "center" }}>
                  <Link to="/organigrama/mybusiness">
                    <Button
                      style={{ width: "176px", height: "32px" }}
                      className="primary"
                    >
                      Comenzar
                    </Button>
                  </Link>
                </div>
              </div>
            </Item>
          </Carousel>
        </div>
        <div className="arrows">
          <Link
            to="#"
            onClick={() => {
              if (count !== 0) {
                setCount(count - 1);
                carusel.slidePrev();
              }
            }}
            className="arrowLeft"
          >
            <LeftOutlined />
          </Link>
          <Link
            to="#"
            onClick={() => {
              if (count < 3) {
                setCount(count + 1);
                carusel.slideNext();
                if (count === 2) {
                  setVisible(100);
                  setBr("margin30");
                  document.getElementsByClassName("rec");
                  let pagination =
                    document.getElementsByClassName("rec-pagination");
                  pagination[0].setAttribute("style", "display: none");
                  document
                    .getElementsByClassName("arrows")[0]
                    .setAttribute("style", "display: none");
                  document
                    .getElementsByClassName("link")[0]
                    .setAttribute("style", "display: none");
                  setLink("hide");
                }
              }
            }}
            className="arrowRigth"
          >
            <RightOutlined />
          </Link>
        </div>
        <div style={{ textAlign: "center", marginTop: "5px" }}>
          <p>
            <Link className={link} onClick={showWarning} to="#">
              Omitir
            </Link>
          </p>
        </div>
      </Card>

      <Card className="card" id="cardWarning" style={{ textAlign: "center" }}>
        <p style={{ textAlign: "center" }}>
          <img alt="ico" width="120" className="" src={Warning} />
        </p>
        <h1>¡Atención!</h1>
        <p>Estás a punto de omitir el onboarding.</p>
        <p>Recuerda que te orienta sobre el uso de la plataforma.</p>
        <p>¿Estás seguro?</p>
        <Button
          onClick={showCard}
          className="secondary"
          style={{ marginRight: "15px" }}
        >
          Continuar
        </Button>
        <Link to="/organigrama/organigram">
          <Button className="primary btn">Omitir</Button>
        </Link>
      </Card>
    </div>
  );
}

function showWarning() {
  let cardOrganigram = document.getElementById("cardOrganigram");
  let cardWarning = document.getElementById("cardWarning");

  cardOrganigram.setAttribute("style", "display: none;");
  cardWarning.setAttribute("style", "display: block;");
}

function showCard() {
  let cardOrganigram = document.getElementById("cardOrganigram");
  let cardWarning = document.getElementById("cardWarning");

  cardWarning.setAttribute("style", "display: none;");
  cardOrganigram.setAttribute("style", "display: block;");
}
