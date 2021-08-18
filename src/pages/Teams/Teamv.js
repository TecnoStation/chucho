import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Input,
  Row,
  Form,
  Modal,
  Checkbox,
  Dropdown,
  Menu,
} from "antd";
import { IoMdAdd } from "react-icons/io";
import { SearchOutlined } from "@ant-design/icons";
import { BsFillGrid3X2GapFill, BsListUl } from "react-icons/bs";
import { RiFilterFill } from "react-icons/ri";
import Avatar from "../../assets/img/avatar.png";
import Teamlist from "../../components/Cards/Teamlist";
import { Link } from "react-router-dom";
import More from "../../assets/img/icons/more_vert-24px.svg";

import CreateTeam from "./components/CreateTeam";

import "./Teams.scss";
const LOCAL_STORAGE_KEY = "lista";

export default function Teamsv() {
  const [btn1, setBtn1] = useState("hidden");
  const [btn2, setBtn2] = useState("button");

  const teams = [
    {
      id: 1,
      name: "Equipo - Proyecto EVOU",
      subtitle: "Mandos Medios",
      Tipo: 0,
      miembros: [
        {
          id: 1,
          name: "Giovanni Funentes",
          puesto: "Director RH",
          lider: true,
          rol: "",
        },
        {
          id: 2,
          name: "Panchita Lopez",
          puesto: "Directora de Arguendes",
          lider: false,
          rol: "",
        },
        {
          id: 3,
          name: "Jose Flores",
          puesto: "Director seguridad",
          lider: false,
          rol: "",
        },
      ],
      modalidad: 0,
      frame: 0,
      date: "15-JUN-2021",
    },
  ];

  const [Item, setItem] = useState("");

  const [value, setValue] = useState("");

  const [key, setKey] = useState(0);

  const setDates = (item, e) => {
    setItem(item);
    setValue(teams[item].name);
    setKey(item);
  };

  const clone = () => {};

  const rename = () => {
    teams[Item].name = value;
    document.getElementById("nameTeam").innerHTML = value;
    setmodalRename(false);
  };

  const edit = () => {
    setModalTarget(false);
    setModalCreateTeam(true);
    setBtn1("button");
    setBtn2("hidden");
  };

  const deleteTeam = () => {};

  const [modalRename, setmodalRename] = useState(false);

  const closeModalRename = () => {
    setmodalRename(false);
  };

  const openModalRename = () => {
    setmodalRename(true);
    setValue(teams[Item].name);
  };

  const onchange = (e) => {
    setValue(e.target.value);
    setKey(key);
  };

  // ------------ modal target ----------------
  const [modalTarget, setModalTarget] = useState();

  const openModalTarget = (index, data, e) => {
    setValue(data.name);
    setModalTarget(true);
  };

  const closeModalTarget = () => {
    setModalTarget(false);
  };

  //----------------- CREATE TEAM ----------

  const [modalCreateTeam, setModalCreateTeam] = useState(false);
  const openModalCreateTeam = () => {
    setModalCreateTeam(true);
    setBtn1("hidden");
    setBtn2("button");
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTeams = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTeams) {
      setData(storageTeams);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const add = (fact) => {
    setData([fact, ...data]);
  };

  function removeFact(id) {
    setData(data.filter((fact) => fact.id !== id));
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link onClick={edit} to="#">
            Editar datos
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link to="#">Eliminar</Link>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );

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
          <Link to="/organigrama/teams">
            <span className="iconGray" style={{ fontSize: "17px" }}>
              <BsFillGrid3X2GapFill />
            </span>
          </Link>
        </Col>
        <Col className="gutter-row " span={3} style={{ textAlign: "left" }}>
          <BsListUl
            className="dividerLeft iconBlue"
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
            }}
            icon={<IoMdAdd className="iconAjust2" />}
          >
            {" "}
            <span className="textAjust4">Nuevo Equipo</span>
          </Button>
        </Col>
      </Row>

      <Row style={{ marginTop: "50px" }}>
        <Col span={2}></Col>
        <Col span={6}>
          <p>Nombre del equipo</p>
        </Col>
        <Col style={{ paddingLeft: "15px" }} span={9}>
          <p>Última modificación </p>
        </Col>
        <Col style={{ paddingLeft: "15px" }} span={2}>
          <p>Acción</p>
        </Col>
      </Row>

      <Teamlist
        openModalTarget={openModalTarget}
        delete={deleteTeam}
        edit={edit}
        clone={clone}
        openModalRename={openModalRename}
        setDates={setDates}
        teams={teams}
      />

      <div style={{ height: "50px" }}></div>

      <CreateTeam
        btn1={btn1}
        btn2={btn2}
        modalCreateTeam={modalCreateTeam}
        setModalCreateTeam={setModalCreateTeam}
        openModalCreateTeam={openModalCreateTeam}
        add={add}
        data={data}
        removeFact={removeFact}
      />

      <Modal
        title="Renombre de equipo"
        className="smallModal2"
        visible={modalRename}
        onCancel={closeModalRename}
        footer={[
          <Button
            style={{ marginRight: "20px", width: "100px" }}
            className="secondary"
            onClick={closeModalRename}
          >
            Cancelar
          </Button>,
          <Link to="/organigrama/teamsv">
            <input
              type="button"
              className="primary"
              style={{ width: "100px", marginRight: "40px" }}
              onClick={rename}
              value="Guardar"
            />{" "}
          </Link>,
        ]}
      >
        <Form name="form1" layout="vertical">
          <Form.Item name="nameTeam">
            <Input
              key={key}
              type="text"
              onChange={onchange}
              defaultValue={value}
              value={value}
            />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title={value}
        className="middleModal"
        visible={modalTarget}
        onCancel={closeModalTarget}
        footer=""
      >
        <Row>
          <Col span={6}>
            <p>
              <b>Tipo de equipo</b>
            </p>
          </Col>
          <Col span={16}>
            <p>
              <b>Modalidad</b>
            </p>
          </Col>
          <Col span={2}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <Link
                to="#"
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <img alt="logo" src={More} width="25" height="25" />
              </Link>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <p>Personalizado</p>
          </Col>
          <Col span={18}>
            <p>Multifuncional</p>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "left", paddingLeft: "5px" }} span={24}>
            <p>
              <b>Marco de trabajo</b>
            </p>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "left", paddingLeft: "5px" }} span={24}>
            <p>SCRUM</p>
          </Col>
        </Row>
        <Row style={{ textAlign: "center" }}>
          <Col span={8}>Miembros del Equipo</Col>
          <Col span={8}>Líder</Col>
          <Col span={8}>Roles</Col>
        </Row>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          <Col className="gutter-row" span={11}>
            <Row>
              <Col span={2}>
                <p>
                  <img alt="ico" width="45" src={Avatar} />
                </p>
              </Col>
              <Col span={20}>
                <span>
                  <b>Laura Mendoza</b>
                </span>
                <br />
                <span>Programador JR</span>
              </Col>
            </Row>
          </Col>
          <Col className="gutter-row" span={2}>
            <Form.Item style={{ textAlign: "center" }}>
              <Checkbox />
            </Form.Item>
          </Col>

          <Col style={{ textAlign: "right" }} className="gutter-row" span={10}>
            <p className="iconSureGray">Product Owner</p>
          </Col>
        </Row>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          <Col className="gutter-row" span={11}>
            <Row>
              <Col span={2}>
                <p>
                  <img alt="ico" width="45" src={Avatar} />
                </p>
              </Col>
              <Col span={20}>
                <span>
                  <b>Laura Mendoza</b>
                </span>
                <br />
                <span>Programador JR</span>
              </Col>
            </Row>
          </Col>
          <Col className="gutter-row" span={2}></Col>

          <Col style={{ textAlign: "right" }} className="gutter-row" span={10}>
            <p className="iconSureGray">Product Owner</p>
          </Col>
        </Row>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          <Col className="gutter-row" span={11}>
            <Row>
              <Col span={2}>
                <p>
                  <img alt="ico" width="45" src={Avatar} />
                </p>
              </Col>
              <Col span={20}>
                <span>
                  <b>Laura Mendoza</b>
                </span>
                <br />
                <span>Programador JR</span>
              </Col>
            </Row>
          </Col>
          <Col className="gutter-row" span={2}></Col>

          <Col style={{ textAlign: "right" }} className="gutter-row" span={10}>
            <p className="iconSureGray">Product Owner</p>
          </Col>
        </Row>
      </Modal>
    </>
  );
}
