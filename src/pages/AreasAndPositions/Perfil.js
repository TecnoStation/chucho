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
import { Link } from "react-router-dom";
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
          <Link to="/organigrama/areasandpositions-collaborator">
            {t("organigrama.areasandpositions-perfil.tab1.tab2.menu-positions.edit-collaborator")}
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link to="/organigrama/areasandpositions-addjob">{t("organigrama.areasandpositions-perfil.tab1.tab2.menu-positions.edit-position")}</Link>
        </Menu.Item>
      </Menu.Item>

      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link to="/organigrama/eraser">{t("organigrama.areasandpositions-perfil.tab1.tab2.menu-positions.edit-structure")}</Link>
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
            {t("organigrama.areasandpositions-perfil.tab1.tab2.menu-positions.add-permissions")}
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
            {t("organigrama.areasandpositions-perfil.tab1.tab2.menu-positions.historial-collaborator")}
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
            {t("organigrama.areasandpositions-perfil.tab1.tab2.menu-positions.historial-position")}
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
             {t("organigrama.areasandpositions-perfil.tab1.tab2.menu-positions.collaborator-down")}
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
          {t("organigrama.areasandpositions-perfil.tab1.tab2.menu2-positions.edit-skills")}
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
           {t("organigrama.areasandpositions-perfil.tab1.tab2.menu2-positions.edit-experience")}
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
             {t("organigrama.areasandpositions-perfil.tab1.menu-collaborator.add-file")}
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
            {t("organigrama.areasandpositions-perfil.tab1.menu-collaborator.record-position")}
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
              <span>{t("organigrama.areasandpositions-perfil.tab1.text1")}</span>
              <br></br>
              <span>{t("organigrama.areasandpositions-perfil.tab1.text2")}</span>
              <br></br>
              <span className="iconGreen">{t("organigrama.areasandpositions-perfil.tab1.positions-mail")}</span>
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
                      <b>{t("organigrama.areasandpositions-perfil.tab1.birthday-date")}</b>
                      <br></br>
                      <span>
                      29-jun-1987
                      </span>
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <b>{t("organigrama.areasandpositions-perfil.tab1.entry-date")}</b>
                      <br></br>
                      <span>
                      01-ENE-2015
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "20px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <b>{t("organigrama.areasandpositions-perfil.tab1.gender")}</b>
                      <br></br>
                      <span>
                      Masculino
                      </span>
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <b>{t("organigrama.areasandpositions-perfil.tab1.marital-status")}</b>
                      <br></br>
                      <span>
                      Soltero
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "20px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <b>{t("organigrama.areasandpositions-perfil.tab1.nationality")}</b>
                      <br></br>
                      <span>
                      Mexicana
                      </span>
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <b>{t("organigrama.areasandpositions-perfil.tab1.city")}</b>
                      <br></br>
                      <span>
                      Ciudad de México
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "20px" }}
                  >
                    <Col className="gutter-row" span={12}>
                     <b>{t("organigrama.areasandpositions-perfil.tab1.teams-which")}</b>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "20px", paddingBottom: "10px" }}
                    className="dividerBottomFull"
                  >
                    <Col className="gutter-row" span={12}>
                      <span className="link">{t("organigrama.areasandpositions-perfil.tab1.team")}</span>
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <span>
                        <b>{t("organigrama.areasandpositions-perfil.tab1.master")}</b>
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "10px" }}
                  >
                    <Col className="gutter-row" span={11}>
                      <span className="link">{t("organigrama.areasandpositions-perfil.tab1.team-Evaluast-lik")}</span>
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
                        <b>{t("organigrama.areasandpositions-perfil.tab1.proccess-result")}</b>
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "8px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span className="link">{t("organigrama.areasandpositions-perfil.tab1.evaluation")}</span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "8px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span className="link">{t("organigrama.areasandpositions-perfil.tab1.evaluation-a")}</span>
                    </Col>
                  </Row>
                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "8px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span className="link">{t("organigrama.areasandpositions-perfil.tab1.evaluation-b")}</span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "8px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span className="link">{t("organigrama.areasandpositions-perfil.tab1.plans-developing")}</span>
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
                        <span className="link">{t("organigrama.areasandpositions-perfil.tab1.proccedings")}</span>
                      </Link>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tab={t("organigrama.areasandpositions-perfil.tab1.tab2.title")}key="2">
                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "10px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <b>{t("organigrama.areasandpositions-perfil.tab1.tab2.level-position")}</b>
                      <br></br>
                      <span>
                      {t("organigrama.areasandpositions-perfil.tab1.tab2.manager")}
                      </span>
                    </Col>
                    <Col>
                      <b>{t("organigrama.areasandpositions-perfil.tab1.tab2.level-post")}</b>
                      <br></br>
                      <span>
                      {t("organigrama.areasandpositions-perfil.tab1.tab2.manager-a")}
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "10px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <b>{t("organigrama.areasandpositions-perfil.tab1.tab2.taip-position")}</b>
                      <br></br>
                      <span>
                      {t("organigrama.areasandpositions-perfil.tab1.tab2.position-key")}
                      </span>
                    </Col>
                    <Col>
                     <b>{t("organigrama.areasandpositions-perfil.tab1.tab2.level-risk")}</b>
                      <br></br>
                      <span>
                      {t("organigrama.areasandpositions-perfil.tab1.tab2.half")}
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "10px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <b>{t("organigrama.areasandpositions-perfil.tab1.tab2.branch")}</b>
                      <br></br>
                      <span>
                      {t("organigrama.areasandpositions-perfil.tab1.tab2.town")}
                      </span>
                    </Col>
                    <Col>
                      <b>{t("organigrama.areasandpositions-perfil.tab1.tab2.area")}</b>
                      <br></br>
                      <span>
                      {t("organigrama.areasandpositions-perfil.tab1.tab2.marketing")}
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "10px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <b>{t("organigrama.areasandpositions-perfil.tab1.tab2.report-to")}</b>
                      <br></br>
                      <span>
                      {t("organigrama.areasandpositions-perfil.tab1.tab2.direction-corporate")}
                      </span>
                    </Col>
                  </Row>

                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    style={{ marginTop: "10px" }}
                  >
                    <Col className="gutter-row" span={12}>
                      <b>{t("organigrama.areasandpositions-perfil.tab1.tab2.mail-to")}</b>
                      <br></br>
                      <span>
                      {t("organigrama.areasandpositions-perfil.tab1.tab2.name-mail")}
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
              <h3>{t("organigrama.areasandpositions-perfil.tab1.skills-collaborator")}</h3>
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
                <b>{t("organigrama.areasandpositions-perfil.tab1.level-studies")}</b>
              </span>
            </Col>
            <Col className="gutter-row" span={12}>
              <span>
                <b>{t("organigrama.areasandpositions-perfil.tab1.years")}</b>
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
                <b>{t("organigrama.areasandpositions-perfil.tab1.languages")}</b>
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
                <b>{t("organigrama.areasandpositions-perfil.tab1.skills-techniques")}</b>
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
                <b>{t("organigrama.areasandpositions-perfil.tab1.experience-labor")}</b>
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
                <PlusCircleOutlined /> {t("organigrama.areasandpositions-perfil.tab1.add-experience")}
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
              <h3>{t("organigrama.areasandpositions-perfil.tab1.tab2.skills-position")}</h3>
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
              <b>{t("organigrama.areasandpositions-perfil.tab1.tab2.level-study")}</b>
              <br></br>
              <span>
              {t("organigrama.areasandpositions-perfil.tab1.tab2.bachelor")}
              </span>
            </Col>
            <Col className="gutter-row" span={12}>
             <b>{t("organigrama.areasandpositions-perfil.tab1.tab2.years")}</b>
              <br></br>
              <span>
              {t("organigrama.areasandpositions-perfil.tab1.tab2.eight-years")}
              </span>
            </Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={12}>
              <span>{t("organigrama.areasandpositions-perfil.tab1.tab2.languages")}</span>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Tag className="tagNormal">Ingles-Avanzado</Tag>
              <Tag className="tagNormal">Chino-Básico</Tag>
            </Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "20px" }}
          >
            <Col className="gutter-row" span={12}>
              <span>{t("organigrama.areasandpositions-perfil.tab1.tab2.skills-techniques")}</span>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Tag className="tagNormal">Photoshop - Avanzado</Tag>
              <Tag className="tagNormal">Illustrator - Medio</Tag>
              <Tag className="tagNormal">Tweetdeck</Tag>
              <Tag className="tagNormal TagAreaGreen">Hootsuite - Avanzado</Tag>
              <Tag className="tagNormal">Microsoft Office </Tag>
              <Tag className="tagNormal">Uso de algoritmos</Tag>
              <Tag className="tagNormal TagAreaGreen">Uso de fórmulas</Tag>
              <Tag className="tagNormal">Uso de aparatos</Tag>
              <Tag className="tagNormal">Prezi</Tag>
              <Tag className="tagNormal TagAreaRed">After Effects</Tag>
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
              <h3>{t("organigrama.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.title")}</h3>
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
                <Form.Item name="level" label={t("organigrama.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.level-education-label")}>
                  <Select placeholder={t("organigrama.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.education-superior-placeholder")}>
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
                <Form.Item name="years" label={t("organigrama.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.years-experience-label")}>
                  <Select placeholder={t("organigrama.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.select-option-placeholder")}>
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
                {t("organigrama.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.btn-save0")}
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
                <Form.Item name="techniqueskills" label={t("organigrama.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.techniques-label")}>
                  <Input type="text" placeholder={t("organigrama.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.truck-load-placeholder")} />
                </Form.Item>
              </Col>

              <Col
                className="gutter-row"
                style={{ marginTop: "30px" }}
                span={2}
              >
                <Button htmlType="submit" className="primary">
                {t("organigrama.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.btn-save")}
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
                <Form.Item name="languajes" label={t("organigrama.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.languages-label")}>
                  <Input type="text" placeholder={t("organigrama.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.english-advanced-placeholder")} />
                </Form.Item>
              </Col>

              <Col
                className="gutter-row"
                style={{ marginTop: "30px" }}
                span={2}
              >
                <Button htmlType="submit" className="primary">
                {t("organigrama.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.btn-save2")}
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
                <b>{t("organigrama.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.experience-professional")}</b>
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
                <PlusCircleOutlined /> {t("organigrama.areasandpositions-perfil.tab1.tab2.edit-skills-collaborator.add-experience")}
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
