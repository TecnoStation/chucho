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
import Simplecard from "../../components/Cards/Simplecard";
import { Link } from "react-router-dom";
import More from "../../assets/img/iconos/more_vert-24px.svg";

import CreateTeam from "./components/CreateTeam";

import "./Equipos.scss";
const LOCAL_STORAGE_KEY = "lista";

export default function Equipos() {
  const [btn1, setBtn1] = useState("hidden");
  const [btn2, setBtn2] = useState("button");

  const equipos = [
    {
      id: 1,
      nombre: "Equipo - Proyecto EVOU",
      subtitle: "Mandos Medios",
      Tipo: 0,
      miembros: [
        {
          id: 1,
          nombre: "Giovanni Funentes",
          puesto: "Director RH",
          lider: true,
          rol: "",
        },
        {
          id: 2,
          nombre: "Panchita Lopez",
          puesto: "Directora de Arguendes",
          lider: false,
          rol: "",
        },
        {
          id: 3,
          nombre: "Jose Flores",
          puesto: "Director seguridad",
          lider: false,
          rol: "",
        },
      ],
      modalidad: 0,
      marcco: 0,
      fecha: "15-JUN-2021",
    },
  ];

  const [Item, setItem] = useState("");

  const [value, setValue] = useState("");

  const [key, setKey] = useState(0);

  const setDates = (item, e) => {
    setItem(item);
    setValue(equipos[item].nombre);
    setKey(item);
  };

  const clone = () => {};

  const rename = () => {
    equipos[Item].nombre = value;
    document.getElementById("nombreTeam").innerHTML = value;
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
    setValue(equipos[Item].nombre);
  };

  const onchange = (e) => {
    setValue(e.target.value);
    setKey(key);
  };

  // ------------ modal target ----------------
  const [modalTarget, setModalTarget] = useState();

  const openModalTarget = (index, data, e) => {
    setValue(data.nombre);
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

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setDatos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(datos));
  }, [datos]);

  const agrega = (dato) => {
    setDatos([dato, ...datos]);
  };

  function removeDato(id) {
    setDatos(datos.filter((dato) => dato.id !== id));
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
        <Col className="gutter-row iconGray" span={1}>
          <RiFilterFill />
        </Col>
        <Col className="gutter-row iconBlue rigth" span={1}>
          <span>
            <BsFillGrid3X2GapFill />
          </span>
        </Col>
        <Col className="gutter-row" span={3} style={{ textAlign: "left" }}>
          <Link className="iconGray" to="/equiposv">
            <BsListUl
              className="dividerLeft"
              style={{ paddingLeft: "5px", fontSize: "20px" }}
            />
          </Link>
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

      <Row style={{ marginTop: "10px", paddingLeft: "15px" }}>
        <Simplecard
          openModalTarget={openModalTarget}
          delete={deleteTeam}
          edit={edit}
          clone={clone}
          openModalRename={openModalRename}
          setDates={setDates}
          equipos={equipos}
        />
      </Row>

      <div style={{ height: "50px" }}></div>

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
          <Link to="/equipos">
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
