import React, { useState } from "react";
import { Button, Input, Form, Modal, Row, Col } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Screens({ message, setMessage, messageType, setActive }) {
  const [t, i18n] = useTranslation("global");
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const msg = [
    {
      title: "¡Bien hecho!",
      subTitle: "Ahora necesitamos conocer la cultura de tu empresa",
      text: "El papel de la cultura organizacional es esencial, pues constituye un motor que permite a la organización caminar hacia un mismo lugar, ya que determina las acciones y actitudes que deben tomarse en consideración para lograr los objetivos.",
      btn: "Continuar",
      url: () => {
        setActive("2");
        setMessage(false);
      },
    },
    {
      title: "¡Listo!",
      subTitle: "Ahora tu talento",
      text: "Esta información ayuda a identificar de mejor manera el talento de tu organización, asignar funciones especificas a cada uno, facilitar la toma de decisiones.",
      text2:
        "Igualmente esta parte la puedes realizar al cargar de forma masiva los datos o de forma manual. Con el fin de que conozcas qué datos se necesitan para cada puesto vamos a realizar uno de forma manual.",
      btn: "Continuar",
      url: () => {
        history.push({
          pathname:
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-collaborator"),
        });
      },
    },
    {
      title: "¡Excelente!",
      subTitle: "El siguiente paso es crear las áreas de tu empresa",
      text: "En esta parte debes de crear un listado de las áreas que componen tu empresa, ya que con esta información definiremos una primera estructura de tu organigrama",
      btn: "Continuar",
      url: () => {
        history.push({
          pathname:
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions"),
        });
      },
    },
    {
      title: "Vamos muy bien!",
      subTitle:
        "Ahora, crearemos la lista con los nombres de los puestos en tu empresa",
      text: "En esta sección debes de agregar solo los nombres de los puestos en tu empresa, esto ayuda a tener claridad de todos los puestos necesarios en tu empresa y ayudará a la cración de la estructura de tu organigrama",
      btn: "Continuar",
      url: () => {
        setActive("2");
        setMessage(false);
      },
    },
    {
      title: "¡Perfecto!",
      subTitle: "Vamos a ingresar el perfil de cada puesto",
      text: "Nuestro siguiente paso consiste en agregar la información necesaria de cada puesto. esta base de datos sirve para fortalecer el proceso productivo de la empresa.",
      text2:
        "Esta parte la puedes realizar al cargar de forma masiva o manual los datos. Con el fin de que conozcas qué datos se necesitan para cada puesto vamos a realizar uno de forma manual.",
      btn: "Continuar",
      url: () => {
        history.push({
          pathname:
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-addjob"),
        });
      },
    },
  ];

  return (
    <>
      <Modal
        className="middleModal"
        title={false}
        visible={message}
        closable={false}
        footer={false}
      >
        <h3>{msg[messageType].title}</h3>
        <h3>{msg[messageType].subTitle}</h3>
        <br />
        <p style={{ textAlign: "justify" }}>{msg[messageType].text}</p>
        <p style={{ textAlign: "justify" }}>{msg[messageType].text2}</p>
        <br />
        <Button
          style={{ width: "50%" }}
          onClick={msg[messageType].url}
          className="primary"
        >
          {msg[messageType].btn}
        </Button>
      </Modal>
    </>
  );
}

export default Screens;
