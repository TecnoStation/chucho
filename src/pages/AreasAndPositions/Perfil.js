import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Dropdown,
  Menu,
  Row,
  Tabs,
  Tag,
  Form,
  Modal,
  Input,
  Select,
} from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { Link } from "react-router-dom";
import Avatar from "../../assets/img/avatar.png";
import More from "../../assets/img/icons/more_vert-24px.svg";
import { CgSoftwareUpload } from "react-icons/cg";
import { FiUpload } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { v4 as uuid } from "uuid";
import "./AreasAndPositions.scss";
import ModalPassword from "../../components/Modals/ModalPassword/ModalPassword";
import { useTranslation } from "react-i18next";
import ModalDigitalExpedient from "../../components/Modals/ModalDigitalExpedient/ModalDigitalExpedient";
import ModalPermissions from "../../components/Modals/ModalPermissions/ModalPermissions";
import ModalAddExperience from "../../components/Modals/ModalAddExperience/ModalAddExperience";
import { useStore } from "react-redux";
import ExperienceList from "../../components/Modals/ModalAddExperience/components/ExperienceList/ExperienceList";
import { useForm } from "antd/lib/form/Form";
import ListLevelStudy from "./Components/ListLevelStudy/ListLevelStudy";

const { Option } = Select;

