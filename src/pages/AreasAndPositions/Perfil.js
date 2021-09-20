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
  Input,
  Select,
} from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import Avatar from "../../assets/img/avatar.png";
import More from "../../assets/img/icons/more_vert-24px.svg";
import { v4 as uuid } from "uuid";
import "./AreasAndPositions.scss";
import ModalPassword from "../../components/Modals/ModalPassword/ModalPassword";
import { useTranslation } from "react-i18next";
import ModalDigitalExpedient from "../../components/Modals/ModalDigitalExpedient/ModalDigitalExpedient";
import ModalPermissions from "../../components/Modals/ModalPermissions/ModalPermissions";
import ModalAddExperience from "../../components/Modals/ModalAddExperience/ModalAddExperience";
import ExperienceList from "../../components/Modals/ModalAddExperience/components/ExperienceList/ExperienceList";
import { useForm } from "antd/lib/form/Form";
import ListLevelStudy from "./Components/ListLevelStudy/ListLevelStudy";
import ModalHistorialCollaborator from "../../components/Modals/ModalHistorialCollaborator/ModalHistorialCollaborator";
import ModalHistorialJob from "../../components/Modals/ModalHistorialJob/ModalHistorialJob";
import ModalExpedientUp from "../../components/Modals/ModalExpedientUp/ModalExpedientUp";

const { Option } = Select;

