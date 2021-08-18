import React, { useState } from "react";
import {
  Col,
  Dropdown,
  Input,
  Menu,
  Row,
  Form,
  Select,
  Button,
  Tag,
  Modal,
  Checkbox,
} from "antd";
import More from "../../assets/img/icons/more_vert-24px.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import { RiPencilFill } from "react-icons/ri";
import { PlusCircleOutlined } from "@ant-design/icons";
import Modalcompetencies from "../../components/Modals/Modalcompetencies/Modalcompetencies";
import Screendefault from "../../components/Screens/Screendefault";
import Slidercompetencies from "../../components/Slider/Slidercompetencies";
import { IoMdSquare } from "react-icons/io";
import Avatar from "../../assets/img/avatar.png";
import Warning from "../../assets/img/icons/atencion.svg";
import Treearea from "../../components/Tree/Treearea";

const { Option } = Select;

export default function AreasAndPositionsAddJob() {
  const treeData = [
    {
      title: "CEO",
      key: "1",
      icon: <IoMdSquare />,
      children: [
        {
          title: "Director General A",
          key: "0-1",
          icon: <IoMdSquare />,
        },
        {
          title: "Director General B",
          key: "0-2",
          icon: <IoMdSquare />,
        },
      ],
    },
  ];

  const treeData2 = [
    {
      title: "CEO",
      key: "1",
      icon: <IoMdSquare />,
      children: [
        {
          title: "Gerente Ventas",
          key: "0-1",
          icon: <IoMdSquare />,
          children: [
            {
              title: "Sub Gerente Ventas",
              key: "0-1-0",
              icon: <IoMdSquare />,
            },
            {
              title: "Sub Gerente de marketing",
              key: "0-1-1",
              icon: <IoMdSquare />,
            },
          ],
        },
        {
          title: "Director General B",
          key: "0-2",
          icon: <IoMdSquare />,
        },
      ],
    },
  ];

  const [slider, setSlide] = useState(50);
  const [action, setAction] = useState(false);
  const [modalComp, setModalComp] = useState(false);
  const [Competence, setCompetence] = useState(false);
  const [Item, setItem] = useState(false);
  const [Permissions, setPermissions] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const competencies = [];

  const openModalComp = () => {
    setSlide(50);
    setAction(2);
    setModalComp(true);
  };

  const sendComp = () => {
    alert("ok");
    setModalComp(false);
  };
  const closeModalComp = () => {
    setModalComp(false);
  };

  const cefective = (competence, e) => {
    setCompetence(competence);
    document.getElementById("titulo").innerHTML = competence;
    let deleteMessage = document.getElementById("deleteMessage");
    deleteMessage.setAttribute("style", "display: none;");
    let slide = document.getElementById("slide");
    slide.setAttribute("style", "display: flex;");
    let cefective = document.getElementById("cefective");
    cefective.setAttribute("style", "display: flex;");
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: flex;");
  };

  const onChangeInput = (inputValue) => {
    setSlide(inputValue * 25);
  };

  const onChange = (inputValue) => {
    document.getElementById("nivel").value = inputValue / 25;
    setSlide(inputValue);
  };

  const closecefective = () => {
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
    let cefective = document.getElementById("cefective");
    cefective.setAttribute("style", "display: none;");
  };

  const closeInfo = () => {
    if (action !== 0) {
      competencies.push({ competence: Competence, nivel: slider / 25 });
    }
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
    setModalComp(false);
  };

  const editInfo = () => {
    competencies[Item].competence = Competence;
    competencies[Item].nivel = slider / 25;
    document.getElementById("nomCompe" + Item).innerHTML = Competence;
    document.getElementById("nivel" + Item).innerHTML = slider / 25;
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
    setModalComp(false);
  };

  const marks = {
    0: "0",
    25: "1",
    50: "2",
    75: "3",
    100: "4",
  };

  const closeModalPermissions = () => {
    setPermissions(false);
  };

  const sendPermissions = () => {
    alert("permisos enviados");
  };

  const addPermissions = () => {
    setPermissions(true);
  };

  const [modalPassword, setModalPassword] = useState(false);
  const closeModalPassword = () => {
    setModalPassword(false);
  };
  const openModalPassword = () => {
    setModalPassword(true);
  };

  const sendPassword = () => {
    let slide = document.getElementById("slide");
    slide.setAttribute("style", "display: none;");
    let deleteMessage = document.getElementById("deleteMessage");
    deleteMessage.setAttribute("style", "display: flex;");
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: flex;");
    setModalPassword(false);
  };

  const deleteItem = () => {
    let deleteMessage = document.getElementById("deleteMessage");
    deleteMessage.setAttribute("style", "display: none;");
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
    setModalPassword(false);
    query.set("tab", 2);
    history.push({ pathname: "/areasandpositions", search: "?tab=2" });
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link to="#" onClick={addPermissions}>
            Agregar permisos
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link to="#" onClick={openModalPassword}>
            Eliminar puesto
          </Link>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );

  const info = () => {
    return (
      <>
        <span>
          <b>Actividad de la empresa:</b>
        </span>
        <br />
        <span>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500
        </span>
      </>
    );
  };

  const infosub = () => {
    return (
      <>
        <span>
          <b>Subactividad de la empresa:</b>
        </span>
        <br />
        <span>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500
        </span>
      </>
    );
  };

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={14}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={22}
              style={{ textAlign: "left", marginBottom: "30px" }}
            >
              <h3>
                <b>Director Generals</b>
              </h3>
              <span>Completa la información del puesto</span>
            </Col>
            <Col className="gutter-row" span={2}>
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
          <Form Formname="form1" layout="vertical">
            <div className="formWork">
              <Form.Item name="bussines" label="Nombre del puesto*">
                <Input type="text" placeholder="Ej.Director General" />
              </Form.Item>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                  <Form.Item
                    name="activity"
                    label="Nivel del puesto*"
                    tooltip={info}
                  >
                    <Select placeholder="Ej.Dirección">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={12}>
                  <Form.Item
                    name="subactivity"
                    label="Nivel de puesto personalizado*"
                    tooltip={infosub}
                  >
                    <Select placeholder="Ej. Dirección">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                  <Form.Item name="size" label="Tipo de puesto*">
                    <Select placeholder="Ej. Puesto clave">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span={12}>
                  <Form.Item name="from" label="Nivel de riesgo*">
                    <Select className="gutter-row" placeholder="Ej. Alto">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span={12}>
                  <Form.Item name="from" label="Nivel de Estudios*">
                    <Select
                      className="gutter-row"
                      placeholder="Ej. Educación superior"
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span={12}>
                  <Form.Item name="from" label="Años de experiencia*">
                    <Select
                      className="gutter-row"
                      placeholder="Selecciona una opción"
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </div>

            <Form Formname="form1" layout="vertical">
              <Row style={{ marginTop: "20px" }}>
                <Col span={24}>
                  <span>
                    <b>Habilidades para el puesto</b>
                  </span>
                  <br />
                  <br />
                </Col>
              </Row>

              <Row style={{ marginBottom: "10px" }}>
                <Col span={24}>
                  <Tag className="TagArea" closable>
                    QuickBooks
                  </Tag>{" "}
                  <Tag className="TagArea" closable>
                    Suite Office
                  </Tag>
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <Form.Item name="habilidades" label="Habilidades técnicas">
                    <Input
                      type="text"
                      id="habilidades"
                      placeholder="Ej. Microsoft word"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <span>
                    <b>Idiomas</b>
                  </span>
                  <br />
                  <br />
                </Col>
              </Row>
            </Form>

            <Row style={{ marginBottom: "10px" }}>
              <Col span={24}>
                <Tag className="TagArea" closable>
                  Ingles avanzado
                </Tag>{" "}
                <Tag className="TagArea" closable>
                  Frances
                </Tag>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Form.Item name="idiomas" label="Idiomas">
                  <Input
                    type="text"
                    id="idiomas"
                    placeholder="Ej. Ingles avanzado"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>

          <Row className="dividerBottomFull">
            <Col span={10}>
              <b>Competencias institucionales</b>
            </Col>
            <Col style={{ textAlign: "center" }} span={14}>
              <b>Nivel</b>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col span={17}>
              <b>Creatividad</b>
            </Col>
            <Col span={5}>3</Col>
            <Col span={2}></Col>
          </Row>

          <Row className="tagTwo" style={{ marginTop: "10px" }}>
            <Col span={17}>
              <b>Solución de Problemas - Desarrolla Alternativas</b>
            </Col>
            <Col span={5}>3</Col>
            <Col span={2}>
              <RiPencilFill style={{ marginRight: "10px", marginTop: "7px" }} />
            </Col>
          </Row>

          <Row className="dividerBottomFull" style={{ marginTop: "20px" }}>
            <Col span={16}>
              <b>Competencias institucionales</b>
            </Col>
            <Col span={8}>
              <Link to="#" onClick={openModalComp}>
                {" "}
                <PlusCircleOutlined /> Agregar competencias
              </Link>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col span={17}>
              <b>Actitud de servicio</b>{" "}
            </Col>
            <Col span={5}>3</Col>
            <Col span={2}></Col>
          </Row>

          <Row className="tagTwo" style={{ marginTop: "10px" }}>
            <Col span={17}>
              <b>Apego a normas</b>
            </Col>
            <Col span={5}>3</Col>
            <Col span={2}>
              <RiPencilFill style={{ marginRight: "10px", marginTop: "7px" }} />
            </Col>
          </Row>

          <Row className="dividerBottomFull" style={{ marginTop: "20px" }}>
            <Col span={16}>
              <b>Competencias del puesto</b>
            </Col>
            <Col span={8}>
              <Link to="#" onClick={openModalComp}>
                {" "}
                <PlusCircleOutlined /> Agregar competencias
              </Link>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col span={17}>
              <b>Competencias del puesto</b>{" "}
            </Col>
            <Col span={5}>3</Col>
            <Col span={2}></Col>
          </Row>

          <Row className="tagTwo" style={{ marginTop: "10px" }}>
            <Col span={17}>
              <b>Competencias del puesto</b>
            </Col>
            <Col span={5}>3</Col>
            <Col span={2}>
              <RiPencilFill style={{ marginRight: "10px", marginTop: "7px" }} />
            </Col>
          </Row>

          <Row style={{ marginTop: "30px" }}>
            <Col style={{ textAlign: "center" }} span={14}>
              <b>Los campos con * son obligatorios</b>
            </Col>
            <Col span={5}>
              <Link to="/organigrama/areasandpositions-collaborator">
                <Button className="secondary">Cancelar</Button>
              </Link>
            </Col>
            <Col span={5}>
              <Link to="/organigrama/areasandpositions-collaborator">
                <Button className="primary">Guardar</Button>
              </Link>
            </Col>
          </Row>
        </Col>

        <Col className="gutter-row dividerLeft" span={10}>
          <Row>
            <Col span={24}>
              <h3>Areas en las que participa el puesto</h3>
            </Col>
          </Row>
          <Row>
            <Col className="dividerBottom divScrool" span={24}>
              <Treearea treeData={treeData} />
              <br />
              <Treearea treeData={treeData2} />
              <br />
              <Treearea treeData={treeData} />
              <br />
              <Treearea treeData={treeData2} />
              <br />
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col span={24}>
              <p>
                <b>Colaboradores asignados al puesto de Director General</b>
              </p>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <p>
                <img alt="ico" width="50" src={Avatar} />
              </p>
            </Col>
            <Col span={21}>
              <span>
                <b>Laura Mendoza</b>
              </span>
              <br />
              <span>Director General A</span>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <p>
                <img alt="ico" width="50" src={Avatar} />
              </p>
            </Col>
            <Col span={21}>
              <span>
                <b>Panchita Lopez</b>
              </span>
              <br />
              <span>Director General B</span>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modalcompetencies
        modalComp={modalComp}
        sendComp={sendComp}
        closeModalComp={closeModalComp}
        cefective={cefective}
      />
      <Screendefault>
        <div id="slide">
          <Slidercompetencies
            Competence={Competence}
            slider={slider}
            onChangeInput={onChangeInput}
            marks={marks}
            onChange={onChange}
            closecefective={closecefective}
            closeInfo={closeInfo}
            editInfo={editInfo}
          />
        </div>
        <div id="deleteMessage" style={{ display: "none" }}>
          <Row>
            <Col span={24}>
              <p style={{ textAlign: "center" }}>
                <img alt="ico" className="" src={Warning} />
              </p>
            </Col>
            <Col span={24}>
              <h3>¡Atención!</h3>
            </Col>
            <Col span={24}>
              <h3>Estás a punto de eliminar esta competencia.</h3>
            </Col>
            <Col span={24}>
              <h3>¿Seguro deseas eliminarla?</h3>
              <br />
            </Col>
            <Col span={24}>
              <Button
                style={{ marginRight: "15px" }}
                onClick={closeInfo}
                className="secondary btn"
              >
                Cancelar
              </Button>
              <Button onClick={deleteItem} className="primary btn">
                Eliminar
              </Button>
            </Col>
          </Row>
        </div>
      </Screendefault>

      <Modal
        title="Agregar permisos"
        className="smallModal"
        visible={Permissions}
        onCancel={closeModalPermissions}
        onOk={sendPermissions}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={closeModalPermissions}
          >
            Cancelar
          </Button>,
          <Button className="primary" onClick={closeModalPermissions}>
            Aplicar
          </Button>,
        ]}
      >
        <Form style={{ marginLeft: "10px" }}>
          <Form.Item name="Administrador">
            <Checkbox>Permisos de Administrador</Checkbox>
          </Form.Item>
          <Form.Item name="Nine" style={{ marginTop: "-25px" }}>
            <Checkbox>Permisos para ver Nine Box</Checkbox>
          </Form.Item>
          <Form.Item name="remember" style={{ marginTop: "-25px" }}>
            <Checkbox>Permisos de Edición de Objetivos</Checkbox>
          </Form.Item>
          <Form.Item name="Organigrama" style={{ marginTop: "-25px" }}>
            <Checkbox>Permisos para ver Organigrama</Checkbox>
          </Form.Item>
          <Form.Item name="editar" style={{ marginTop: "-25px" }}>
            <Checkbox>Permisos para editar Organigrama</Checkbox>
          </Form.Item>
          <Form.Item name="Desarrollo" style={{ marginTop: "-25px" }}>
            <Checkbox>Permisos para crear Plan de Desarrollo</Checkbox>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        className="middleModal"
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
            onClick={sendPassword}
            className="primary"
            value="Ingresar"
          />,
        ]}
      >
        <p style={{ textAlign: "left" }}>
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
    </div>
  );
}