export default function Perfil() {
  const [t, i18n] = useTranslation("global");
  const [flag, setFlag] = useState("gutter-row dividerLeft showBlock");
  const [flag2, setFlag2] = useState("gutter-row dividerLeft hide");
  const [flag3, setFlag3] = useState("gutter-row dividerLeft hide");
  const [flag4, setFlag4] = useState("showBlock");
  const [flag5, setFlag5] = useState("hide");
  const [flag6, setFlag6] = useState("showBlock");
  const [flag7, setFlag7] = useState("hide");
  const [Password, setPassword] = useState(false);

  const { TabPane } = Tabs;

  function callback(key) {
    if (key === "1") {
      setFlag("gutter-row dividerLeft showBlock");

      setFlag2("hide");
      setFlag3("hide");
      setFlag5("hide");
      setFlag4("showBlock");
    } else {
      setFlag("hide");
      setFlag2("gutter-row dividerLeft showBlock");
      setFlag3("hide");
      setFlag5("showBlock");
      setFlag4("hide");
    }
  }

  const editSkills = () => {
    setFlag("hide");
    setFlag2("hide");
    setFlag3("gutter-row dividerLeft showBlock");
    setFlag4("hide");
    setFlag5("showBlock");
  };

  const [adjunts, setAdjunts] = useState(false);
  const closeModalAdjunts = () => {
    setAdjunts(false);
  };
  const sendAdjunts = () => {
    alert("permisos enviados");
  };

  const [upload, setUpload] = useState(false);
  const closeModalUpload = () => {
    setUpload(false);
  };
  const sendUpload = () => {
    alert("permisos enviados");
  };

  const [form] = useForm();
  //------------------ Modals ------------------------------
  const [expedient, setExpedient] = useState(false);
  const [Permissions, setPermissions] = useState(false);
  const [ModalExperience, setModalExperience] = useState(false);
  const [Experiences, setExperiences] = useState([]);

  //------------------ end Modals ------------------------------

  //----------------- Level study ----------------------------
  const [levels, setLevels] = useState([]);
  const [formlevel] = useForm();
  const sendlevelStudy = (values) => {
    setLevels([
      ...levels,
      {
        idLevel: uuid(),
        stydyLevel: values["level"],
        years: values["years"],
      },
    ]);
    console.log(levels);
    formlevel.resetFields();
  };

  //----------------- Level study ----------------------------

  const [HistorialP, setHistorialP] = useState(false);
  const closeModalHistorialP = () => {
    setHistorialP(false);
  };
  const sendHistorialP = () => {
    alert("permisos enviados");
  };

  const [HistorialC, setHistorialC] = useState(false);
  const closeModalHistorialC = () => {
    setHistorialC(false);
  };
  const sendHistorialC = () => {
    alert("permisos enviados");
  };

  // const closeModalExperience = () => {
  //   setFlag("gutter-row dividerLeft showBlock");
  //   setFlag2("gutter-row dividerLeft hide");
  //   setFlag3("gutter-row dividerLeft hide");
  //   setExperience(false);
  // };

  const menu3 = (
    <Menu>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link to="/organigrama/areasandpositions-collaborator">
            Editar colaborador
          </Link>
        </Menu.Item>
      </Menu.Item>

      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link to="/organigrama/areasandpositions-addjob">Editar puesto</Link>
        </Menu.Item>
      </Menu.Item>

      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link to="/organigrama/eraser">Editar estructura</Link>
        </Menu.Item>
      </Menu.Item>

      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link
            onClick={() => {
              setPermissions(true);
            }}
            to="#"
          >
            Agregar permisos
          </Link>
        </Menu.Item>
      </Menu.Item>

      <Menu.Divider />

      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link
            to="#"
            onClick={() => {
              setHistorialC(true);
            }}
          >
            Historial del colaborador
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link
            to="#"
            onClick={() => {
              setHistorialP(true);
            }}
          >
            Historial del puesto
          </Link>
        </Menu.Item>
      </Menu.Item>

      <Menu.Divider />

      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link
            to="#"
            onClick={() => {
              setPassword({
                visible: true,
                titleModal: "Dar de baja a colaborador",
                messageModal:
                  "Al dar de baja a un colaborador de tu organización ya no se verá reflejada en tu organigrama.",
                messageWarning:
                  "Estás a punto de dar de baja al colaborador.[Nombre colaborador]",
                question: "¿Seguro deseas eliminarlo?",
              });
            }}
          >
            Dar de baja Colaborador
          </Link>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );

  const menu2 = (
    <Menu>
      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link to="#" onClick={editSkills}>
            Editar mis habilidades
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link
            to="#"
            // onClick={() => {
            //   setModalExperience(true);
            // }}
          >
            Editar mi experiencia
          </Link>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link
            to="#"
            onClick={() => {
              setExpedient(true);
            }}
          >
            Agregar Archivos
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link
            to="#"
            onClick={() => {
              setHistorialC(true);
            }}
          >
            Historial de puestos
          </Link>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={4}>
              <p>
                <img alt="ico" width="80" src={Avatar} />
              </p>
            </Col>
            <Col className="gutter-row" span={18}>
              <span>Marco Antonio Ramirez Perez</span>
              <br></br>
              <span>Director de Mercadotecnia y Publicidad</span>
              <br></br>
              <span className="iconGreen">mramirez@empresa.org</span>
              <br></br>
            </Col>
            <Col className="gutter-row" span={2}>
              <Dropdown className={flag4} overlay={menu} trigger={["click"]}>
                <Link
                  to="#"
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <img alt="logo" src={More} width="25" height="25" />
                </Link>
              </Dropdown>

              <Dropdown className={flag5} overlay={menu3} trigger={["click"]}>
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

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Información colaborador" key="1">
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12}>
                      <span>Fecha de nacimiento</span>
                      <br></br>
                      <span>
                        <b>29-JUN-1987</b>
                      </span>
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <span>Fecha de ingreso</span>
                      <br></br>
                      <span>
                        <b>01-ENE-2015</b>
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "20px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span>Genero</span>
                      <br></br>
                      <span>
                        <b>Masculino</b>
                      </span>
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <span>Estado Civil</span>
                      <br></br>
                      <span>
                        <b>Soltero</b>
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "20px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span>Nacionalidad</span>
                      <br></br>
                      <span>
                        <b>Mexicana</b>
                      </span>
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <span>Ciudad</span>
                      <br></br>
                      <span>
                        <b>Ciudad de México</b>
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "20px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span>Equipos a los que pertenece</span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "20px", paddingBottom: "10px" }}
                    className="dividerBottomFull"
                  >
                    <Col className="gutter-row" span={12}>
                      <span className="link">Equipo EVOU</span>
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <span>
                        <b>SCRUM Master</b>
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "10px" }}
                  >
                    <Col className="gutter-row" span={11}>
                      <span className="link">Equipo Evaluatest</span>
                    </Col>
                    <Col className="gutter-row" span={13}>
                      <span>
                        <b>Dev Team</b>
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "20px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span>
                        <b>Resultados de procesos</b>
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "8px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span className="link">Evaluación de Desempeño</span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "8px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span className="link">Evaluaciones Psicométricas</span>
                    </Col>
                  </Row>
                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "8px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span className="link">Evaluación 360</span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "8px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span className="link">Planes de Desarrollo</span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "8px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <Link
                        to="#"
                        onClick={() => {
                          setExpedient(true);
                        }}
                      >
                        <span className="link">Expediente digital</span>
                      </Link>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tab="Información puesto" key="2">
                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "10px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span>Nivel del puesto</span>
                      <br></br>
                      <span>
                        <b>Gerente</b>
                      </span>
                    </Col>
                    <Col>
                      <span>Nivel del cargo</span>
                      <br></br>
                      <span>
                        <b>Gerente A</b>
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "10px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span>Tipo de puesto</span>
                      <br></br>
                      <span>
                        <b>Puesto clave</b>
                      </span>
                    </Col>
                    <Col>
                      <span>Nivel de riesgo</span>
                      <br></br>
                      <span>
                        <b>Medio</b>
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "10px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span>Sucursal</span>
                      <br></br>
                      <span>
                        <b>CDMX</b>
                      </span>
                    </Col>
                    <Col>
                      <span>Áera</span>
                      <br></br>
                      <span>
                        <b>Marketing</b>
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "10px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span>Reporta a (Nombre del puesto)</span>
                      <br></br>
                      <span>
                        <b>Dirección General del Corporativo</b>
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "10px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span>Correo electronico a quien reporta</span>
                      <br></br>
                      <span>
                        <b>nombre@empresa.com</b>
                      </span>
                    </Col>
                  </Row>
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Col>
        {
          //---------------------------------flag------------
        }
        <Col className={flag} span={12} style={{ paddingLeft: "30px" }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={22}>
              <h3>Habilidades del colaborador</h3>
            </Col>
            <Col className="gutter-row" span={2}>
              <Dropdown overlay={menu2} trigger={["click"]}>
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
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={12}>
              <span>
                <b>Nivel de Estudios</b>
              </span>
            </Col>
            <Col className="gutter-row" span={12}>
              <span>
                <b>Años</b>
              </span>
            </Col>
          </Row>

          <ListLevelStudy levels={levels} />

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={12}>
              <span>
                <b>Idiomas</b>
              </span>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Ingles-Avanzado</Tag>
            </Col>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Chino-Básico</Tag>
            </Col>
            <Col className="gutter-row" span={8}></Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={12}>
              <span>
                <b>Habilidades técnicas</b>
              </span>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Photoshop - Avanzado</Tag>
            </Col>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Illustrator - Medio</Tag>
            </Col>
            <Col className="gutter-row" span={8}></Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Tweetdeck</Tag>
            </Col>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Hootsuite - Avanzado</Tag>
            </Col>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Microsoft Office </Tag>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Uso de algoritmos</Tag>
            </Col>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Uso de fórmulas</Tag>
            </Col>
            <Col className="gutter-row" span={8}></Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Uso de aparatos</Tag>
            </Col>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Prezi</Tag>
            </Col>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">After Effects</Tag>
            </Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={12}>
              <span>
                <b>Experiencia laboral</b>
              </span>
            </Col>
            <Col className="gutter-row" span={12}>
              <Link
                to="#"
                onClick={() => {
                  setModalExperience(true);
                }}
              >
                {" "}
                <PlusCircleOutlined /> Agregar otra experiencia
              </Link>
            </Col>
          </Row>

          <ExperienceList Experiences={Experiences} />

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}></Col>
          </Row>
        </Col>
        {
          //---------------------------------flag2 ------------
        }
        <Col className={flag2} span={12} style={{ paddingLeft: "30px" }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={22}>
              <h3>Habilidades Necesarias para el puesto</h3>
            </Col>
            <Col className="gutter-row" span={2}>
              <Dropdown overlay={menu2} trigger={["click"]}>
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
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={12}>
              <span>Nivel de Estudios</span>
              <br></br>
              <span>
                <b>Licenciatura</b>
              </span>
            </Col>
            <Col className="gutter-row" span={12}>
              <span>Años</span>
              <br></br>
              <span>
                <b>8 años</b>
              </span>
            </Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={12}>
              <span>Idiomas</span>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Ingles-Avanzado</Tag>
            </Col>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Chino-Básico</Tag>
            </Col>
            <Col className="gutter-row" span={8}></Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={12}>
              <span>Habilidades técnicas</span>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Photoshop - Avanzado</Tag>
            </Col>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Illustrator - Medio</Tag>
            </Col>
            <Col className="gutter-row" span={8}></Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Tweetdeck</Tag>
            </Col>
            <Col className="gutter-row" span={8}>
              <Tag className="TagAreaGreen">Hootsuite - Avanzado</Tag>
            </Col>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Microsoft Office </Tag>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Uso de algoritmos</Tag>
            </Col>
            <Col className="gutter-row" span={8}>
              <Tag className="TagAreaGreen">Uso de fórmulas</Tag>
            </Col>
            <Col className="gutter-row" span={8}></Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Uso de aparatos</Tag>
            </Col>
            <Col className="gutter-row" span={8}>
              <Tag className="TagArea">Prezi</Tag>
            </Col>
            <Col className="gutter-row" span={8}>
              <Tag className="TagAreaRed">After Effects</Tag>
            </Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            className="dividerBottomFull"
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={19}>
              <span>Competencias del puesto</span>
            </Col>
            <Col className="gutter-row" span={5}>
              <span>Tipo</span>
            </Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            className="dividerBottomFull"
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={19}>
              <span>Creatividad</span>
            </Col>
            <Col className="gutter-row" span={5}>
              <span>INSTITU</span>
            </Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            className="dividerBottomFull"
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={19}>
              <span>Solución de Problemas - Desarrolla Alterna</span>
            </Col>
            <Col className="gutter-row" span={5}>
              <span>INSTITU</span>
            </Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            className="dividerBottomFull"
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={19}>
              <span>Actitud de servicio</span>
            </Col>
            <Col className="gutter-row" span={5}>
              <span>NIVEL</span>
            </Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            className="dividerBottomFull"
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={19}>
              <span>Apego a Normas</span>
            </Col>
            <Col className="gutter-row" span={5}>
              <span>NIVEL</span>
            </Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            className="dividerBottomFull"
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={19}>
              <span>Iniciativa</span>
            </Col>
            <Col className="gutter-row" span={5}>
              <span>PUESTO</span>
            </Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={18}>
              <span>Liderazgo - Supervisión de Procesos</span>
            </Col>
            <Col className="gutter-row" span={6}>
              <span>PUESTO</span>
            </Col>
          </Row>
        </Col>
        {
          //---------------------------------flag 3------------
        }
        <Col className={flag3} span={12} style={{ paddingLeft: "30px" }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={22}>
              <h3>Habilidades del colaborador</h3>
            </Col>
            <Col className="gutter-row" span={2}>
              <Dropdown overlay={menu2} trigger={["click"]}>
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
          <Form
            name="formH1"
            initialValues={{
              document: "",
            }}
            form={formlevel}
            layout="vertical"
            onFinish={sendlevelStudy}
          >
            <Row
              className="dividerBottomFull"
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              style={{ marginTop: "20px" }}
            >
              <Col className="gutter-row" span={9}>
                <Form.Item name="level" label="Nivel de estudios">
                  <Select placeholder="Ej. Educación superior">
                    <Option value="Educacion Medio Superior">
                      Educacion Medio Superior
                    </Option>
                    <Option value="Educacion Superior">
                      Educacion Superior
                    </Option>
                    <Option value="Maestria">Maestria</Option>
                    <Option value="Diplomado">Diplomado</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col className="gutter-row" span={9}>
                <Form.Item name="years" label="Años de experiencia">
                  <Select placeholder="Selecciona una opción">
                    <Option value="1 Año">1 Año</Option>
                    <Option value="2 Años">2 Años</Option>
                    <Option value="3 Años">3 Años</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col
                className="gutter-row"
                style={{ marginTop: "30px" }}
                span={2}
              >
                <Button htmlType="submit" className="primary">
                  Guardar
                </Button>
              </Col>
            </Row>
          </Form>

          <Form name="formH2" layout="vertical">
            <Row
              className="dividerBottomFull"
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              style={{ marginTop: "20px" }}
            >
              <Col className="gutter-row" span={18}>
                <Form.Item name="bussines" label="Habilidades técnicas ">
                  <Input type="text" placeholder="Ej. de camión de carga " />
                </Form.Item>
              </Col>

              <Col
                className="gutter-row"
                style={{ marginTop: "30px" }}
                span={2}
              >
                <Button htmlType="submit" className="primary">
                  Guardar
                </Button>
              </Col>
            </Row>
          </Form>

          <Form name="formH3" layout="vertical">
            <Row
              className="dividerBottomFull"
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              style={{ marginTop: "20px" }}
            >
              <Col className="gutter-row" span={18}>
                <Form.Item name="bussines" label="Idiomas">
                  <Input type="text" placeholder="Ej. Ingles avanzado" />
                </Form.Item>
              </Col>

              <Col
                className="gutter-row"
                style={{ marginTop: "30px" }}
                span={2}
              >
                <Button htmlType="submit" className="primary">
                  Guardar
                </Button>
              </Col>
            </Row>
          </Form>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={24}>
              <span>
                <b>Experiencia profesional</b>
              </span>
            </Col>
          </Row>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "10px" }}
          >
            <Col className="gutter-row" span={24}>
              <Link
                to="#"
                onClick={() => {
                  setModalExperience(true);
                }}
              >
                {" "}
                <PlusCircleOutlined /> Agregar otra experiencia
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal
        title="Historial del Puesto"
        className="largeModal"
        visible={HistorialP}
        onCancel={closeModalHistorialP}
        onOk={sendHistorialP}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={closeModalHistorialP}
          >
            Cancelar
          </Button>,
          <Button className="primary" onClick={closeModalHistorialP}>
            Aceptar
          </Button>,
        ]}
      >
        <Row
          className="dividerBottomFull"
          style={{ textAlign: "center", paddingBottom: "15px" }}
        >
          <Col span={5}>
            <b>Puesto</b>
          </Col>
          <Col span={6}>
            <b>Creación</b>
          </Col>
          <Col span={9}>
            <b>Colaboradores que lo ocuparon</b>
          </Col>
          <Col span={4}>
            <b>Acciones</b>
          </Col>
        </Row>

        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col span={5}>Diseñador Gráfico</Col>
          <Col span={6}>10 MAY 2016</Col>
          <Col span={9}>2 colaboradores</Col>
          <Col span={4}>
            <Link className="iconBlue" to="#">
              Ver Detalle
            </Link>
          </Col>
        </Row>

        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col span={5}>Diseñador web</Col>
          <Col span={6}>12 MAY 2018</Col>
          <Col span={9}>1 colaboradores</Col>
          <Col span={4}>
            <Link className="iconBlue" to="#">
              Ver Detalle
            </Link>
          </Col>
        </Row>

        <Row
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col span={5}>Diseñador UI</Col>
          <Col span={6}>12 MAY 2020</Col>
          <Col span={9}>1 colaboradores</Col>
          <Col span={4}>
            <Link className="iconBlue" to="#">
              Ver Detalle
            </Link>
          </Col>
        </Row>
      </Modal>

      <Modal
        title="Historial del Colaborador"
        className="largeModal"
        visible={HistorialC}
        onCancel={closeModalHistorialC}
        onOk={sendHistorialC}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={closeModalHistorialC}
          >
            Cancelar
          </Button>,
          <Button className="primary" onClick={closeModalHistorialC}>
            Aceptar
          </Button>,
        ]}
      >
        <Row
          className="dividerBottomFull"
          style={{ textAlign: "center", paddingBottom: "15px" }}
        >
          <Col span={5}>
            <b>Puesto</b>
          </Col>
          <Col span={6}>
            <b>Periodo de inicio</b>
          </Col>
          <Col span={9}>
            <b>Periodo final</b>
          </Col>
          <Col span={4}>
            <b>Detalle</b>
          </Col>
        </Row>

        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col span={5}>Diseñador Gráfico</Col>
          <Col span={6}>15 MAY 2014</Col>
          <Col span={9}>1 de ABR 2016</Col>
          <Col span={4}>
            <Link className="iconBlue" to="#">
              Ver Detalle
            </Link>
          </Col>
        </Row>

        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col span={5}>Lider de área</Col>
          <Col span={6}>1 ABR 2016</Col>
          <Col span={9}>30 OCT 2017</Col>
          <Col span={4}>
            <Link className="iconBlue" to="#">
              Ver Detalle
            </Link>
          </Col>
        </Row>

        <Row
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col span={5}>Gerende de división</Col>
          <Col span={6}>30 OCT 2017</Col>
          <Col span={9}>A LA FECHA</Col>
          <Col span={4}>
            <Link className="iconBlue" to="#">
              Ver Detalle
            </Link>
          </Col>
        </Row>
      </Modal>
      {/* <Modal
        className="middleModal"
        title="Agregar experiencia"
        visible={experience}
        onCancel={closeModalExperience}
        onOk={sendExperience}
        footer={[
          <Button className="primary" onClick={closeModalExperience}>
            Agregar
          </Button>,
        ]}
      >
        <Form
          name="formExperience"
          layout="vertical"
          style={{ marginLeft: "10px" }}
        >
          <Form.Item name="Administrador" label="Puesto">
            <Input type="text" placeholder="Ej. Ejecutivo de ventas SR." />
          </Form.Item>
          <Form.Item name="Administrador" label="Empresa">
            <Input type="text" placeholder="Ej. GPO comunicación" />
          </Form.Item>
          <Form.Item name="Actividades y logros" label="Puesto">
            <TextArea
              placeholder="Agrega una breve resumen de tus principales actividades y logros"
              rows={6}
            />
          </Form.Item>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item name="start" label="Inicio">
                <Input type="date" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item name="end" label="Fin">
                <Input type="date" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal> */}

      <Modal
        title="Expediente: Marco Antonio Remirez Perez"
        className="largeModal"
        visible={upload}
        onCancel={closeModalUpload}
        onOk={sendUpload}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={closeModalUpload}
          >
            Cancelar
          </Button>,
          <Button
            className="primary"
            onClick={() => {
              setUpload(false);
              setAdjunts(true);
            }}
          >
            Adjuntar
          </Button>,
        ]}
      >
        <Row
          className="dividerBottomFull"
          style={{ textAlign: "center", paddingBottom: "15px" }}
        >
          <Col span={5}>
            <b>Documento</b>
          </Col>
          <Col span={16}>
            <b>peso</b>
          </Col>
          <Col span={3}>
            <b>Acciones</b>
          </Col>
        </Row>

        <Row className={flag6} style={{ textAlign: "center" }}>
          <Col span={24}>
            <Link
              className="iconSureGray"
              onClick={() => {
                setFlag6("hide");
                setFlag7("flex");
              }}
              style={{ fontSize: "100px" }}
              to="#"
            >
              <FiUpload style={{ marginTop: "50px" }} />
            </Link>
          </Col>
        </Row>

        <Row
          className={flag6}
          style={{
            textAlign: "center",
            paddingBottom: "30px",
            marginTop: "-20px",
          }}
        >
          <Col span={24}>
            <Link
              to="#"
              onClick={() => {
                setUpload(false);
                setExpedient(true);
              }}
            >
              {" "}
              <PlusCircleOutlined /> Agregar uno o mas documentos
            </Link>
          </Col>
        </Row>

        <Row
          className={flag7}
          style={{
            textAlign: "center",
            paddingBottom: "10px",
            marginTop: "10px",
          }}
        >
          <Col span={7}>
            <span>comprobantededomicilio.pdf</span>
          </Col>
          <Col span={13}>
            <span className="iconGreen">68 kbs.</span>
          </Col>
          <Col style={{ textAlign: "center" }} span={4}>
            <MdDelete />
          </Col>
        </Row>

        <Row
          className={flag7}
          style={{
            textAlign: "center",
            paddingBottom: "10px",
            marginTop: "10px",
          }}
        >
          <Col span={7}>
            <span>curp.pdf</span>
          </Col>
          <Col span={13}>
            <span className="iconGreen">68 kbs.</span>
          </Col>
          <Col style={{ textAlign: "center" }} span={4}>
            <MdDelete />
          </Col>
        </Row>

        <Row
          className={flag7}
          style={{
            textAlign: "center",
            paddingBottom: "10px",
            marginTop: "10px",
          }}
        >
          <Col span={7}>
            <span>actadenacimiento.pdf</span>
          </Col>
          <Col span={13}>
            <span className="iconGreen">68 kbs.</span>
          </Col>
          <Col style={{ textAlign: "center" }} span={4}>
            <MdDelete />
          </Col>
        </Row>
      </Modal>
      <Modal
        title="Expediente: Marco Antonio Remirez Perez"
        className="largeModal"
        visible={adjunts}
        onCancel={closeModalAdjunts}
        onOk={sendAdjunts}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={closeModalAdjunts}
          >
            Cancelar
          </Button>,
          <Button className="primary" onClick={closeModalAdjunts}>
            Enviar
          </Button>,
        ]}
      >
        <Row
          className="dividerBottomFull"
          style={{ textAlign: "center", paddingBottom: "15px" }}
        >
          <Col span={7}>
            <b>Documento</b>
          </Col>
          <Col span={8}>
            <b>Estatus</b>
          </Col>
          <Col span={5}>
            <b>Fecha de carga</b>
          </Col>
          <Col span={4}>
            <b>Acciones</b>
          </Col>
        </Row>

        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "left",
            marginTop: "15px",
            paddingBottom: "15px",
            paddingLeft: "20px",
          }}
        >
          <Col span={8}>Comprobante de Ingresos</Col>
          <Col span={8}>
            <span className="iconGreen">Adjuntado | Por autorizar</span>
          </Col>
          <Col span={6}>10 MAY 2016</Col>
          <Col span={2}>
            <Link
              className="iconGray"
              onClick={() => {
                setUpload(true);
                setExpedient(false);
                setFlag6("showBlok");
                setFlag7("hide");
              }}
              style={{ fontSize: "18px" }}
              to="#"
            >
              <MdDelete style={{ position: "absolute" }} />
            </Link>
          </Col>
        </Row>

        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "left",
            marginTop: "15px",
            paddingBottom: "15px",
            paddingLeft: "20px",
          }}
        >
          <Col span={8}>Comprobante de Estudios</Col>
          <Col span={8}>
            <span className="iconGreen">Adjuntado | Autorizado</span>
          </Col>
          <Col span={6}>10 MAY 2016</Col>
          <Col span={2}>
            <Link
              className="iconGray"
              onClick={() => {
                setUpload(true);
                setExpedient(false);
                setFlag6("showBlok");
                setFlag7("hide");
              }}
              style={{ fontSize: "18px" }}
              to="#"
            >
              <MdDelete style={{ position: "absolute" }} />
            </Link>
          </Col>
        </Row>

        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "left",
            marginTop: "15px",
            paddingBottom: "15px",
            paddingLeft: "20px",
          }}
        >
          <Col span={8}>Comprobante de Domicilio</Col>
          <Col span={8}>
            <span className="iconGreen">Adjuntado |No autorizado</span>
          </Col>
          <Col span={6}>10 MAY 2016</Col>
          <Col span={2}>
            <Link
              className="iconGray"
              onClick={() => {
                setUpload(true);
                setExpedient(false);
                setFlag6("showBlok");
                setFlag7("hide");
              }}
              style={{ fontSize: "18px" }}
              to="#"
            >
              <MdDelete style={{ position: "absolute" }} />
            </Link>
          </Col>
        </Row>

        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "left",
            marginTop: "15px",
            paddingBottom: "15px",
            paddingLeft: "20px",
          }}
        >
          <Col span={8}>Identificación Oficial</Col>
          <Col span={8}>
            <span className="iconGreen">Adjuntado | Por autorizar</span>
          </Col>
          <Col span={6}>10 MAY 2016</Col>
          <Col span={2}>
            <Link
              className="iconGray"
              onClick={() => {
                setUpload(true);
                setExpedient(false);
                setFlag6("showBlok");
                setFlag7("hide");
              }}
              style={{ fontSize: "18px" }}
              to="#"
            >
              <MdDelete style={{ position: "absolute" }} />
            </Link>
          </Col>
        </Row>

        <Row
          style={{
            textAlign: "left",
            marginTop: "15px",
            paddingBottom: "15px",
            paddingLeft: "20px",
          }}
        >
          <Col span={8}>Identificación Oficial</Col>
          <Col span={8}>
            <span className="iconGreen">Adjuntado | Autorizado</span>
          </Col>
          <Col span={6}>10 MAY 2016</Col>
          <Col span={2}>
            <Link
              className="iconGray"
              onClick={() => {
                setUpload(true);
                setExpedient(false);
                setFlag6("showBlok");
                setFlag7("hide");
              }}
              style={{ fontSize: "18px" }}
              to="#"
            >
              <MdDelete style={{ position: "absolute" }} />
            </Link>
          </Col>
        </Row>
      </Modal>

      <ModalDigitalExpedient
        expedient={expedient}
        setExpedient={setExpedient}
      />
      <ModalPermissions
        Permissions={Permissions}
        setPermissions={setPermissions}
      />
      <ModalPassword Password={Password} setPassword={setPassword} />
      <ModalAddExperience
        ModalExperience={ModalExperience}
        setModalExperience={setModalExperience}
        Experiences={Experiences}
        setExperiences={setExperiences}
      />
    </>
  );
}