export default function Perfil() {
  const [t, i18n] = useTranslation("global");
  const [flag, setFlag] = useState("gutter-row dividerLeft showBlock");
  const [flag2, setFlag2] = useState("gutter-row dividerLeft hide");
  const [flag3, setFlag3] = useState("gutter-row dividerLeft hide");
  const [flag4, setFlag4] = useState("showBlock");
  const [flag5, setFlag5] = useState("hide");
  const [Password, setPassword] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

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

  //------------------ Modals ------------------------------
  const [expedient, setExpedient] = useState(false);
  const [Permissions, setPermissions] = useState(false);
  const [ModalExperience, setModalExperience] = useState(false);
  const [modalHistorialC, setModalHistorialC] = useState(false);
  const [HistorialJ, setHistorialJ] = useState(false);
  const [Experiences, setExperiences] = useState([]);
  const [expedientUp, setExpedientUp] = useState();

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
    formlevel.resetFields();
  };

  //----------------- Level study ----------------------------

  //-----------------  skills ----------------------------
  const [Skills, setSkills] = useState([]);
  const [formSkills] = useForm();
  const skillstechniques = (values) => {
    setSkills([
      ...Skills,
      {
        idskill: uuid(),
        skillName: values["techniqueskills"],
      },
    ]);
    formSkills.resetFields();
  };

  //----------------- End skills ----------------------------

  //-----------------  Languajes ----------------------------

  const [languajes, setlanguajes] = useState([]);
  const [formLanguajes] = useForm();

  const languanjes = (values) => {
    setlanguajes([
      ...languajes,
      {
        idLanguaje: uuid(),
        LanguajesName: values["languajes"],
      },
    ]);
    formLanguajes.resetFields();
  };

  //----------------- End Languajes ----------------------------

  const menu3 = (
    <Menu>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link
            to={
              "/" +
              t("routes.organigram") +
              "/" +
              t("paths_organigram.areasandpositions-collaborator")
            }
          >
            {t(
              "organigram.areasandpositions-perfil.tab1.tab2.menu-positions.edit-collaborator"
            )}
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link
            to={
              "/" +
              t("routes.organigram") +
              "/" +
              t("paths_organigram.areasandpositions-addjob")
            }
          >
            {t(
              "organigram.areasandpositions-perfil.tab1.tab2.menu-positions.edit-position"
            )}
          </Link>
        </Menu.Item>
      </Menu.Item>

      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link
            to={
              "/" + t("routes.organigram") + "/" + t("paths_organigram.eraser")
            }
          >
            {t(
              "organigram.areasandpositions-perfil.tab1.tab2.menu-positions.edit-structure"
            )}
          </Link>
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
            {t(
              "organigram.areasandpositions-perfil.tab1.tab2.menu-positions.add-permissions"
            )}
          </Link>
        </Menu.Item>
      </Menu.Item>

      <Menu.Divider />

      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link
            to="#"
            onClick={() => {
              setModalHistorialC(true);
            }}
          >
            {t(
              "organigram.areasandpositions-perfil.tab1.tab2.menu-positions.historial-collaborator"
            )}
          </Link>
        </Menu.Item>
      </Menu.Item>

      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link
            to="#"
            onClick={() => {
              setHistorialJ(true);
            }}
          >
            {t(
              "organigram.areasandpositions-perfil.tab1.tab2.menu-positions.historial-position"
            )}
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
                type: 0,
                function: () => {
                  history.push({
                    pathname:
                      "/" +
                      t("routes.organigram") +
                      "/" +
                      t("paths_organigram.areasandpositions"),
                  });
                },
              });
            }}
          >
            {t(
              "organigram.areasandpositions-perfil.tab1.tab2.menu-positions.collaborator-down"
            )}
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
            {t(
              "organigram.areasandpositions-perfil.tab1.tab2.menu2-positions.edit-skills"
            )}
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link
            to="#"
            onClick={() => {
              setModalExperience(true);
            }}
          >
            {t(
              "organigram.areasandpositions-perfil.tab1.tab2.menu2-positions.edit-experience"
            )}
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
              setExpedientUp(true);
            }}
          >
            {t(
              "organigram.areasandpositions-perfil.tab1.menu-collaborator.add-file"
            )}
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link
            to="#"
            onClick={() => {
              setModalHistorialC(true);
            }}
          >
            {t(
              "organigram.areasandpositions-perfil.tab1.menu-collaborator.record-position"
            )}
          </Link>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );

  // ------------------------- data dinamic ------------------------------

  const [dataUser, setDataUser] = useState({
    idUser: 0,
    name: "Marco Antonio Ramirez Perez",
    position: "Director de Mercadotecnia y Publicidad",
    email: "mramirez@empresa.org",
  });

  const [dataCollaborator, setDataCollaborator] = useState({
    idCollaborator: 0,
    birthday: "29-jun-1987",
    start: "01-ENE-2015",
    gender: "Masculino",
    mariedState: "Soltero",
    nationality: "Mexicana",
    city: "Ciudad de México",
  });

  const [dataPosition, setDataPosition] = useState({
    idPosition: 0,
    positionLevel: "Gerente",
    chargeLevel: "Gerente A",
    positionType: "Puesto clave",
    riskLevel: "Medio",
    branch: "CDMX",
    area: "Marketing",
    reportTo: "Dirección General del Corporativo",
    email: "nombre@empresa.com",
  });

  const [dataSkillsPosition, setDataSkillsPosition] = useState({
    idSkillsPosition: 0,
    studyLevel: "Gerente",
    years: "Gerente A",
    languajes: [
      {
        idLanguaje: 0,
        name: "Ingles-Avanzado",
      },
      {
        idLanguaje: 1,
        name: "Chino-Básico",
      },
    ],
    techniquesSkills: [
      {
        idTechniqueSkill: 0,
        name: "Photoshop - Avanzado",
        level: 1,
      },
      {
        idTechniqueSkill: 1,
        name: "Illustrator - Medio",
        level: 1,
      },
      {
        idTechniqueSkill: 2,
        name: "Tweetdeck",
        level: 1,
      },
      {
        idTechniqueSkill: 3,
        name: "Hootsuite - Avanzado",
        level: 2,
      },
      {
        idTechniqueSkill: 4,
        name: "Microsoft Office",
        level: 1,
      },
      {
        idTechniqueSkill: 5,
        name: "Uso de algoritmos",
        level: 1,
      },
      {
        idTechniqueSkill: 6,
        name: "Uso de fórmulas",
        level: 2,
      },
      {
        idTechniqueSkill: 7,
        name: "Uso de aparatos",
        level: 1,
      },
      {
        idTechniqueSkill: 8,
        name: "Prezi",
        level: 1,
      },
      {
        idTechniqueSkill: 9,
        name: "After Effects",
        level: 3,
      },
    ],
    competences: [
      {
        idCompetence: 0,
        name: "Creatividad",
        type: "INSTITU",
      },
      {
        idCompetence: 1,
        name: "Solución de Problemas - Desarrolla Alterna",
        type: "INSTITU",
      },
      {
        idCompetence: 2,
        name: "Actitud de servicio",
        type: "NIVEL",
      },
      {
        idCompetence: 3,
        name: "Apego a Normas",
        type: "NIVEL",
      },
      {
        idCompetence: 4,
        name: "Iniciativa",
        type: "PUESTO",
      },
      {
        idCompetence: 5,
        name: "Liderazgo - Supervisión de Procesos",
        type: "PUESTO",
      },
    ],
  });

  // ------------------------- end data dinamic ------------------------------

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
              <span>{dataUser.name}</span>
              <br></br>
              <span>{dataUser.position}</span>
              <br></br>
              <span className="iconGreen">{dataUser.email}</span>
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
            <Col id="tabHeadPerfil" className="gutter-row" span={24}>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Información colaborador" key="1">
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12}>
                      <b>
                        {t(
                          "organigram.areasandpositions-perfil.tab1.birthday-date"
                        )}
                      </b>
                      <br></br>
                      <span>{dataCollaborator.birthday}</span>
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <b>
                        {t(
                          "organigram.areasandpositions-perfil.tab1.entry-date"
                        )}
                      </b>
                      <br></br>
                      <span>{dataCollaborator.start}</span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "32px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <b>
                        {t("organigram.areasandpositions-perfil.tab1.gender")}
                      </b>
                      <br></br>
                      <span>{dataCollaborator.gender}</span>
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <b>
                        {t(
                          "organigram.areasandpositions-perfil.tab1.marital-status"
                        )}
                      </b>
                      <br></br>
                      <span>{dataCollaborator.mariedState}</span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "32px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <b>
                        {t(
                          "organigram.areasandpositions-perfil.tab1.nationality"
                        )}
                      </b>
                      <br></br>
                      <span>{dataCollaborator.nationality}</span>
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <b>
                        {t("organigram.areasandpositions-perfil.tab1.city")}
                      </b>
                      <br></br>
                      <span>{dataCollaborator.city}</span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "32px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <b>
                        {t(
                          "organigram.areasandpositions-perfil.tab1.teams-which"
                        )}
                      </b>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "32px", paddingBottom: "10px" }}
                    className="dividerBottomFull"
                  >
                    <Col className="gutter-row" span={12}>
                      <span className="link">
                        {t("organigram.areasandpositions-perfil.tab1.team")}
                      </span>
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <span>
                        <b>
                          {t("organigram.areasandpositions-perfil.tab1.master")}
                        </b>
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "32px" }}
                  >
                    <Col className="gutter-row" span={11}>
                      <span className="link">
                        {t(
                          "organigram.areasandpositions-perfil.tab1.team-Evaluast-lik"
                        )}
                      </span>
                    </Col>
                    <Col className="gutter-row" span={13}>
                      <span>
                        <b>Dev Team</b>
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "32px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span>
                        <b>
                          {t(
                            "organigram.areasandpositions-perfil.tab1.proccess-result"
                          )}
                        </b>
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "8px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span className="link">
                        {t(
                          "organigram.areasandpositions-perfil.tab1.evaluation"
                        )}
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "8px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span className="link">
                        {t(
                          "organigram.areasandpositions-perfil.tab1.evaluation-a"
                        )}
                      </span>
                    </Col>
                  </Row>
                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "8px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span className="link">
                        {t(
                          "organigram.areasandpositions-perfil.tab1.evaluation-b"
                        )}
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "8px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span className="link">
                        {t(
                          "organigram.areasandpositions-perfil.tab1.plans-developing"
                        )}
                      </span>
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
                        <span className="link">
                          {t(
                            "organigram.areasandpositions-perfil.tab1.proccedings"
                          )}
                        </span>
                      </Link>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane
                  tab={t("organigram.areasandpositions-perfil.tab1.tab2.title")}
                  key="2"
                >
                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "8px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <b>
                        {t(
                          "organigram.areasandpositions-perfil.tab1.tab2.level-position"
                        )}
                      </b>
                      <br></br>
                      <span>{dataPosition.positionLevel}</span>
                    </Col>
                    <Col>
                      <b>
                        {t(
                          "organigram.areasandpositions-perfil.tab1.tab2.level-post"
                        )}
                      </b>
                      <br></br>
                      <span>{dataPosition.chargeLevel}</span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "32px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <b>
                        {t(
                          "organigram.areasandpositions-perfil.tab1.tab2.taip-position"
                        )}
                      </b>
                      <br></br>
                      <span>{dataPosition.positionType}</span>
                    </Col>
                    <Col>
                      <b>
                        {t(
                          "organigram.areasandpositions-perfil.tab1.tab2.level-risk"
                        )}
                      </b>
                      <br></br>
                      <span>{dataPosition.riskLevel}</span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "32px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <b>
                        {t(
                          "organigram.areasandpositions-perfil.tab1.tab2.branch"
                        )}
                      </b>
                      <br></br>
                      <span>{dataPosition.branch}</span>
                    </Col>
                    <Col>
                      <b>
                        {t(
                          "organigram.areasandpositions-perfil.tab1.tab2.area"
                        )}
                      </b>
                      <br></br>
                      <span>{dataPosition.area}</span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "32px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <b>
                        {t(
                          "organigram.areasandpositions-perfil.tab1.tab2.report-to"
                        )}
                      </b>
                      <br></br>
                      <span>{dataPosition.reportTo}</span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "32px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <b>
                        {t(
                          "organigram.areasandpositions-perfil.tab1.tab2.mail-to"
                        )}
                      </b>
                      <br></br>
                      <span>{dataPosition.email}</span>
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
              <h3>
                {t(
                  "organigram.areasandpositions-perfil.tab1.skills-collaborator"
                )}
              </h3>
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
                <b className="secondaryText">
                  {t("organigram.areasandpositions-perfil.tab1.level-studies")}
                </b>
              </span>
            </Col>
            <Col className="gutter-row" span={12}>
              <span>
                <b className="secondaryText">
                  {t("organigram.areasandpositions-perfil.tab1.years")}
                </b>
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
                <b className="secondaryText">
                  {t("organigram.areasandpositions-perfil.tab1.languages")}
                </b>
              </span>
              <br />
            </Col>
          </Row>
          {
            // ------ listado idiomas------------------
          }
          <Row
            style={{ marginTop: "10px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={24}>
              {languajes.map((languaje, index) => (
                <Tag key={index} className="tagNormal">
                  {languaje.LanguajesName}
                </Tag>
              ))}
            </Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={12}>
              <span>
                <b className="secondaryText">
                  {t(
                    "organigram.areasandpositions-perfil.tab1.skills-techniques"
                  )}
                </b>
              </span>
            </Col>
          </Row>

          <Row
            style={{ marginTop: "10px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={24}>
              {Skills.map((skill, item) => (
                <Tag key={item} className="tagNormal">
                  {skill.skillName}
                </Tag>
              ))}
            </Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={12}>
              <span>
                <b className="secondaryText">
                  {t(
                    "organigram.areasandpositions-perfil.tab1.experience-labor"
                  )}
                </b>
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
                <PlusCircleOutlined />{" "}
                <span style={{ marginLeft: "8px" }}>
                  {" "}
                  {t("organigram.areasandpositions-perfil.tab1.add-experience")}
                </span>
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
              <h3>
                {t(
                  "organigram.areasandpositions-perfil.tab1.tab2.skills-position"
                )}
              </h3>
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
              <b>
                {t("organigram.areasandpositions-perfil.tab1.tab2.level-study")}
              </b>
              <br></br>
              <span>{dataSkillsPosition.studyLevel}</span>
            </Col>
            <Col className="gutter-row" span={12}>
              <b>{t("organigram.areasandpositions-perfil.tab1.tab2.years")}</b>
              <br></br>
              <span>{dataSkillsPosition.years}</span>
            </Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={12}>
              <span>
                {t("organigram.areasandpositions-perfil.tab1.tab2.languages")}
              </span>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              {dataSkillsPosition.languajes.map((languaje, index) => (
                <Tag key={index} className="tagNormal">
                  {languaje.name}
                </Tag>
              ))}
            </Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={12}>
              <span>
                {t(
                  "organigram.areasandpositions-perfil.tab1.tab2.skills-techniques"
                )}
              </span>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              {dataSkillsPosition.techniquesSkills.map((skill, index) =>
                skill.level === 2 ? (
                  <Tag key={index} className="tagNormal TagAreaGreen">
                    {skill.name}
                  </Tag>
                ) : skill.level === 3 ? (
                  <Tag key={index} className="tagNormal TagAreaRed">
                    {skill.name}
                  </Tag>
                ) : (
                  <Tag key={index} className="tagNormal">
                    {skill.name}
                  </Tag>
                )
              )}
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

          {dataSkillsPosition.competences.map((competencie, index) => (
            <Row
              key={index}
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              className="dividerBottomFull"
              style={{ marginTop: "20px" }}
            >
              <Col className="gutter-row" span={19}>
                <span>{competencie.name}</span>
              </Col>
              <Col className="gutter-row" span={5}>
                <span>{competencie.type}</span>
              </Col>
            </Row>
          ))}
        </Col>
        {
          //---------------------------------flag 3------------
        }
        <Col className={flag3} span={12} style={{ paddingLeft: "30px" }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={22}>
              <h3>
                {t(
                  "organigram.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.title"
                )}
              </h3>
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
            key={uuid()}
          >
            <Row
              className="dividerBottomFull"
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              style={{ marginTop: "20px" }}
            >
              <Col className="gutter-row" span={9}>
                <Form.Item
                  name="level"
                  label={t(
                    "organigram.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.level-education-label"
                  )}
                >
                  <Select
                    placeholder={t(
                      "organigram.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.education-superior-placeholder"
                    )}
                  >
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
                <Form.Item
                  name="years"
                  label={t(
                    "organigram.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.years-experience-label"
                  )}
                >
                  <Select
                    placeholder={t(
                      "organigram.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.select-option-placeholder"
                    )}
                  >
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
                  {t(
                    "organigram.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.btn-save0"
                  )}
                </Button>
              </Col>
            </Row>
          </Form>
          <Form
            initialValues={{
              techniqueskills: "",
            }}
            form={formSkills}
            onFinish={skillstechniques}
            name="formH2"
            layout="vertical"
            key={uuid()}
          >
            <Row
              className="dividerBottomFull"
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              style={{ marginTop: "20px" }}
            >
              <Col className="gutter-row" span={18}>
                <Form.Item
                  name="techniqueskills"
                  label={t(
                    "organigram.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.techniques-label"
                  )}
                >
                  <Input
                    type="text"
                    placeholder={t(
                      "organigram.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.truck-load-placeholder"
                    )}
                  />
                </Form.Item>
              </Col>

              <Col
                className="gutter-row"
                style={{ marginTop: "30px" }}
                span={2}
              >
                <Button htmlType="submit" className="primary">
                  {t(
                    "organigram.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.btn-save"
                  )}
                </Button>
              </Col>
            </Row>
          </Form>

          <Form
            name="formH3"
            initialValues={{
              languajes: "",
            }}
            form={formLanguajes}
            onFinish={languanjes}
            layout="vertical"
            key={uuid()}
          >
            <Row
              className="dividerBottomFull"
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              style={{ marginTop: "20px" }}
            >
              <Col className="gutter-row" span={18}>
                <Form.Item
                  name="languajes"
                  label={t(
                    "organigram.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.languages-label"
                  )}
                >
                  <Input
                    type="text"
                    placeholder={t(
                      "organigram.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.english-advanced-placeholder"
                    )}
                  />
                </Form.Item>
              </Col>

              <Col
                className="gutter-row"
                style={{ marginTop: "30px" }}
                span={2}
              >
                <Button htmlType="submit" className="primary">
                  {t(
                    "organigram.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.btn-save2"
                  )}
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
                <b>
                  {t(
                    "organigram.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.experience-professional"
                  )}
                </b>
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
                <PlusCircleOutlined />{" "}
                {t(
                  "organigram.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.add-experience"
                )}
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>

      <ModalExpedientUp
        expedientUp={expedientUp}
        setExpedientUp={setExpedientUp}
      />

      <ModalDigitalExpedient
        expedient={expedient}
        setExpedient={setExpedient}
      />
      <ModalPermissions
        Permissions={Permissions}
        setPermissions={setPermissions}
      />

      <ModalAddExperience
        ModalExperience={ModalExperience}
        setModalExperience={setModalExperience}
        Experiences={Experiences}
        setExperiences={setExperiences}
      />
      <ModalHistorialCollaborator
        modalHistorialC={modalHistorialC}
        setModalHistorialC={setModalHistorialC}
      />

      <ModalHistorialJob
        HistorialJ={HistorialJ}
        setHistorialJ={setHistorialJ}
      />

      <ModalPassword Password={Password} setPassword={setPassword} />
    </>
  );
}
