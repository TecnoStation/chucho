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
  Tooltip,
} from "antd";
import More from "../../assets/img/icons/more_vert-24px.svg";
import { Link, useHistory, useLocation, } from "react-router-dom";
import { RiPencilFill } from "react-icons/ri";
import { PlusCircleOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { IoMdSquare } from "react-icons/io";
import Avatar from "../../assets/img/avatar.png";
import Treearea from "../../components/Tree/Treearea";
import { useTranslation } from "react-i18next";
import Modalcompetencies from "../../components/Modals/Modalcompetencies/Modalcompetencies";
import Modalcompetencies2 from "../../components/Modals/Modalcompetencies/Modalcompetencies";
import Competencies from "../../components/Competencies/Competencies";
import Competencies2 from "../../components/Competencies/Competencies";
import ModalPermissions from "../../components/Modals/ModalPermissions/ModalPermissions";
import ModalPassword from "../../components/Modals/ModalPassword/ModalPassword";
import { useForm } from "antd/lib/form/Form";
import Screens from "../../components/Screens/Screens";
import SelectDinamic from "../../components/SelectDinamic/SelectDinamic";

import "./AreasAndPositions.scss";

const { Option } = Select;

const text = (<>
  <span style={{color: "#000"}}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</b></span><br/><br/><span style={{color: "#000"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volup</span>
</>);

export default function AreasAndPositionsAddJob() {
  const [t, i18n] = useTranslation("global");
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

  const [message, setMessage] = useState(false);
  const [firtFlag, setFirtFlag] = useState(true);
  const [form] = useForm();
  const onFinish = (values) => {
    firtFlag ? setMessage(true) : console.log("Success:", values);
  };
  ///organigrama/areasandpositions-collaborator
  //---------------- permissions / password---------------------------------
  const [Permissions, setPermissions] = useState(false);
  const [Password, setPassword] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tabState = query.get("tab") || "1";

  const tabs = ["1", "2"];
  const [Active, setActive] = useState(tabState);

  const menu = (
    <Menu style={{
      position: "absolute",
      marginLeft: "-90px",
      marginTop: "-20px",
    }} >
      <Menu.Item key="3">
        <Link
          to="#"
          onClick={() => {
            setPermissions(true);
          }}
        >
          Agregar permisos
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link
          to="#"
          onClick={() => {
            setPassword({
              titleModal: "Eliminar puesto",
              messageModal:
                "Al eliminar un puesto de tu organización ya no se verá reflejado en tu organigrama",
              visible: true,
              type: 2,
              messageWarning: "Has eliminado el puesto",
              titleWarning: "¡Completado!",
              function: () => {
                history.push({
                  pathname:
                    "/" +
                    t("routes.organigram") +
                    "/" +
                    t("paths_organigram.areasandpositions"),
                  search: "?tab=2",
                });
              },
            });
          }}
        >
          Eliminar puesto
        </Link>
      </Menu.Item>
    </Menu>
  );
  //---------------- End permissions / password---------------------------------

  //--------------- competences-----------------------------------------
  const [component, setComponent] = useState("");
  const [modalComp, setModalComp] = useState(false);
  const [slider, setSlider] = useState(50);
  const [editionModeSlider, setEditionModeSlider] = useState(false);
  const [competencies, setCompetencies] = useState([]);
  const [competenceName, setCompetenceName] = useState("");
  const [competenciesList, setCompetenciesList] = useState([
    { id: "0", name: "Actitud de Servicio", visible: true },
    { id: "1", name: "Apego a Normas", visible: true },
    { id: "2", name: "Capacidad para Aprender", visible: true },
    { id: "3", name: "Comunicación Efectiva", visible: true },
    {
      id: "4",
      name: "Control de Procesos - Administración",
      visible: true,
    },
    { id: "5", name: "Creatividad", visible: true },
  ]);

  //--------------- End competences-----------------------------------------

  //--------------- competences 2-----------------------------------------
  const [modalComp2, setModalComp2] = useState(false);
  const [slider2, setSlider2] = useState(50);
  const [editionModeSlider2, setEditionModeSlider2] = useState(false);
  const [competencies2, setCompetencies2] = useState([]);
  const [competenceName2, setCompetenceName2] = useState("");
  const [competenciesList2, setCompetenciesList2] = useState([
    { id: "0", name: "Actitud de Servicio", visible: true },
    { id: "1", name: "Apego a Normas", visible: true },
    { id: "2", name: "Capacidad para Aprender", visible: true },
    { id: "3", name: "Comunicación Efectiva", visible: true },
    {
      id: "4",
      name: "Control de Procesos - Administración",
      visible: true,
    },
    { id: "5", name: "Creatividad", visible: true },
  ]);

  //--------------- End competences-----------------------------------------

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

  //----------------- Selects Dinamic Data ------------------------------------

  const data = [
    {
      id: 0,
      value: "dato1",
      name: "dato1",
    },
    {
      id: 1,
      value: "dato2",
      name: "dato2",
    },
  ];

  const tagRender = ({ label, closable }) => {
    return (
      <Tag className="tagNormal" closable={closable}>
        {label}
      </Tag>
    );
  };
  //----------------- End Selects Dinamic Data --------------------------------

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
                <b className="primaryText">
                  {t("organigram.areasandpositions-addjob.title")}
                </b>
              </h3>
              <span className="secondaryText">
                {t("organigram.areasandpositions-addjob.tex")}
              </span>
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
          <Form
            Formname="form1"
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              position: "",
            }}
            form={form}
          >
            <div className="formWork">
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
                name="bussines"
                label={t(
                  "organigram.areasandpositions-addjob.label-nameposition"
                )}
              >
                <Input
                  type="text"
                  placeholder={t(
                    "organigram.areasandpositions-addjob.placeholder-position"
                  )}
                />
              </Form.Item>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: t("field-requiered"),
                      },
                    ]}
                    name="activity"
                    label={t(
                      "organigram.areasandpositions-addjob.label-levelposition"
                    )}
                  >
                      <Tooltip color="#FFFDE7" title={text}>
                        <span style={{ marginLeft: "123px", fontSize: "13px", marginTop: "-29px", position: "absolute" }}>
                        <QuestionCircleOutlined className="iconSureGray" />
                        </span>
                     </Tooltip> 
                    <SelectDinamic
                      placeholder={t(
                        "organigram.areasandpositions-addjob.placeholder-direction"
                      )}
                      data={data}
                    />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={12}>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: t("field-requiered"),
                      },
                    ]}
                    name="subactivity"
                    label={t(
                      "organigram.areasandpositions-addjob.label-positionpersonalized"
                    )}
                  >
                    <Tooltip color="#FFFDE7" title={text}>
                        <span style={{ marginLeft: "216px", fontSize: "13px", marginTop: "-29px", position: "absolute" }}>
                        <QuestionCircleOutlined className="iconSureGray" />
                        </span>
                     </Tooltip>
                    <SelectDinamic
                      placeholder={t(
                        "organigram.areasandpositions-addjob.placeholder-personalized"
                      )}
                      data={data}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: t("field-requiered"),
                      },
                    ]}
                    name="size"
                    label={t(
                      "organigram.areasandpositions-addjob.label-kindposition"
                    )}
                  >
                    <SelectDinamic
                      placeholder={t(
                        "organigram.areasandpositions-addjob.placeholder-positionkey"
                      )}
                      data={data}
                    />
                  </Form.Item>
                </Col>
                <Col gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span={12}>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: t("field-requiered"),
                      },
                    ]}
                    name="levelRisk"
                    label={t(
                      "organigram.areasandpositions-addjob.label-levelrisk"
                    )}
                  >
                    <SelectDinamic
                      placeholder={t(
                        "organigram.areasandpositions-addjob.placeholder-high"
                      )}
                      data={data}
                    />
                  </Form.Item>
                </Col>
                <Col gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span={12}>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: t("field-requiered"),
                      },
                    ]}
                    name="studyLevel"
                    label={t(
                      "organigram.areasandpositions-addjob.label-levelstudies"
                    )}
                  >
                    <SelectDinamic
                      placeholder={t(
                        "organigram.areasandpositions-addjob.placeholder-educationhigher"
                      )}
                      data={data}
                    />
                  </Form.Item>
                </Col>
                <Col gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span={12}>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: t("field-requiered"),
                      },
                    ]}
                    name="yearsExperencie"
                    label={t(
                      "organigram.areasandpositions-addjob.label-yearsexperience"
                    )}
                  >
                    <SelectDinamic
                      placeholder={t(
                        "organigram.areasandpositions-addjob.placeholder-selec"
                      )}
                      data={data}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </div>

            <Row style={{ marginTop: "20px" }}>
              <Col className="primaryText" span={24}>
                <span>
                  <b>
                    {t(
                      "organigram.areasandpositions-addjob.abilities-for-position"
                    )}
                  </b>
                </span>
                <br />
                <br />
              </Col>
            </Row>

            <Row>
              <Col className="secondaryTex" span={24}>
                <Form.Item
                  name="skills"
                  rules={[
                    {
                      required: true,
                      message: "*Campo requerido",
                    },
                  ]}
                  label={t("organigram.collaborator-form.skills-label")}
                >
                  <Select
                    mode="tags"
                    tagRender={tagRender}
                    placeholder={t(
                      "organigram.collaborator-form.skills-placeholder"
                    )}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <span>
                  <b className="secondaryText">
                    {t("organigram.areasandpositions-addjob.languages")}
                  </b>
                </span>
                <br />
                <br />
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Form.Item
                  name="languajes"
                  rules={[
                    {
                      required: true,
                      message: "*Campo requerido",
                    },
                  ]}
                  label={t("organigram.collaborator-form.languajes-label")}
                >
                  <Select
                    mode="tags"
                    tagRender={tagRender}
                    placeholder={t(
                      "organigram.collaborator-form.languajes-placeholder"
                    )}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row className="dividerBottomFull">
              <Col span={10}>
                <b className="secondaryText">
                  {t("organigram.areasandpositions-addjob.competences")}
                </b>
                <Tooltip color="#FFFDE7" title={text}>
                  <span style={{ marginLeft: "8px", fontSize: "13px" }}>
                    <QuestionCircleOutlined className="iconSureGray" />
                  </span>
                </Tooltip>
              </Col>
              <Col style={{ textAlign: "center" }} span={14}>
                <b className="secondaryText">
                  {t("organigram.areasandpositions-addjob.level")}
                </b>
              </Col>
            </Row>

            <Row style={{ marginTop: "10px" }}>
              <Col span={17}>
                <b className="primaryText">Creatividad</b>
              </Col>
              <Col span={5}>3</Col>
              <Col span={2}></Col>
            </Row>

            <Row className="tagTwo" style={{ marginTop: "10px" }}>
              <Col span={17}>
                <b className="primaryText">
                  Solución de Problemas - Desarrolla Alternativas
                </b>
              </Col>
              <Col span={5}>3</Col>
              <Col span={2}>
                <RiPencilFill
                  style={{ marginRight: "10px", marginTop: "7px" }}
                />
              </Col>
            </Row>

            <Row className="dividerBottomFull" style={{ marginTop: "20px" }}>
              <Col span={16}>
                <b className="secondaryText">
                  {t("organigram.areasandpositions-addjob.competences2")}
                </b>
                <Tooltip color="#FFFDE7" title={text}>
                  <span style={{ marginLeft: "8px", fontSize: "13px" }}>
                    <QuestionCircleOutlined className="iconSureGray" />
                  </span>
                </Tooltip>
              </Col>
              <Col span={8}>
                <Link
                  to="#"
                  onClick={() => {
                    setModalComp2(true);
                    setSlider2(50);
                    setComponent(2);
                  }}
                >
                  <PlusCircleOutlined />{" "}
                  <span style={{ marginLeft: "8px" }}>
                    {t("organigram.areasandpositions-addjob.link-addcompetens")}
                  </span>
                </Link>
              </Col>
            </Row>

            <div id="competencies" className="competencies">
              <Competencies2
                competencies={competencies2}
                setCompetencies={setCompetencies2}
                competenciesList={competenciesList2}
                setCompetenciesList={setCompetenciesList2}
                competenceName={competenceName2}
                setCompetenceName={setCompetenceName2}
                setSlider={setSlider2}
                slider={slider2}
                setEditionModeSlider={setEditionModeSlider2}
                editionModeSlider={editionModeSlider2}
              />
            </div>

            <Row className="dividerBottomFull" style={{ marginTop: "20px" }}>
              <Col span={16}>
                <b className="secondaryText">
                  {t("organigram.areasandpositions-addjob.competen-position")}
                </b>
                <Tooltip color="#FFFDE7" title={text}>
                  <span style={{ marginLeft: "8px", fontSize: "13px" }}>
                    <QuestionCircleOutlined className="iconSureGray" />
                  </span>
                </Tooltip>
              </Col>
              <Col span={8}>
                <Link
                  to="#"
                  onClick={() => {
                    setModalComp(true);
                    setSlider(50);
                    setComponent(1);
                  }}
                >
                  <PlusCircleOutlined />{" "}
                  <span style={{ marginLeft: "8px", fontSize: "13px" }}>
                    {t("organigram.areasandpositions-addjob.link-addcompetens")}
                  </span>
                </Link>
              </Col>
            </Row>

            <div id="competencies" className="competencies">
              <Competencies
                competencies={competencies}
                setCompetencies={setCompetencies}
                competenciesList={competenciesList}
                setCompetenciesList={setCompetenciesList}
                competenceName={competenceName}
                setCompetenceName={setCompetenceName}
                setSlider={setSlider}
                slider={slider}
                setEditionModeSlider={setEditionModeSlider}
                editionModeSlider={editionModeSlider}
              />
            </div>

            <Row style={{ marginTop: "30px" }}>
              <Col style={{ textAlign: "center" }} span={14} className="primaryText">
                  {t("organigram.areasandpositions-addjob.fields-obligatory")}
              </Col>
              <Col style={{ textAlign: "right" }} span={10}>
                <Link
                  style={{ marginRight: "16px" }}
                  to={
                    "/" +
                    t("routes.organigram") +
                    "/" +
                    t("paths_organigram.areasandpositions-collaborator")
                  }
                >
                  <Button className="secondary">
                    {t("organigram.areasandpositions-addjob.btn-cancel")}
                  </Button>
                </Link>
                <Button htmlType="submit" className="primary">
                  {t("organigram.areasandpositions-addjob.btn-save")}
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>

        <Col className="gutter-row dividerLeft" span={10}>
          <Row>
            <Col span={24}>
              <h3 className="primaryText">
                {t("organigram.areasandpositions-addjob.title1")}
              </h3>
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
                <b className="secondaryText">
                  {t("organigram.areasandpositions-addjob.tex-colaborator")}
                </b>
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
        component={component}
        modalComp={modalComp}
        setModalComp={setModalComp}
        competenciesList={competenciesList}
        setCompetencies={setCompetencies}
        competencies={competencies}
        setCompetenciesList={setCompetenciesList}
        competenceName={competenceName}
        setCompetenceName={setCompetenceName}
        slider={slider}
        setSlider={setSlider}
        editionModeSlider={editionModeSlider}
        setEditionModeSlider={setEditionModeSlider}
      />

      <Modalcompetencies2
        component={component}
        modalComp={modalComp2}
        setModalComp={setModalComp2}
        competenciesList={competenciesList2}
        setCompetencies={setCompetencies2}
        competencies={competencies2}
        setCompetenciesList={setCompetenciesList2}
        competenceName={competenceName2}
        setCompetenceName={setCompetenceName2}
        slider={slider2}
        setSlider={setSlider2}
        editionModeSlider={editionModeSlider2}
        setEditionModeSlider={setEditionModeSlider2}
      />

      <ModalPermissions
        Permissions={Permissions}
        setPermissions={setPermissions}
      />

      <ModalPassword Password={Password} setPassword={setPassword} />
      <Screens message={message} setMessage={setMessage} messageType={1} />
    </div>
  );
}
