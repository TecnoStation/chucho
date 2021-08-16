import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoSmall from "../../assets/img/Evou-E-color.png";
import Tres from "../../assets/img/iconos/360-24px.svg";
import Hub from "../../assets/img/iconos/device_hub-24px.svg";
import Trending from "../../assets/img/iconos/trending_up-24px.svg";
import Insights from "../../assets/img/iconos/insights-24px.svg";
import Grupo from "../../assets/img/iconos/Grupo 625.svg";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import Brive from "../../assets/img/brive/BVC-blanco-largo.svg";

import "./MenuEvo.scss";

export default function MenuEvo() {
  const [drop, setDrop] = useState("showBlock");
  const [visible, seVisible] = useState("hide");
  const [brive, setBrive] = useState("brive hide");

  return (
    <>
      <div>
        <p>
          <img alt="logo" src={LogoSmall} width="45" height="45" />
        </p>
      </div>
      <div
        className="item"
        onMouseOver={() => {
          setBrive("brive showBlock");
        }}
        onMouseOut={() => {
          setBrive("brive hide");
        }}
      >
        <img alt="ico" className="itemicon" src={Hub} />
        <p className="itemtex">Organigrama</p>
        <div className="slideSide">
          <span>Organigrama</span>
          <hr></hr>
          <ul>
            <li>
              <Link to="/miempresa">Mi empresa</Link>
            </li>
            <Link
              to="#"
              className={drop}
              onClick={() => {
                setDrop("hide");
                seVisible("showBlock");
              }}
            >
              <li>
                Areas y puestos
                <IoMdArrowDropright
                  style={{
                    position: "absolute",
                    fontSize: "16px",
                    marginTop: "3px",
                    color: "#000",
                    marginRight: "-10px",
                  }}
                />
              </li>
            </Link>
            <Link
              to="#"
              className={visible}
              onClick={() => {
                setDrop("showBlock");
                seVisible("hide");
              }}
            >
              <li>
                Areas y puestos
                <IoMdArrowDropdown
                  style={{
                    position: "absolute",
                    fontSize: "16px",
                    marginTop: "3px",
                    color: "#000",
                    marginRight: "-10px",
                  }}
                />
                <ul className={visible}>
                  <Link to="/areasypuestos?tab=1">
                    <li>Crear área</li>
                  </Link>
                  <Link to="/areasypuestos?tab=2">
                    <li>Crear Puestos</li>
                  </Link>
                  <Link to="/areasypuestos-colaborador">
                    <li>Crear colaborador</li>
                  </Link>
                </ul>
              </li>
            </Link>

            <Link to="/equipoinicio">
              <li>Mis equipos</li>
            </Link>
            <Link to="/organigrama">
              <li>Organigrama general</li>
            </Link>
          </ul>
        </div>
      </div>
      <div
        className="item"
        onMouseOver={() => {
          setBrive("brive showBlock");
        }}
        onMouseOut={() => {
          setBrive("brive hide");
        }}
      >
        <img alt="ico" className="itemicon" src={Tres} />
        <p className="itemtex">Evaluación 360</p>
        <div className="slideSide">
          <span>Evaluación 360</span>
          <hr></hr>
          <ul>
            <li>Crear perfil de puesto</li>
            <li>Crear proceso</li>
            <li>Evaluaciones</li>
          </ul>
        </div>
      </div>
      <div
        className="item"
        onMouseOver={() => {
          setBrive("brive showBlock");
        }}
        onMouseOut={() => {
          setBrive("brive hide");
        }}
      >
        <img alt="ico" className="itemicon" src={Trending} />
        <p className="itemtex">Objetivos</p>
        <div className="slideSide">
          <span>Objetivos</span>
          <hr></hr>
          <ul>
            <li>Árbol de objetivos</li>
            <li>Bandeja de entrada</li>
            <li>Resumen de evaluaciones</li>
          </ul>
        </div>
      </div>
      <div
        className="item"
        onMouseOver={() => {
          setBrive("brive showBlock");
        }}
        onMouseOut={() => {
          setBrive("brive hide");
        }}
      >
        <img alt="ico" className="itemicon" src={Insights} />
        <p className="itemtex">Indicadores</p>
        <div className="slideSide">
          <span>Indicadores clave</span>
          <hr></hr>
          <ul>
            <li>Mis indicadores</li>
            <li>Mis evaluaciones</li>
            <li>Gestionar</li>
          </ul>
        </div>
      </div>
      <div
        className="item"
        onMouseOver={() => {
          setBrive("brive showBlock");
        }}
        onMouseOut={() => {
          setBrive("brive hide");
        }}
      >
        <img alt="ico" className="itemicon" src={Grupo} />
        <p className="itemtex">Nine Box</p>
        <div className="slideSide">
          <span>Nine Box</span>
          <hr></hr>
          <ul>
            <Link
              to="#"
              className={drop}
              onClick={() => {
                setDrop("hide");
                seVisible("showBlock");
              }}
            >
              <li>
                Planes de desarrollo
                <IoMdArrowDropright
                  style={{
                    position: "absolute",
                    fontSize: "16px",
                    marginTop: "3px",
                    color: "#000",
                    marginRight: "-10px",
                  }}
                />
              </li>
            </Link>
            <Link
              to="#"
              className={visible}
              onClick={() => {
                setDrop("showBlock");
                seVisible("hide");
              }}
            >
              <li>
                Planes de desarrollo
                <IoMdArrowDropdown
                  style={{
                    position: "absolute",
                    fontSize: "16px",
                    marginTop: "3px",
                    color: "#000",
                    marginRight: "-10px",
                  }}
                />
                <ul className={visible}>
                  <li>Crear plan</li>
                  <li>Mis planes</li>
                  <li>Provedores</li>
                </ul>
              </li>
            </Link>
            <li>Ver Nine Box</li>
          </ul>
        </div>
      </div>
      <div className={brive}>
        <img alt="" src={Brive} width="160" />
        <div className="allRigths">
          <p>Brivé Soluciones. All Rigths Reserved</p>
          <p className="link">
            Legal <br /> Aviso de Privacidad
          </p>
        </div>
      </div>
    </>
  );
}
