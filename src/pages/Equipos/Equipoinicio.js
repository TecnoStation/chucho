import React, { useEffect, useState } from "react";
import { Button, Col, Input, Row } from "antd";
import Inicio from "../../assets/img/iconos/Grupo 1182.svg";
import { IoMdAdd } from "react-icons/io";
import { SearchOutlined } from "@ant-design/icons";

import { BsFillGrid3X2GapFill, BsListUl } from "react-icons/bs";
import { RiFilterFill } from "react-icons/ri";
import "./Equipos.scss";
import CreateTeam from "./components/CreateTeam";

const LOCAL_STORAGE_KEY = "lista";

export default function Equipoinicio() {
  const [btn1, setBtn1] = useState("hidden");
  const [btn2, setBtn2] = useState("button");
  const [modalCreateTeam, setModalCreateTeam] = useState(false);
  const openModalCreateTeam = () => {
    setModalCreateTeam(true);
    setBtn1("hidden");
    setBtn2("button");
  };

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setDatos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(datos));
  }, [datos]);

  const agrega = (dato) => {
    setDatos([dato, ...datos]);
  };

  function removeDato(id) {
    setDatos(datos.filter((dato) => dato.id !== id));
  }

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row iconGray"
          style={{ fontSize: "16px" }}
          span={1}
        >
          <RiFilterFill />
        </Col>
        <Col className="gutter-row rigth" span={1}>
          <span className="iconBlue" style={{ fontSize: "17px" }}>
            <BsFillGrid3X2GapFill />
          </span>
        </Col>
        <Col
          className="gutter-row iconGray"
          span={3}
          style={{ textAlign: "left" }}
        >
          <BsListUl
            className="dividerLeft"
            style={{ paddingLeft: "5px", fontSize: "22px" }}
          />
        </Col>
        <Col className="gutter-row" span={15}>
          <Input
            style={{ width: "200px", marginTop: "-5px" }}
            addonAfter={<SearchOutlined />}
            placeholder="Buscar puesto"
          />
        </Col>
        <Col className="gutter-row" span={4}>
          <Button
            className="primaryB"
            onClick={openModalCreateTeam}
            style={{
              textAlign: "left",
              marginRight: "20px",
              marginTop: "-5px",
              display: "none",
            }}
            icon={<IoMdAdd className="iconAjust2" />}
          >
            {" "}
            <span className="textAjust4">Nuevo Equipo</span>
          </Button>
        </Col>
      </Row>

      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ textAlign: "center", padding: "90px 40px 92px 40px" }}
      >
        <Col className="gutter-row" span={8}></Col>
        <Col className="gutter-row" span={8}>
          <p>
            <img alt="ico" className="" src={Inicio} />
          </p>
          <br />
          <h1>¡Bienvenido a los equipos!</h1>
          <p>
            Aquí podrás visualizar todas las equipos de la organización, además
            de facilitar y fomentar el trabajo coopera
          </p>
          <br />
          <p>
            <Button
              className="primaryB"
              onClick={openModalCreateTeam}
              style={{ textAlign: "left", marginRight: "20px" }}
              icon={<IoMdAdd className="iconAjust2" />}
            >
              {" "}
              <span className="textAjust4">Nuevo Equipo</span>
            </Button>
          </p>
        </Col>
        <Col className="gutter-row" span={8}></Col>
      </Row>

      <CreateTeam
        btn1={btn1}
        btn2={btn2}
        modalCreateTeam={modalCreateTeam}
        setModalCreateTeam={setModalCreateTeam}
        openModalCreateTeam={openModalCreateTeam}
        agrega={agrega}
        datos={datos}
        removeDato={removeDato}
      />
    </>
  );
}
