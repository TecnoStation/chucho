import React, { useState } from "react";
import {
  Form,
  Tabs,
  Input,
  Select,
  Col,
  Row,
  Button,
  Modal,
  Slider,
  InputNumber,
} from "antd";
import {
  EnvironmentOutlined,
  PlusCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Sucursales from "../../components/Sucursales/Sucursales";
import Screendefault from "../../components/Screens/Screendefault";
import Competencias from "../../components/Competencias/Competencias";
import Warning from "../../assets/img/iconos/atencion.svg";
import Avatar from "../../assets/img/avatar.png";
import Bien from "../../assets/img/iconos/bien_hecho.svg";
import "./MiempresaEdit.scss";
import Modalcompetencias from "../../components/Modalcompetencias/Modalcompetencias";
import Slidercompetencias from "../../components/Slider/Slidercompetencias";

const { TextArea } = Input;
const { Option } = Select;

const sucursales = [];
const competencias = [];

export default function MiempresaEdit() {
  const { TabPane } = Tabs;

  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const [modalCrop, setModalCrop] = useState(false);
  const closeModalCrop = () => {
    setModalCrop(false);
  };

  const [slider, setSlide] = useState(50);

  const [modalComp, setModalComp] = useState(false);
  const openModalComp = () => {
    setSlide(50);
    setAction(2);
    document.getElementById("edit").setAttribute("style", "display: none");
    document.getElementById("save").setAttribute("style", "display: ;");
    setModalComp(true);
  };

  const [modalPassword, setModalPassword] = useState(false);
  const closeModalPassword = () => {
    setModalPassword(false);
  };

  const [Item, setItem] = useState(false);

  const [Competencia, setCompetencia] = useState(false);
  const sendComp = () => {
    alert("ok");
    setModalComp(false);
  };
  const closeModalComp = () => {
    setModalComp(false);
  };
  const cefective = (competencia, e) => {
    setCompetencia(competencia);
    document.getElementById("titulo").innerHTML = competencia;
    let deleteMessage = document.getElementById("deleteMessage");
    deleteMessage.setAttribute("style", "display: none;");
    let next = document.getElementById("next");
    next.setAttribute("style", "display: none;");
    let cefective = document.getElementById("cefective");
    cefective.setAttribute("style", "display: flex;");
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: flex;");
  };

  const [editDataV, seteditDataV] = useState("button");
  const [deleteDataV, setdeleteDataV] = useState("hidden");
  const [action, setAction] = useState(false);

  const openModalPassword = (Item, action, data, e) => {
    setAction(action);
    if (action === 1) {
      setItem(Item);
      setSlide(data.nivel * 25);
      setCompetencia(data.competencia);
      seteditDataV("button");
      setdeleteDataV("hidden");
      setModalPassword(true);
    } else {
      setItem(Item);
      seteditDataV("hidden");
      setdeleteDataV("button");
      setModalPassword(true);
    }
  };

  const deleteItem = () => {
    document.getElementById("competencia" + Item).remove();
    let deleteMessage = document.getElementById("deleteMessage");
    deleteMessage.setAttribute("style", "display: none;");
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
  };

  const warning = () => {
    setModalPassword(false);
    let deleteMessage = document.getElementById("deleteMessage");
    deleteMessage.setAttribute("style", "display: flex;");
    let next = document.getElementById("next");
    next.setAttribute("style", "display: none;");
    let cefective = document.getElementById("cefective");
    cefective.setAttribute("style", "display: none;");
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: flex;");
  };

  const sendPassword = () => {
    document.getElementById("save").setAttribute("style", "display: none;");
    document.getElementById("edit").setAttribute("style", "display: ");
    setModalPassword(false);
    setModalComp(true);
  };

  const editInfo = () => {
    competencias[Item].competencia = Competencia;
    competencias[Item].nivel = slider / 25;
    document.getElementById("nomCompe" + Item).innerHTML = Competencia;
    document.getElementById("nivel" + Item).innerHTML = slider / 25;
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
    setModalComp(false);
  };

  const sendSucursal = () => {
    let nombreSucursal = document.getElementById("nombre").value;
    let direccionSucursal = document.getElementById("direccion").value;
    sucursales.push({ nombre: nombreSucursal, direccion: direccionSucursal });
    setModal(false);
  };

  const sendCrop = () => {
    alert("ok");
    setModalCrop(false);
  };

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

  const tabs = ["1", "2"];
  const [Active, setActive] = useState(tabs[0]);

  const closeInfo = () => {
    if (action !== 0) {
      competencias.push({ competencia: Competencia, nivel: slider / 25 });
    }
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
    setModalComp(false);
  };

  const changeActive = () => {
    if (Active === "1") {
      setActive(tabs[1]);
    } else {
      setActive(tabs[0]);
    }
  };

  const marks = {
    0: "0",
    25: "1",
    50: "2",
    75: "3",
    100: "4",
  };

  const closecefective = () => {
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
    let next = document.getElementById("next");
    next.setAttribute("style", "display: flex;");
    let cefective = document.getElementById("cefective");
    cefective.setAttribute("style", "display: none;");
  };

  const onChange = (inputValue) => {
    document.getElementById("nivel").value = inputValue / 25;
    setSlide(inputValue);
  };

  const onChangeInput = (inputValue) => {
    setSlide(inputValue * 25);
  };

  return (
    <>
      <Tabs
        className="tab"
        activeKey={Active}
        onChange={changeActive}
        type="card"
      >
        <TabPane className="tabPane" tab="Información" key="1">
          <div className="info">
            <Modal
              title="Sube tu foto de perfil"
              visible={modalCrop}
              onCancel={closeModalCrop}
              onOk={sendCrop}
            >
              <h1>Áera en construción</h1>
            </Modal>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span={12}>
                <h2 style={{ textAlign: "left" }}>Información de Mi empresa</h2>
                <Form Formname="form1" layout="vertical">
                  <p>
                    <img alt="ico" width="140" src={Avatar} />
                  </p>

                  <div className="formWork">
                    <Form.Item name="bussines" label="Nombre de Mi empresa">
                      <Input type="text" placeholder="Nombre" />
                    </Form.Item>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                      <Col className="gutter-row" span={12}>
                        <Form.Item
                          name="activity"
                          label="Actividad de la empresa"
                          tooltip={info}
                        >
                          <Select placeholder="Selecciona una opción">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col className="gutter-row" span={12}>
                        <Form.Item
                          name="subactivity"
                          label="Subactividad de la empresa"
                          tooltip={infosub}
                        >
                          <Select placeholder="Selecciona una opción">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                      <Col className="gutter-row" span={12}>
                        <Form.Item name="size" label="Tamaño de la empresa">
                          <Select placeholder="Selecciona una opción">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span={12}>
                        <Form.Item name="from" label="Pais">
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
                    <Form.Item name="site" label="Sitio web">
                      <Input type="text" placeholder="Nombre" />
                    </Form.Item>
                    <Form.Item
                      name="officesName"
                      label="Nombre de las oficinas centrales"
                    >
                      <Input type="text" placeholder="Nombre" />
                    </Form.Item>
                    <Form.Item
                      name="officesfrom"
                      label="Dirección de las oficinas centrales"
                    >
                      <Input addonAfter={<EnvironmentOutlined />} />
                    </Form.Item>
                  </div>
                </Form>
              </Col>
              <Col className="gutter-row dividerLeft" span={12}>
                <h2 style={{ textAlign: "left" }}>Agregar sucursal</h2>
                <br />
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={12}>
                    <Form name="form" layout="vertical">
                      <Form.Item name="empresa">
                        <Input addonAfter={<SearchOutlined />} />
                      </Form.Item>
                    </Form>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <Link to="#" onClick={openModal}>
                      {" "}
                      <PlusCircleOutlined className="iconGreen" /> Agregar
                      sucursal
                    </Link>
                  </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={12}>
                    <span>Sucursales Agregadas</span>
                  </Col>
                  <Col
                    className="gutter-row"
                    style={{ textAlign: "left" }}
                    span={12}
                  >
                    <span>Dirección</span>
                  </Col>
                  <div className="divider">
                    <div className="dividerBottom"></div>
                  </div>
                </Row>
                <div id="sucursales" className="sucursales">
                  <Sucursales data={sucursales} />
                </div>
                <Modal
                  title="Agregar sucursal"
                  className="middleModal"
                  visible={modal}
                  onCancel={closeModal}
                  onOk={sendSucursal}
                  footer={[
                    <Button onClick={closeModal} className="secondary">
                      Cancelar
                    </Button>,
                    <Button onClick={sendSucursal} className="primary">
                      Guardar
                    </Button>,
                  ]}
                >
                  <Form layout="vertical">
                    <Form.Item name="empresa" label="Nombre de la sucursal">
                      <Input
                        type="text"
                        id="nombre"
                        placeholder="Agrega un nombre descriptivo para está sucursal"
                      />
                    </Form.Item>
                    <Form.Item
                      name="direccion"
                      label="Dirección de la sucursal"
                    >
                      <Input
                        addonAfter={<EnvironmentOutlined />}
                        id="direccion"
                        placeholder="Agrega la dirección de la sucursal"
                      />
                    </Form.Item>
                  </Form>
                </Modal>
              </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                style={{ textAlign: "right" }}
                className="gutter-row"
                span={24}
              >
                <Link to="/miempresa">
                  <Button className="secondary" style={{ marginRight: "15px" }}>
                    Cancelar
                  </Button>
                </Link>
                <Link to="/miempresa">
                  <Button className="primary">Guardar</Button>
                </Link>
              </Col>
              <br />
            </Row>
          </div>
        </TabPane>
        <TabPane className="tabPane" tab="Cultura" key="2">
          <div className="info">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={12}>
                <h2 style={{ textAlign: "left" }}>Cultura Mi empresa</h2>
                <br />
                <Form name="form" layout="vertical">
                  <div className="formWork">
                    <Form.Item
                      name="propose"
                      label="Proposito / mision"
                      tooltip={info}
                    >
                      <TextArea
                        placeholder="Ej. “Organizar la información del mundo y hacerla universalmente accesible y útil.” - Google (1000 caracteres)"
                        rows={6}
                      />
                    </Form.Item>
                    <Form.Item name="vision" label="Visión" tooltip={info}>
                      <TextArea
                        placeholder="Ej. “Ej. “Ser el motor de búsqueda más importante del mundo” - Google (1000 caracteres)"
                        rows={6}
                      />
                    </Form.Item>
                    <Form.Item
                      name="bussinesDescriptions"
                      label="Descripción de la empresa"
                      tooltip={info}
                    >
                      <TextArea
                        placeholder="Ej. “Ser el motor de búsqueda más importante del mundo” -Google (1000 caracteres)"
                        rows={6}
                      />
                    </Form.Item>
                  </div>
                </Form>
              </Col>
              <Col className="gutter-row dividerLeft" span={12}>
                <h2 style={{ textAlign: "left" }}>
                  Competencias institucionales
                </h2>
                <br />
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={10}>
                    <Link to="#" onClick={openModalComp}>
                      {" "}
                      <PlusCircleOutlined /> Agregar competencia
                    </Link>
                  </Col>
                </Row>

                <Modalcompetencias
                  modalComp={modalComp}
                  sendComp={sendComp}
                  closeModalComp={closeModalComp}
                  cefective={cefective}
                />

                <br />
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={10}>
                    <span>Competencias agregadas</span>
                  </Col>
                  <Col
                    className="gutter-row"
                    style={{ textAlign: "center" }}
                    span={10}
                  >
                    <span>Nivel</span>
                  </Col>
                  <div className="divider">
                    <div className="dividerBottom"></div>
                  </div>
                </Row>
                <div id="Competencias" className="Competencias">
                  <Competencias
                    myonClick={openModalPassword}
                    data={competencias}
                  />
                </div>
              </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                style={{ textAlign: "right" }}
                className="gutter-row"
                span={24}
              >
                <Button className="secondary" style={{ marginRight: "15px" }}>
                  Cancelar
                </Button>
                <Link to="/miempresa">
                  <Button className="primary">Guardar</Button>
                </Link>
              </Col>
              <br />
            </Row>
          </div>
        </TabPane>
      </Tabs>

      <Screendefault>
        <div id="deleteMessage">
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

        <Slidercompetencias
          Competencia={Competencia}
          slider={slider}
          onChangeInput={onChangeInput}
          marks={marks}
          onChange={onChange}
          closecefective={closecefective}
          closeInfo={closeInfo}
          editInfo={editInfo}
        />

        <div id="next" style={{ display: "none" }}>
          <p>
            <img alt="ico" width="140" src={Bien} />
          </p>
          <h3>¡Bien hecho!</h3>
          <h3>Ahora necesitamos conocer la cultura de tu empresa</h3>
          <br />
          <p>
            El papel de la cultura organizacional es esencial, pues constituye
            un motor que permite a la organización caminar hacia un mismo lugar,
            ya que determina las acciones y actitudes que deben tomarse en
            consideración para lograr los objetivos.
          </p>
          <br />
          <Button onClick={closeInfo} className="primary btn">
            Continuar
          </Button>
        </div>

        <div className="cefective" id="cefective" style={{ display: "none" }}>
          <Row>
            <Col
              style={{ textAlign: "left" }}
              className="dividerBottom"
              span={24}
            >
              <h4 id="titulo">{Competencia}</h4>
            </Col>
            <Col style={{ textAlign: "left" }} span={24}>
              <br />
              <p>
                Los colaboradores que tienen un alto dominio de esta
                competencia, por lo general tienen la capacidad de:
              </p>
            </Col>
            <Col style={{ textAlign: "left" }} span={24}>
              <ul>
                <li>Escuchar y dispuesto a hacerlo.</li>
                <li>Entiende los mensajes verbales.</li>
                <li>Comprende los aspectos no verbales de la comunicación.</li>
                <li>Expresa sus ideas con claridad y coherencia.</li>
                <li>Genera el impacto deseado en sus interlocutores.</li>
              </ul>
            </Col>
            <Col span={24} style={{ textAlign: "left" }}>
              Aquí puedes consultar el significado de cada nivel
            </Col>
            <Col span={24}>
              <br />
              <span>
                <b>Dominio de competencia</b>
              </span>
              <br />
              <InputNumber
                id="nivel"
                className="tag-cefective"
                min={0}
                max={4}
                value={slider / 25}
                onChange={onChangeInput}
              />
              <input type="hidden" id="competencia" value=""></input>
              <span style={{ display: "none" }} id="idcompe"></span>
              <br />
              <span>
                Competente: <b>2.6 - 3.4</b>
              </span>
            </Col>
            <Col span={4}></Col>
            <Col span={16} id="colSlider">
              <Slider
                id="Slider"
                marks={marks}
                onChange={onChange}
                step={null}
                value={slider}
                defaultValue={slider}
              />
            </Col>
            <Col span={4}></Col>
            <Col span={24} style={{ textAlign: "right" }}>
              <br />
              <Button
                onClick={closecefective}
                className="secondary"
                style={{ marginRight: "15px" }}
              >
                Cancelar
              </Button>
              <Button id="save" onClick={closeInfo} className="primary">
                Guardar
              </Button>
              <Button
                id="edit"
                style={{ display: "none" }}
                onClick={editInfo}
                className="primary"
              >
                Editar
              </Button>
            </Col>
          </Row>
        </div>

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
              type={editDataV}
              onClick={sendPassword}
              className="primary"
              value="Ingresar"
            />,
            <input
              type={deleteDataV}
              onClick={warning}
              className="primary"
              value="Ingresar"
            />,
          ]}
        >
          <p>
            Al editar las competencias institucionales se verá reflejado en
            todos los colaboradores de tu empresa.
          </p>
          <br />
          <Form layout="vertical">
            <Form.Item name="password" label="Ingresa tu contraseña de usuario">
              <Input type="text" id="nombre" placeholder="Ej. Ghkcclsd23" />
            </Form.Item>
          </Form>
        </Modal>
      </Screendefault>
    </>
  );
}
