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

export default function Equiposv() {
  const [modalCreateTeam, setModalCreateTeam] = useState(false);
  const openModalCreateTeam = () => {
    setModalCreateTeam(true);
  };
  const edit = () => {
    // setModalTarget(false);
    // setModalCreateTeam(true);
  };
  const [modalRename, setmodalRename] = useState(false);

  const rename = () => {
    equipos[Item].nombre = value;
    document.getElementById("nombreTeam").innerHTML = value;
    setmodalRename(false);
  };

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

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Menu.Item key="01">
          <Link to="#">Clonar equipo</Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key="1">
        <Menu.Item key="12">
          <Link
            onClick={() => {
              setmodalRename(true);
            }}
            to="#"
          >
            Renombrar
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key="2">
        <Menu.Item key="23">
          <Link to="#">Editar</Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <Menu.Item key="34">
          <Link to="#">Eliminar</Link>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row iconGray" span={1}>
          <RiFilterFill style={{ fontSize: "22px" }} />
        </Col>
        <Col className="gutter-row  rigth" span={1}>
          <span>
            <Link to="/Equipos">
              <BsFillGrid3X2GapFill
                style={{ fontSize: "24px" }}
                className="iconGray"
              />
            </Link>
          </span>
        </Col>
        <Col className="gutter-row" span={3} style={{ textAlign: "left" }}>
          <Link className="iconGray" to="/equiposv">
            <BsListUl
              className="dividerLeft iconBlur"
              style={{ paddingLeft: "5px", fontSize: "26px" }}
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

      <Row
        style={{ marginTop: "30px", width: "80%", paddingBottom: "20px" }}
        className="dividerBottomFull"
      >
        <Col span={11}>
          <span>
            <b>Equipo proyecto EVOU</b>
          </span>
          <br />
          <span>Mandos medios</span>
        </Col>
        <Col span={11}>
          <p>15-JUN-2021</p>
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

      <Row
        style={{ marginTop: "30px", width: "80%", paddingBottom: "20px" }}
        className="dividerBottomFull"
      >
        <Col span={11}>
          <span>
            <b>Equipo proyecto EVOU</b>
          </span>
          <br />
          <span>Mandos medios</span>
        </Col>
        <Col span={11}>
          <p>15-JUN-2021</p>
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

      <Modal
        title="Renombre de equipo"
        className="smallModal2"
        visible={modalRename}
        onCancel={() => {
          setmodalRename(false);
        }}
        footer={[
          <Button
            style={{ marginRight: "20px", width: "100px" }}
            className="secondary"
            onClick={() => {
              setmodalRename(false);
            }}
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
    </>
  );
}
