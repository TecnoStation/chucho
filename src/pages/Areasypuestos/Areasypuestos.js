import React, { useState } from "react";
import {
  Form,
  Tabs,
  Input,
  Col,
  Row,
  Button,
  Modal,
  Tag,
  AutoComplete,
} from "antd";
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Link, useHistory, useLocation } from "react-router-dom";
import { RiPencilFill } from "react-icons/ri";
import { BiGridVertical, BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { IoMdCloudDownload, IoMdSquare, IoMdTrash } from "react-icons/io";
import Avatar from "../../assets/img/avatar.png";
import Screendefault from "../../components/Screens/Screendefault";
import Outline from "../../assets/img/iconos/bien_hecho.svg";
import {
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
  AiOutlineFileText,
} from "react-icons/ai";
import { ImArrowUp } from "react-icons/im";
//import {  } from 'react-router-dom';

import "./Areasypuestos.scss";

const { TabPane } = Tabs;

export default function Areasypuestos() {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tabState = query.get("tab") || "1";

  const tabs = ["1", "2"];
  const [Active, setActive] = useState(tabState);

  const changeActive = () => {
    query.set("tab", 2);
    if (Active === "1") {
      query.set("tab", 2);
      setActive(tabs[1]);
      history.push({ search: "?tab=2" });
    } else {
      query.set("tab", 1);
      setActive(tabs[0]);
      history.push({ search: "?tab=1" });
    }
  };

  const options = [
    { value: "CEO" },
    { value: "Marketing" },
    { value: "Ventas" },
  ];

  const [modalDelete, setModalDelete] = useState(false);

  const deleteColaboradores = () => {
    setModalDelete(true);
  };
  const closeModalDelete = () => {
    setModalDelete(false);
  };
  const sendDelete = () => {
    alert("ok");
    setModalDelete(false);
  };

  const [modalPassword, setModalPassword] = useState(false);
  const closeModalPassword = () => {
    setModalPassword(false);
    setModalDelete(false);
  };
  const sendPassword = () => {
    setModalPassword(false);
  };
  const openModalPassword = () => {
    setModalPassword(true);
  };

  const [modalMove, setModalMove] = useState(false);
  const closeModalMove = () => {
    setModalMove(false);
    setModalDelete(false);
  };
  const sendMove = () => {
    setModalMove(false);
  };
  const openModalMove = () => {
    setModalMove(true);
  };

  const [modalDownload, setModalDownload] = useState(false);
  const closeModalDownload = () => {
    setModalDownload(false);
  };
  const sendDownload = () => {
    setModalDownload(false);
  };
  const openModalDownload = () => {
    setModalDownload(true);
  };

  const closeGood = () => {
    document.getElementById("screen").setAttribute("style", "display: none");
    setModalDownload(false);
  };

  const ready = () => {
    document.getElementById("screen").setAttribute("style", "display: flex");
  };

  const addJob = () => {
    document.getElementById("showJob").setAttribute("style", "display: flex");
  };

  const cancelJob = () => {
    document.getElementById("showJob").setAttribute("style", "display: none");
  };

  const saveJob = () => {
    alert("Guardado");
    document.getElementById("showJob").setAttribute("style", "display: none");
  };

  return (
    <>
      <Tabs
        className="tab"
        activeKey={Active}
        onChange={changeActive}
        type="card"
      >
        <TabPane className="tabPane" tab="Estructura" key="1">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="info">
            <Col className="gutter-row" span={12}>
              <h3 style={{ textAlign: "left" }}>Crear áreas de Mi empresa</h3>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  className="gutter-row"
                  span={10}
                  style={{ textAlign: "left" }}
                >
                  <Link to="/areasypuestos-masivae">
                    <Button
                      className="third"
                      style={{ textAlign: "left", marginRight: "16px" }}
                      icon={<ImArrowUp className="iconAjust2" />}
                    >
                      {" "}
                      <span className="textAjust2">Carga masiva</span>
                    </Button>
                  </Link>
                </Col>
                <Col
                  className="gutter-row"
                  span={14}
                  style={{ textAlign: "left" }}
                >
                  <Button
                    className="btnBlue third"
                    onClick={openModalDownload}
                    size="default"
                  >
                    {" "}
                    <IoMdCloudDownload className="iconAjust" />{" "}
                    <span className="textAjust">Descargar archivo</span>{" "}
                  </Button>
                </Col>
              </Row>

              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginTop: "20px" }}
              >
                <Col
                  className="gutter-row"
                  span={24}
                  style={{ textAlign: "justify" }}
                >
                  <span className="link">
                    Agrega áreas y subáreas para crear el esqueleto del
                    organigrama de tu empresa
                  </span>
                </Col>
              </Row>

              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginTop: "20px" }}
              >
                <Col
                  className="gutter-row"
                  span={24}
                  style={{ textAlign: "justify" }}
                >
                  <Tag className="tag">
                    {" "}
                    [ Nombre de la empresa ingresado en Mi empresa ]{" "}
                  </Tag>
                </Col>
              </Row>

              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginTop: "20px" }}
              >
                <Col
                  className="gutter-row"
                  span={24}
                  style={{ textAlign: "justify" }}
                >
                  <Tag className="tagTwo">
                    {" "}
                    <IoMdSquare className="iconGray" /> CEO{" "}
                  </Tag>
                </Col>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginTop: "20px" }}
              >
                <Col className="gutter-row" span={24}>
                  <Tag className="tagThree">
                    <Row>
                      <Col span={12} style={{ textAlign: "left" }}>
                        <IoMdSquare className="iconGreen" /> CEO
                      </Col>
                      <Col
                        span={12}
                        className="iconGreen"
                        style={{ textAlign: "right" }}
                      >
                        <PlusCircleOutlined
                          style={{ marginRight: "12px", marginTop: "5px" }}
                        />
                        <RiPencilFill
                          style={{ marginRight: "10px", marginTop: "7px" }}
                        />
                        <BiGridVertical
                          style={{ marginRight: "10px", marginTop: "7px" }}
                        />
                        <IoMdTrash
                          onClick={deleteColaboradores}
                          style={{ marginRight: "5px", marginTop: "7px" }}
                        />
                      </Col>
                    </Row>
                  </Tag>
                </Col>
              </Row>

              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginTop: "20px" }}
              >
                <Col
                  className="gutter-row"
                  span={24}
                  style={{ textAlign: "justify" }}
                >
                  <Form layout="vertical">
                    <Form.Item name="empresa" label="">
                      <AutoComplete
                        className="autoComplete"
                        options={options}
                        placeholder="Ej. Agrega nueva área"
                        filterOption={(inputValue, option) =>
                          option.value
                            .toUpperCase()
                            .indexOf(inputValue.toUpperCase()) !== -1
                        }
                      />
                    </Form.Item>
                  </Form>
                </Col>
              </Row>

              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  className="gutter-row"
                  span={24}
                  style={{ textAlign: "justify" }}
                >
                  <Link to="#">
                    {" "}
                    <PlusCircleOutlined /> Agregar nueva área
                  </Link>
                </Col>
              </Row>
            </Col>

            <Col
              className="gutter-row dividerLeft"
              style={{ textAlign: "left" }}
              span={12}
            >
              <h3>Puestos en el área: Dirección de Finanzas</h3>
              <p>Ingresa los puestos de tus áreas.</p>
              <Row className="dividerBottom" style={{ paddingBottom: "15px" }}>
                <Col span={14} style={{ marginLeft: "30px" }}>
                  <span>CEO</span>
                </Col>
                <Col
                  span={8}
                  className="iconGreen"
                  style={{ fontSize: "18px" }}
                >
                  <BiPlusCircle style={{ marginRight: "20px" }} />{" "}
                  <BiMinusCircle />
                </Col>
              </Row>
              <br />
              <Row className="dividerBottom" style={{ paddingBottom: "15px" }}>
                <Col span={14} style={{ marginLeft: "30px" }}>
                  <span>Director de Finanzas</span>
                </Col>
                <Col
                  span={8}
                  className="iconGreen"
                  style={{ fontSize: "18px" }}
                >
                  <BiPlusCircle style={{ marginRight: "20px" }} />{" "}
                  <BiMinusCircle />
                </Col>
              </Row>
              <br />
              <Row className="dividerBottom" style={{ paddingBottom: "15px" }}>
                <Col span={14} style={{ marginLeft: "30px" }}>
                  Asistente ejecutivo
                </Col>
                <Col
                  span={8}
                  className="iconGreen"
                  style={{ fontSize: "18px" }}
                >
                  <BiPlusCircle style={{ marginRight: "20px" }} />{" "}
                  <BiMinusCircle />
                </Col>
              </Row>
              <br />
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  className="gutter-row"
                  span={24}
                  style={{ textAlign: "justify" }}
                >
                  <Link to="#">
                    {" "}
                    <PlusCircleOutlined /> Agregar puesto
                  </Link>
                </Col>
              </Row>
              <div style={{ height: "380px" }}></div>
            </Col>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="info2">
              <Col
                style={{ textAlign: "right" }}
                className="gutter-row"
                span={24}
              >
                <Button className="secondary" style={{ marginRight: "15px" }}>
                  Cancelar
                </Button>
                <Button className="primary">Guardar</Button>
              </Col>
            </Row>
          </Row>
        </TabPane>
        <TabPane className="tabPane" tab="Puesto" key="2">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="info">
            <Col style={{ textAlign: "left" }} className="gutter-row" span={6}>
              <span>
                <b>Lista de puestos en Mi empresa</b>
              </span>
              <br />
              <span className="iconGreen">(Total 2 puestos)</span>
            </Col>
            <Col
              style={{ textAlign: "center" }}
              className="gutter-row"
              span={18}
            >
              <Link to="/areasypuestos-masivap">
                <Button
                  className="third"
                  style={{ textAlign: "left", marginRight: "20px" }}
                  icon={<ImArrowUp className="iconAjust2" />}
                >
                  {" "}
                  <span className="textAjust2">Carga masiva</span>
                </Button>
              </Link>
              <Button
                className="btnBlue third"
                style={{ textAlign: "left", marginRight: "20px" }}
                onClick={openModalDownload}
                size="default"
              >
                {" "}
                <IoMdCloudDownload className="iconAjust" />{" "}
                <span className="textAjust">Descargar archivo</span>{" "}
              </Button>
              <Input
                style={{ width: "250px" }}
                addonAfter={<SearchOutlined />}
                placeholder="Buscar puesto"
              />
            </Col>

            <Row className="info2 dividerBottomFull">
              <Col span={8}>Nombre del puesto</Col>
              <Col span={4}>Información Básica</Col>
              <Col span={4}>Perfilamiento</Col>
              <Col span={4}>Habilidades</Col>
              <Col span={4}>Acciones</Col>
            </Row>
            <Row
              className="info3Full tagThreeFull"
              style={{ marginTop: "10px" }}
            >
              <Col
                className="gutter-row"
                style={{ textAlign: "left" }}
                span={8}
              >
                <IoMdSquare
                  className="iconGreen"
                  style={{ marginLeft: "10px", marginTop: "3px" }}
                />{" "}
                <span>CEO</span>{" "}
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineCheckCircle />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col
                className="gutter-row iconGray"
                span={4}
                style={{ marginTop: "3px" }}
              >
                <Link to="/areasypuestos-addjob" className="iconGray">
                  <RiPencilFill style={{ marginRight: "10px" }} />
                </Link>
                <IoMdTrash
                  onClick={deleteColaboradores}
                  style={{ marginRight: "5px" }}
                />
              </Col>
            </Row>

            <Row className="info3Full tagThreeFull">
              <Col
                className="gutter-row"
                style={{ textAlign: "left" }}
                span={8}
              >
                <IoMdSquare
                  className="iconGreen"
                  style={{ marginLeft: "10px", marginTop: "3px" }}
                />{" "}
                <span>Director General (2)</span>{" "}
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineCheckCircle />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col
                className="gutter-row iconGray"
                span={4}
                style={{ marginTop: "3px" }}
              >
                <Link to="/areasypuestos-addjob" className="iconGray">
                  <RiPencilFill style={{ marginRight: "10px" }} />
                </Link>
                <IoMdTrash
                  onClick={deleteColaboradores}
                  style={{ marginRight: "5px" }}
                />
              </Col>
            </Row>

            <Row className="info3Full tagThreeFull">
              <Col
                className="gutter-row"
                style={{ textAlign: "left" }}
                span={8}
              >
                <IoMdSquare
                  className="iconGreen"
                  style={{ marginLeft: "10px", marginTop: "3px" }}
                />{" "}
                <span>Asistente Ejecutivo (3)</span>{" "}
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineCheckCircle />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col
                className="gutter-row iconGray"
                span={4}
                style={{ marginTop: "3px" }}
              >
                <Link to="/areasypuestos-addjob" className="iconGray">
                  <RiPencilFill style={{ marginRight: "10px" }} />
                </Link>
                <IoMdTrash
                  onClick={deleteColaboradores}
                  style={{ marginRight: "5px" }}
                />
              </Col>
            </Row>

            <Row className="info3Full tagThreeFull">
              <Col
                className="gutter-row"
                style={{ textAlign: "left" }}
                span={8}
              >
                <IoMdSquare
                  className="iconGreen"
                  style={{ marginLeft: "10px", marginTop: "3px" }}
                />{" "}
                <span>Director de Finanzas</span>{" "}
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineCheckCircle />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col
                className="gutter-row iconGray"
                span={4}
                style={{ marginTop: "3px" }}
              >
                <Link to="/areasypuestos-addjob" className="iconGray">
                  <RiPencilFill style={{ marginRight: "10px" }} />
                </Link>
                <IoMdTrash
                  onClick={deleteColaboradores}
                  style={{ marginRight: "5px" }}
                />
              </Col>
            </Row>

            <Row className="info3Full tagThreeFull">
              <Col
                className="gutter-row"
                style={{ textAlign: "left" }}
                span={8}
              >
                <IoMdSquare
                  className="iconGreen"
                  style={{ marginLeft: "10px", marginTop: "3px" }}
                />{" "}
                <span>CEO</span>{" "}
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineCheckCircle />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col
                className="gutter-row iconGray"
                span={4}
                style={{ marginTop: "3px" }}
              >
                <Link to="/areasypuestos-addjob" className="iconGray">
                  <RiPencilFill style={{ marginRight: "10px" }} />
                </Link>
                <IoMdTrash
                  onClick={deleteColaboradores}
                  style={{ marginRight: "5px" }}
                />
              </Col>
            </Row>

            <Row id="showJob" style={{ display: "none" }} className="info">
              <Col
                span={8}
                style={{
                  textAlign: "right",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
              >
                <Input placeholder="Ej. Agrega nombre de puesto" />
              </Col>
              <Col span={2} style={{ textAlign: "left", marginRight: "16px" }}>
                <Button onClick={cancelJob} className="secondary">
                  Cancelar
                </Button>
              </Col>
              <Col span={2} style={{ textAlign: "left" }}>
                <Button onClick={saveJob} className="primary">
                  Guardar
                </Button>
              </Col>
              <Col span={10}></Col>
            </Row>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="info">
              <Col
                className="gutter-row"
                span={24}
                style={{ textAlign: "left", marginLeft: "20px" }}
              >
                <Link to="#" onClick={addJob}>
                  <PlusCircleOutlined /> Agregar nueva área
                </Link>
              </Col>
            </Row>
            <div style={{ height: "470px" }}></div>
          </Row>
        </TabPane>
      </Tabs>

      <Screendefault>
        <div id="deleteMessage">
          <Row>
            <Col span={24}>
              <p style={{ textAlign: "center" }}>
                <img alt="ico" className="" src={Outline} />
              </p>
            </Col>
            <Col span={24}>
              <h3>Archivo descargado</h3>
              <br />
            </Col>
            <Col span={24}>
              <Button onClick={closeGood} className="primary btn">
                Hecho
              </Button>
            </Col>
          </Row>
        </div>
      </Screendefault>

      <Modal
        title="¿Qué deseas hacer con los colaboradores que pertenecen a esta área?"
        className="modalCuztom"
        visible={modalDelete}
        onCancel={closeModalDelete}
        onOk={sendDelete}
        footer={[
          <Button
            style={{ width: "180px" }}
            onClick={openModalPassword}
            className="secondary"
          >
            Dar de baja{" "}
          </Button>,
          <Button
            style={{ width: "180px" }}
            onClick={openModalMove}
            className="primary"
          >
            Mover a otra área
          </Button>,
        ]}
      >
        <Row>
          <Col span={12}>
            <Row>
              <Col span={7}>
                <p>
                  <img alt="ico" width="50" src={Avatar} />
                </p>
              </Col>
              <Col span={15}>
                <span>
                  <b>Laura Mendoza</b>
                </span>
                <br />
                <span>Programador JR</span>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <p>
                  <img alt="ico" width="50" src={Avatar} />
                </p>
              </Col>
              <Col span={15}>
                <span>
                  <b>Laura Mendoza</b>
                </span>
                <br />
                <span>Programador JR</span>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <p>
                  <img alt="ico" width="50" src={Avatar} />
                </p>
              </Col>
              <Col span={15}>
                <span>
                  <b>Laura Mendoza</b>
                </span>
                <br />
                <span>Programador JR</span>
              </Col>
            </Row>
            <br />
          </Col>
          <Col span={12}></Col>
        </Row>
      </Modal>

      <Modal
        title="Editar competencias institucionales"
        visible={modalPassword}
        onCancel={closeModalPassword}
        onOk={sendPassword}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={closeModalPassword}
          >
            Cancelar
          </Button>,
          <input
            type="button"
            className="primary"
            onClick={closeModalPassword}
            value="Ingresar"
          />,
        ]}
      >
        <p>
          Al editar las competencias institucionales se verá reflejado en todos
          los colaboradores de tu empresa.
        </p>
        <br />
        <Form layout="vertical">
          <Form.Item name="password" label="Ingresa tu contraseña de usuario">
            <Input type="text" id="nombre" placeholder="Ej. Ghkcclsd23" />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Selecciona el área al que los deseas mover"
        visible={modalMove}
        onCancel={closeModalMove}
        onOk={sendMove}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={closeModalMove}
          >
            Cancelar
          </Button>,
          <input
            type="button"
            className="primary"
            onClick={closeModalMove}
            value="Mover"
          />,
        ]}
      >
        <Form layout="vertical">
          <Form.Item name="password" label="">
            <AutoComplete
              className="autoComplete"
              options={options}
              placeholder="Buscar área"
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
            />
          </Form.Item>
        </Form>
        <Row>
          <Col className="tagThree" span={24} style={{ textAlign: "left" }}>
            <IoMdSquare className="iconGreen" /> Dirección de Finanzas
          </Col>
        </Row>
      </Modal>

      <Modal
        className="middleModal"
        title="Descarga el archivo"
        visible={modalDownload}
        onCancel={closeModalDownload}
        onOk={sendDownload}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={closeModalDownload}
          >
            Cancelar
          </Button>,
          <input
            type="button"
            className="primary"
            onClick={ready}
            value="Descargar"
          />,
        ]}
      >
        <Row>
          <Col span={12}>
            <h3>Archivo</h3>
          </Col>
          <Col span={12}>
            <h3>Fecha de creación</h3>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col span={3} style={{ textAlign: "right", marginTop: "-15px" }}>
            <AiOutlineFileText
              style={{ fontSize: "40px" }}
              className="iconGreen"
            />
          </Col>
          <Col span={10}>
            <span>organigram2018.csv</span>
          </Col>
          <Col span={11}>10-julio-2021</Col>
        </Row>
      </Modal>
    </>
  );
}
