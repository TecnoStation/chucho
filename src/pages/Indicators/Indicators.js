import React, { useState } from "react";
import {
  Col,
  Row,
  Menu,
  Dropdown,
  Layout,
  Tabs,
  Avatar,
  Card,
  Input,
  Button,
} from "antd";
import {
  CaretDownOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";
import { IoMdCloudDownload } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { MdShowChart } from "react-icons/md";
import { GrDocumentUpload } from "react-icons/gr";
import { BsFillGearFill } from "react-icons/bs";
import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiArrowUpSFill,
} from "react-icons/ri";
import Increase from "../../assets/img/icons/aumentar.svg";
import Maintain from "../../assets/img/icons/mantener.svg";
import Diminish from "../../assets/img/icons/disminuir.svg";
import ModalUpdateIndicator from "../../components/Modals/ModalUpdateIndicator/ModalUpdateIndicator";
import ModalHistorial from "../../components/Modals/ModalHistorial/ModalHistorial";
import { Line } from "@ant-design/charts";
import Cup from "../../assets/img/icons/emoji_events-24px.svg";
import Medalgold from "../../assets/img/icons/military_tech-24px.svg";
import Medalplate from "../../assets/img/icons/military_tech-24px_2.svg";
import Medalcobrum from "../../assets/img/icons/military_tech-24px_3.svg";
import Editor from "../../components/Editor/Editor";
import { FiUpload } from "react-icons/fi";
import More from "../../assets/img/icons/more_vert-24px.svg";

import "./Indicators.scss";

const { Search } = Input;
const { Header } = Layout;
const { TabPane } = Tabs;

function Indicators({ user }) {
  const [t, i18n] = useTranslation("global");
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link
          to={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-perfil")
          }
        >
          {t("organigram.perfil.view-perfil")}
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">{t("organigram.perfil.close-session")}</Menu.Item>
    </Menu>
  );
  function callback(key) {
    console.log(key);
  }

  const [Indicator, setIndicator] = useState(false);
  const [Historial, setHistorial] = useState(false);

  const data = [
    { weeks: "1", value: 5.3 },
    { weeks: "2", value: 5.0 },
    { weeks: "3", value: 5.4 },
    { weeks: "4", value: 5.5 },
    { weeks: "5", value: 5.9 },
    { weeks: "6", value: 5.5 },
    { weeks: "7", value: 6 },
    { weeks: "8", value: 6.2 },
    { weeks: "9", value: 6 },
    { weeks: "10", value: 6.5 },
    { weeks: "11", value: 6.6 },
    { weeks: "12", value: 6.8 },
  ];

  const config = {
    data,
    xField: "weeks",
    yField: "value",
    renderer: "svg",

    lineStyle: { stroke: "#AAB4C8", lineWidth: 1 },
    point: {
      size: 2,
      shape: "circle",
      style: { fill: "#AAB4C8" },
    },
    yAxis: {
      title: {
        text: "Desempeño",
        style: { fontSize: 16 },
      },
      label: false,
      line: { style: { stroke: "#aaa" } },
      grid: {
        line: false,
      },
    },
    xAxis: {
      title: {
        text: "Semanas",
        style: { fontSize: 16 },
      },
    },

    annotations: [
      {
        type: "line",
        start: ["min", "median"],
        end: ["max", "median"],
        offsetY: 37.5,
        style: {
          stroke: "#AADB1E",
          lineWidth: 1,
        },
      },
      {
        type: "text",
        position: ["min", "median"],
        content: "Cumplimiento de expectativas",
        offsetY: 50,
        offsetX: 110,
        style: { fill: "#AADB1E", fontSize: 12, fontWeight: "bold" },
      },
    ],
  };

  const [value, setValue] = useState(false);
  const [visible, setVisible] = useState("iconsize2 show");
  const [visible2, setVisible2] = useState("iconsize2 hide");

  const [indicators, setIndicators] = useState([
    {
      idIndicator: 0,
      name: "Indicador clave - Semanal",
      frecuency:
        "Mejorar la semántica en Html5 y los metadatos de cada sección.",
      type: 1,
      number: "",
      objetive: 10,
      tendencie: 100,
    },
    {
      idIndicator: 1,
      name: "Indicador clave - Mensual",
      frecuency: "Publicar 10 artículos al mes en el blog de la organización",
      type: 1,
      number: "",
      objetive: 5,
      tendencie: 120,
    },
    {
      idIndicator: 2,
      name: "Indicador clave - Semanal",
      frecuency: "Mantener en menos de 10 los bugs",
      type: 2,
      number: "6",
      objetive: 9,
      tendencie: 100,
    },
    {
      idIndicator: 3,
      name: "Indicador clave - Semanal",
      frecuency: "Disminuir los tickets de 15 a 5 a la semana",
      type: 3,
      number: "4",
      objetive: 5,
      tendencie: 100,
    },
  ]);

  const [indicators2, setIndicators2] = useState([
    {
      idIndicator: 0,
      name: "Indicador clave  - Cada martes",
      frecuency: "Tráfico en la página web",
      duration: "1 año",
      court: "Q1/ 01-ENE-2021 a 31-MAR-2021",
      type: 1,
      acumulate: 56,
      totally: 4,
      number: "",
      objetive: 1200,
      tendencie: 100,
      asignedTo: [
        {
          idCollaborator: 0,
          img: "http://tecnostation.com/evo/static/media/avatar.9d1676ec.png",
        },
        {
          idCollaborator: 1,
          img: "http://tecnostation.com/evo/static/media/avatar.9d1676ec.png",
        },
        {
          idCollaborator: 2,
          img: "http://tecnostation.com/evo/static/media/avatar.9d1676ec.png",
        },
        {
          idCollaborator: 3,
          img: "http://tecnostation.com/evo/static/media/avatar.9d1676ec.png",
        },
      ],
    },
    {
      idIndicator: 1,
      name: "Indicador clave  - Cada martes",
      frecuency: "Tráfico en Facebook",
      duration: "1 año",
      court: "Q1/ 01-ENE-2021 a 31-MAR-2021",
      type: 1,
      acumulate: 56,
      totally: 4,
      number: "",
      objetive: 1200,
      tendencie: 120,
      asignedTo: [
        {
          idCollaborator: 0,
          img: "http://tecnostation.com/evo/static/media/avatar.9d1676ec.png",
        },
        {
          idCollaborator: 1,
          img: "http://tecnostation.com/evo/static/media/avatar.9d1676ec.png",
        },
        {
          idCollaborator: 2,
          img: "http://tecnostation.com/evo/static/media/avatar.9d1676ec.png",
        },
        {
          idCollaborator: 3,
          img: "http://tecnostation.com/evo/static/media/avatar.9d1676ec.png",
        },
      ],
    },

    {
      idIndicator: 2,
      name: "Indicador clave  - Histórico",
      frecuency: "Tráfico en MySpace",
      duration: "1 año",
      court: "Q1/ 01-ENE-2016 a 31-MAR-2016",
      type: 1,
      acumulate: 1000,
      totally: 86,
      number: "",
      objetive: 1200,
      tendencie: 84,
      asignedTo: [
        {
          idCollaborator: 0,
          img: "http://tecnostation.com/evo/static/media/avatar.9d1676ec.png",
        },
        {
          idCollaborator: 1,
          img: "http://tecnostation.com/evo/static/media/avatar.9d1676ec.png",
        },
        {
          idCollaborator: 2,
          img: "http://tecnostation.com/evo/static/media/avatar.9d1676ec.png",
        },
        {
          idCollaborator: 3,
          img: "http://tecnostation.com/evo/static/media/avatar.9d1676ec.png",
        },
      ],
    },
  ]);

  const menu2 = (
    <Menu style={{ marginLeft: "-50px" }}>
      <Menu.Item key="0">
        <span>Editar</span>
      </Menu.Item>
      <Menu.Item key="1">
        <span>Eliminar</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Header>
        <Row>
          <Col id="tabHead" span={19}>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Mis indicadores clave" key="1">
                <Row>
                  <Col span={21}></Col>
                  <Col
                    style={{
                      background: "white",
                      textAlign: "center",
                      paddingRight: "5px",
                      paddingLeft: "5px",
                      height: "32px",
                      width: "32px",
                    }}
                    span={1}
                  >
                    <Link
                      to={
                        "/" +
                        t("routes.indicators") +
                        "/" +
                        t("path_indicator.panel")
                      }
                    >
                      <span>
                        <MdShowChart className="iconsize3 iconGray" />
                      </span>
                    </Link>
                  </Col>

                  <Col
                    className="dividerLeft"
                    style={{
                      background: "white",
                      textAlign: "center",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                      height: "32px",
                      width: "32px",
                    }}
                    span={1}
                  >
                    <span>
                      <IoMdCloudDownload className="iconsize3 iconGray" />
                    </span>
                  </Col>
                </Row>

                <Row style={{ textAlign: "center" }}>
                  <Col
                    style={{ paddingTop: "20px", paddingRight: "30px" }}
                    span={7}
                  >
                    <span>Nombre y frecuencia</span>
                  </Col>
                  <Col style={{ paddingTop: "20px" }} span={3}>
                    <span>Tipo</span>
                  </Col>
                  <Col span={2}>
                    <span>Actualizar indicador</span>
                  </Col>
                  <Col
                    style={{ paddingTop: "20px", marginLeft: "30px" }}
                    span={3}
                  >
                    <span>Objetivo</span>
                  </Col>
                  <Col style={{ paddingTop: "20px" }} span={4}>
                    <span>Tendencia</span>
                  </Col>
                  <Col style={{ paddingTop: "20px" }} span={4}>
                    <span>Acciones</span>
                  </Col>
                </Row>

                <Row>
                  <Col span={24}>
                    <Card
                      style={{
                        borderRadius: "10px",
                        marginTop: "10px",
                        height: "560px",
                      }}
                    >
                      {indicators.map((indicator, item) =>
                        item === 0 ? (
                          <Row
                            className="dividerBottomFull"
                            style={{
                              textAlign: "left",
                              paddingBottom: "20px",
                            }}
                          >
                            <Col style={{ paddingRight: "80px" }} span={7}>
                              <span
                                className="iconGreen"
                                style={{ fontWeight: "bold" }}
                              >
                                {indicator.name}
                              </span>
                              <br />
                              <Link
                                onClick={() => {
                                  setIndicator(true);
                                }}
                                to="#"
                              >
                                <span>{indicator.frecuency}</span>
                              </Link>
                            </Col>
                            <Col
                              style={{
                                textAlign: "center",
                                paddingRight: "20px",
                              }}
                              span={3}
                            >
                              {indicator.type === 1 ? (
                                <>
                                  <span>
                                    <img
                                      src={Increase}
                                      alt="Increase"
                                      width="17"
                                    />
                                  </span>
                                  <br />
                                  <span style={{ fontSize: "10px" }}>
                                    Aumentar
                                  </span>
                                </>
                              ) : indicator.type === 2 ? (
                                <>
                                  <span>
                                    <img
                                      src={Maintain}
                                      alt="Maintain"
                                      width="17"
                                    />
                                  </span>
                                  <br />
                                  <span style={{ fontSize: "10px" }}>
                                    Mantener
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span>
                                    <img
                                      src={Diminish}
                                      alt="Increase"
                                      width="17"
                                    />
                                  </span>
                                  <br />
                                  <span style={{ fontSize: "10px" }}>
                                    Disminuir
                                  </span>
                                </>
                              )}
                            </Col>
                            <Col style={{ textAlign: "center" }} span={2}>
                              <span>
                                <Input
                                  defaultValue={indicator.number}
                                  onClick={() => {
                                    setIndicator(true);
                                  }}
                                  style={{
                                    width: "72px",
                                    borderRadius: "5px",
                                    textAlign: "center",
                                  }}
                                  type="text"
                                  placeholder="Ej. 8"
                                />
                              </span>
                            </Col>
                            <Col
                              style={{
                                marginLeft: "20px",
                                textAlign: "center",
                                paddingLeft: "30px",
                              }}
                              span={3}
                            >
                              <span>{indicator.objetive}</span>
                            </Col>
                            <Col
                              style={{
                                textAlign: "center",
                                paddingRight: "30px",
                              }}
                              span={5}
                            >
                              {indicator.tendencie > 100 ? (
                                <>
                                  <span className="iconGreen">
                                    {indicator.tendencie}%
                                  </span>
                                  <span>
                                    <RiArrowUpSFill
                                      style={{
                                        position: "absolute",
                                        top: "-4px",
                                      }}
                                      className="iconsize3 iconGreen"
                                    />
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span>{indicator.tendencie}%</span>
                                  <span>
                                    <RiArrowUpSFill
                                      style={{
                                        position: "absolute",
                                        top: "-4px",
                                      }}
                                      className="iconsize3"
                                    />
                                  </span>
                                </>
                              )}
                            </Col>
                            <Col
                              style={{
                                textAlign: "center",
                                marginTop: "5px",
                              }}
                              span={1}
                            >
                              <GrDocumentUpload className="iconsize2 iconBlue" />
                            </Col>
                            <Col
                              style={{ height: "35px", textAlign: "center" }}
                              className="dividerLeft"
                              span={1}
                            >
                              <MdShowChart
                                onClick={() => {
                                  setHistorial(true);
                                }}
                                className="iconsize3 iconGray"
                              />
                            </Col>
                            <Col
                              style={{ height: "35px", textAlign: "center" }}
                              className="dividerLeft"
                              span={1}
                            >
                              <IoMdCloudDownload className="iconsize3 iconGray" />
                            </Col>
                          </Row>
                        ) : (
                          <Row
                            className="dividerBottomFull"
                            style={{
                              textAlign: "left",
                              paddingBottom: "20px",
                              marginTop: "20px",
                            }}
                          >
                            <Col style={{ paddingRight: "80px" }} span={7}>
                              <span
                                className="iconGreen"
                                style={{ fontWeight: "bold" }}
                              >
                                {indicator.name}
                              </span>
                              <br />
                              <Link
                                onClick={() => {
                                  setIndicator(true);
                                }}
                                to="#"
                              >
                                <span>{indicator.frecuency}</span>
                              </Link>
                            </Col>
                            <Col
                              style={{
                                textAlign: "center",
                                paddingRight: "20px",
                              }}
                              span={3}
                            >
                              {indicator.type === 1 ? (
                                <>
                                  <span>
                                    <img
                                      src={Increase}
                                      alt="Increase"
                                      width="17"
                                    />
                                  </span>
                                  <br />
                                  <span style={{ fontSize: "10px" }}>
                                    Aumentar
                                  </span>
                                </>
                              ) : indicator.type === 2 ? (
                                <>
                                  <span>
                                    <img
                                      src={Maintain}
                                      alt="Maintain"
                                      width="17"
                                    />
                                  </span>
                                  <br />
                                  <span style={{ fontSize: "10px" }}>
                                    Mantener
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span>
                                    <img
                                      src={Diminish}
                                      alt="Increase"
                                      width="17"
                                    />
                                  </span>
                                  <br />
                                  <span style={{ fontSize: "10px" }}>
                                    Disminuir
                                  </span>
                                </>
                              )}
                            </Col>
                            <Col style={{ textAlign: "center" }} span={2}>
                              <span>
                                <Input
                                  defaultValue={indicator.number}
                                  onClick={() => {
                                    setIndicator(true);
                                  }}
                                  style={{
                                    width: "72px",
                                    borderRadius: "5px",
                                    textAlign: "center",
                                  }}
                                  type="text"
                                  placeholder="Ej. 8"
                                />
                              </span>
                            </Col>
                            <Col
                              style={{
                                marginLeft: "20px",
                                textAlign: "center",
                                paddingLeft: "30px",
                              }}
                              span={3}
                            >
                              <span>{indicator.objetive}</span>
                            </Col>
                            <Col
                              style={{
                                textAlign: "center",
                                paddingRight: "30px",
                              }}
                              span={5}
                            >
                              {indicator.tendencie > 100 ? (
                                <>
                                  <span className="iconGreen">
                                    {indicator.tendencie}%
                                  </span>
                                  <span>
                                    <RiArrowUpSFill
                                      style={{
                                        position: "absolute",
                                        top: "-4px",
                                      }}
                                      className="iconsize3 iconGreen"
                                    />
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span>{indicator.tendencie}%</span>
                                  <span>
                                    <RiArrowUpSFill
                                      style={{
                                        position: "absolute",
                                        top: "-4px",
                                      }}
                                      className="iconsize3"
                                    />
                                  </span>
                                </>
                              )}
                            </Col>
                            <Col
                              style={{
                                textAlign: "center",
                                marginTop: "5px",
                              }}
                              span={1}
                            >
                              <GrDocumentUpload className="iconsize2 iconBlue" />
                            </Col>
                            <Col
                              style={{ height: "35px", textAlign: "center" }}
                              className="dividerLeft"
                              span={1}
                            >
                              <MdShowChart
                                onClick={() => {
                                  setHistorial(true);
                                }}
                                className="iconsize3 iconGray"
                              />
                            </Col>
                            <Col
                              style={{ height: "35px", textAlign: "center" }}
                              className="dividerLeft"
                              span={1}
                            >
                              <IoMdCloudDownload className="iconsize3 iconGray" />
                            </Col>
                          </Row>
                        )
                      )}
                    </Card>
                  </Col>
                </Row>

                <ModalUpdateIndicator
                  Indicator={Indicator}
                  setIndicator={setIndicator}
                  setHistorial={setHistorial}
                />
                <ModalHistorial
                  Historial={Historial}
                  setHistorial={setHistorial}
                />
              </TabPane>
              <TabPane tab="Mis evaluaciones" className="chart" key="2">
                <div
                  style={{
                    width: "976px",
                    height: "auto",
                  }}
                >
                  <h2
                    className="secondaryText"
                    style={{
                      textAlign: "left",
                      marginTop: "20px",
                      marginLeft: "30px",
                    }}
                  >
                    Mis evaluaciones
                  </h2>
                  <Row>
                    <Col span={24}>
                      <Card style={{ borderRadius: "8px" }}>
                        <Row>
                          <Col span={5}>
                            <span
                              style={{ fontSize: "16px" }}
                              className="primaryText"
                            >
                              <b>{t("evaluations.result-performance")}</b>
                            </span>
                            <div className="tagExpectative">
                              <span>{t("evaluations.text")}</span>
                            </div>
                            <div
                              style={{
                                paddingLeft: "15px",
                                marginTop: "10px",
                              }}
                            >
                              <span className="secondaryText">
                                {t("evaluations.last-evaluation")}
                              </span>
                              <span style={{ position: "absolute" }}>
                                <RiArrowDownSLine
                                  onClick={() => {
                                    setVisible("hide");
                                    setVisible2("iconsize2 show");
                                  }}
                                  className={visible}
                                />

                                <RiArrowRightSLine
                                  onClick={() => {
                                    setVisible2("hide");
                                    setVisible("iconsize2 show");
                                  }}
                                  className={visible2}
                                />
                              </span>
                            </div>
                          </Col>
                          <Col span={14}></Col>
                          <Col span={5}>
                            <Link to="#">
                              <Button
                                onClick={() => {
                                  // setModalDownload(true);
                                }}
                                className="btnBlue third"
                                size="default"
                              >
                                <IoMdCloudDownload className="iconAjust" />{" "}
                                <span
                                  style={{ color: "#fff" }}
                                  className="textAjust"
                                >
                                  {t("my-evaluations.download-report")}
                                </span>
                              </Button>
                            </Link>
                          </Col>
                        </Row>

                        <Row style={{ marginTop: "40px" }}>
                          <Col
                            style={{
                              textAlign: "center",
                              paddingLeft: "10px",
                            }}
                            span={11}
                          >
                            <span
                              className="secondaryText"
                              style={{ fontWeight: "bold" }}
                            >
                              {t("my-evaluations.evaluation")}
                            </span>

                            <Line className="graph2" {...config} />
                            <div></div>
                          </Col>
                          <Col
                            className="dividerLeft alignCenter"
                            style={{
                              textAlign: "center",
                              padding: "0px 40px 0px 40px",
                            }}
                            span={5}
                          >
                            <span
                              className="secondaryText"
                              style={{ fontWeight: "bold" }}
                            >
                              {t("my-evaluations.recognitions-medals")}
                            </span>
                            <div
                              style={{ marginTop: "20px" }}
                              className="tagCup"
                            >
                              <Row>
                                <Col span={14}>
                                  <img alt="" src={Cup} />
                                </Col>
                                <Col className="secondaryText" span={10}>
                                  2
                                </Col>
                              </Row>
                            </div>

                            <div
                              style={{ marginTop: "20px" }}
                              className="tagGold"
                            >
                              <Row>
                                <Col span={14}>
                                  <img alt="" src={Medalgold} />
                                </Col>
                                <Col className="secondaryText" span={10}>
                                  3
                                </Col>
                              </Row>
                            </div>

                            <div
                              style={{ marginTop: "20px" }}
                              className="tagPlate"
                            >
                              <Row>
                                <Col span={14}>
                                  <img alt="" src={Medalplate} />
                                </Col>
                                <Col className="secondaryText" span={10}>
                                  8
                                </Col>
                              </Row>
                            </div>

                            <div
                              style={{ marginTop: "20px" }}
                              className="tagCobrum"
                            >
                              <Row>
                                <Col span={14}>
                                  <img alt="" src={Medalcobrum} />
                                </Col>
                                <Col className="secondaryText" span={10}>
                                  2
                                </Col>
                              </Row>
                            </div>
                            <Link
                              to="#"
                              className="link"
                              style={{ marginTop: "20px" }}
                            >
                              {t("my-evaluations.watch-detail")}
                            </Link>
                          </Col>
                          <Col className="dividerLeft" span={8}></Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                </div>

                <div
                  style={{
                    width: "976px",
                    height: "auto",
                  }}
                >
                  <h2
                    className="secondaryText"
                    style={{
                      textAlign: "left",
                      marginTop: "20px",
                      marginLeft: "30px",
                    }}
                  >
                    {t("my-evaluations.self-appraisal")}
                  </h2>
                  <Row>
                    <Col span={24}>
                      <Card style={{ borderRadius: "8px" }}>
                        <Row style={{ marginTop: "40px" }}>
                          <Col
                            style={{
                              textAlign: "center",
                              paddingLeft: "10px",
                            }}
                            span={11}
                          >
                            <span
                              className="secondaryText"
                              style={{ fontWeight: "bold" }}
                            >
                              {t("my-evaluations.evaluation")}
                            </span>
                            <span
                              className="iconGreen"
                              style={{ fontWeight: "bold" }}
                            >
                              {" "}
                              Calcuado
                            </span>

                            <Line className="graph2" {...config} />
                            <div></div>
                          </Col>
                          <Col
                            className="dividerLeft alignCenter"
                            style={{
                              textAlign: "center",
                              padding: "0px 40px 0px 40px",
                            }}
                            span={5}
                          >
                            <span
                              className="secondaryText"
                              style={{ fontWeight: "bold" }}
                            >
                              {t("my-evaluations.recognitions-medals")}
                            </span>
                            <div
                              style={{ marginTop: "20px" }}
                              className="tagCup"
                            >
                              <Row>
                                <Col span={14}>
                                  <img alt="" src={Cup} />
                                </Col>
                                <Col className="secondaryText" span={10}>
                                  2
                                </Col>
                              </Row>
                            </div>

                            <div
                              style={{ marginTop: "20px" }}
                              className="tagGold"
                            >
                              <Row>
                                <Col span={14}>
                                  <img alt="" src={Medalgold} />
                                </Col>
                                <Col className="secondaryText" span={10}>
                                  3
                                </Col>
                              </Row>
                            </div>

                            <div
                              style={{ marginTop: "20px" }}
                              className="tagPlate"
                            >
                              <Row>
                                <Col span={14}>
                                  <img alt="" src={Medalplate} />
                                </Col>
                                <Col className="secondaryText" span={10}>
                                  8
                                </Col>
                              </Row>
                            </div>

                            <div
                              style={{ marginTop: "20px" }}
                              className="tagCobrum"
                            >
                              <Row>
                                <Col span={14}>
                                  <img alt="" src={Medalcobrum} />
                                </Col>
                                <Col className="secondaryText" span={10}>
                                  2
                                </Col>
                              </Row>
                            </div>
                            <Link
                              to="#"
                              className="link"
                              style={{ marginTop: "20px" }}
                            >
                              {t("my-evaluations.watch-detail")}
                            </Link>
                          </Col>
                          <Col
                            className="dividerLeft"
                            style={{ paddingLeft: "25px" }}
                            span={8}
                          >
                            <span
                              className="secondaryText"
                              style={{ fontWeight: "bold" }}
                            >
                              {t("my-evaluations.depict-self")}
                            </span>
                            <Row>
                              <Col style={{ marginTop: "10px" }} span={24}>
                                <Editor
                                  id="4"
                                  placeholder="Aquí puedes explicar como consideras que fue tu desempeño en este periodo, recuerda que se esta evaluando el cumplimiento de tus objetivos, resultados clave e indicadores clave."
                                  value={value}
                                  setValue={setValue}
                                />
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row style={{ marginTop: "15px" }}>
                          <Col span={9}></Col>
                          <Col
                            style={{ paddingLeft: "0px", textAlign: "right" }}
                            span={12}
                          >
                            <span
                              style={{ fontSize: "12px" }}
                              className="secondaryText"
                            >
                              Al presionar <b>“Validar”</b>, se enviara tu
                              autoevaluación a tu jefe directo, <br />
                              para que te asigne una calificación final.
                            </span>
                          </Col>
                          <Col style={{ textAlign: "right" }} span={3}>
                            <Button
                              className="primary"
                              style={{ color: "#fff" }}
                            >
                              Validar
                            </Button>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </TabPane>
              <TabPane tab="Gestion de indicadores clave" key="3">
                <Row>
                  <Col span={14}>
                    <Button icon={<PlusOutlined />} className="primary">
                      Crear un indicador clave
                    </Button>
                  </Col>
                  <Col
                    style={{
                      paddingRight: "25px",
                      textAlign: "right",
                    }}
                    span={6}
                  >
                    <Search
                      style={{ width: "232px" }}
                      placeholder="input search text"
                    />
                  </Col>
                  <Col
                    style={{
                      background: "white",
                      textAlign: "center",
                      paddingRight: "5px",
                      paddingLeft: "5px",
                      paddingTop: "5px",
                      height: "32px",
                      width: "32px",
                    }}
                    span={1}
                  >
                    <BsFillGearFill className="iconGray iconsize2" />
                  </Col>
                  <Col
                    className="dividerLeft"
                    style={{
                      background: "white",
                      textAlign: "center",
                      paddingRight: "5px",
                      paddingLeft: "5px",
                      paddingTop: "5px",
                      height: "32px",
                      width: "32px",
                    }}
                    span={1}
                  >
                    <FiUpload className="iconGray iconsize2" />
                  </Col>
                  <Col
                    className="dividerLeft"
                    style={{
                      background: "white",
                      textAlign: "center",
                      paddingRight: "5px",
                      paddingLeft: "5px",
                      height: "32px",
                      width: "32px",
                    }}
                    span={1}
                  >
                    <Link
                      to={
                        "/" +
                        t("routes.indicators") +
                        "/" +
                        t("path_indicator.panel")
                      }
                    >
                      <span>
                        <MdShowChart className="iconsize3 iconGray" />
                      </span>
                    </Link>
                  </Col>
                  <Col
                    className="dividerLeft"
                    style={{
                      background: "white",
                      textAlign: "center",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                      height: "32px",
                      width: "32px",
                    }}
                    span={1}
                  >
                    <span>
                      <IoMdCloudDownload className="iconsize3 iconGray" />
                    </span>
                  </Col>
                </Row>

                <Row style={{ textAlign: "left", paddingLeft: "25px" }}>
                  <Col style={{ paddingTop: "20px" }} span={5}>
                    <span>Nombre y frecuencia</span>
                  </Col>
                  <Col
                    style={{ textAlign: "center", paddingTop: "20px" }}
                    span={5}
                  >
                    <span>Duración y corte</span>
                  </Col>
                  <Col
                    style={{
                      textAlign: "center",
                      paddingTop: "20px",
                      paddingLeft: "20px",
                    }}
                    span={1}
                  >
                    <span>Tipo</span>
                  </Col>
                  <Col
                    style={{
                      textAlign: "center",
                      paddingTop: "20px",
                      paddingLeft: "15px",
                    }}
                    span={3}
                  >
                    <span>Acumulado</span>
                  </Col>
                  <Col
                    style={{
                      textAlign: "left",
                      paddingTop: "20px",
                    }}
                    span={2}
                  >
                    <span>Objetivo</span>
                  </Col>
                  <Col
                    style={{
                      textAlign: "left",
                      paddingTop: "20px",
                      marginLeft: "-10px",
                    }}
                    span={2}
                  >
                    <span>Tendencia</span>
                  </Col>
                  <Col
                    style={{
                      textAlign: "left",
                      paddingTop: "20px",
                      paddingLeft: "15px",
                    }}
                    span={3}
                  >
                    <span>Asignado a</span>
                  </Col>
                  <Col
                    style={{
                      textAlign: "left",
                      paddingTop: "20px",
                      paddingLeft: "20px",
                    }}
                    span={3}
                  >
                    <span>Acciones</span>
                  </Col>
                </Row>

                <Row>
                  <Col span={24}>
                    <Card
                      style={{
                        borderRadius: "10px",
                        marginTop: "10px",
                        height: "560px",
                      }}
                    >
                      {indicators2.map((indicator, item) =>
                        item === 0 ? (
                          <Row
                            className="dividerBottomFull"
                            style={{
                              textAlign: "left",
                              paddingBottom: "20px",
                            }}
                          >
                            <Col span={5}>
                              <span
                                className="iconGreen"
                                style={{ fontWeight: "bold" }}
                              >
                                {indicator.name}
                              </span>
                              <br />
                              <Link
                                onClick={() => {
                                  setIndicator(true);
                                }}
                                to="#"
                              >
                                <span>{indicator.frecuency}</span>
                              </Link>
                            </Col>
                            <Col
                              style={{
                                fontSize: "12px",
                                textAlign: "center",
                              }}
                              span={5}
                            >
                              <span>
                                <b>{indicator.duration}</b>
                              </span>
                              <br />
                              <span>{indicator.court}</span>
                            </Col>
                            <Col
                              style={{
                                textAlign: "center",
                              }}
                              span={2}
                            >
                              {indicator.type === 1 ? (
                                <>
                                  <span>
                                    <img
                                      src={Increase}
                                      alt="Increase"
                                      width="17"
                                    />
                                  </span>
                                </>
                              ) : indicator.type === 2 ? (
                                <>
                                  <span>
                                    <img
                                      src={Maintain}
                                      alt="Maintain"
                                      width="17"
                                    />
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span>
                                    <img
                                      src={Diminish}
                                      alt="Increase"
                                      width="17"
                                    />
                                  </span>
                                </>
                              )}
                            </Col>
                            <Col
                              style={{
                                textAlign: "center",
                              }}
                              span={2}
                            >
                              <span>{indicator.acumulate}</span>
                              <br />
                              <span>Total {indicator.totally}%</span>
                            </Col>
                            <Col
                              style={{
                                textAlign: "center",
                              }}
                              span={2}
                            >
                              <span>{indicator.objetive}</span>
                            </Col>
                            <Col
                              style={{
                                textAlign: "center",
                                paddingRight: "30px",
                              }}
                              span={2}
                            >
                              {indicator.tendencie > 100 ? (
                                <>
                                  <span className="iconGreen">
                                    {indicator.tendencie}%
                                  </span>
                                  <span>
                                    <RiArrowUpSFill
                                      style={{
                                        position: "absolute",
                                        top: "-4px",
                                      }}
                                      className="iconsize3 iconGreen"
                                    />
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span>{indicator.tendencie}%</span>
                                  <span>
                                    <RiArrowUpSFill
                                      style={{
                                        position: "absolute",
                                        top: "-4px",
                                      }}
                                      className="iconsize3"
                                    />
                                  </span>
                                </>
                              )}
                            </Col>
                            <Col
                              style={{
                                textAlign: "left",
                                paddingLeft: "20px",
                              }}
                              span={3}
                            >
                              {indicator.asignedTo.map((member, index) => (
                                <img
                                  alt="member"
                                  style={{
                                    width: "30px",
                                    position: "absolute",
                                    marginLeft: index * 15 + "px",
                                    borderRadius: "50%",
                                    // border: "1px solid #000",
                                  }}
                                  src={member.img}
                                />
                              ))}
                            </Col>

                            <Col
                              style={{
                                height: "35px",
                                textAlign: "center",
                              }}
                              span={1}
                            >
                              <MdShowChart
                                onClick={() => {
                                  setHistorial(true);
                                }}
                                className="iconsize3 iconGray"
                              />
                            </Col>
                            <Col
                              style={{
                                height: "35px",
                                textAlign: "center",
                              }}
                              className="dividerLeft"
                              span={1}
                            >
                              <IoMdCloudDownload className="iconsize3 iconGray" />
                            </Col>
                            <Col
                              className="dividerLeft"
                              style={{
                                textAlign: "center",
                                height: "35px",
                              }}
                              span={1}
                            >
                              <Dropdown overlay={menu2} trigger={["click"]}>
                                <img
                                  alt="logo"
                                  src={More}
                                  width="25"
                                  height="25"
                                />
                              </Dropdown>
                            </Col>
                          </Row>
                        ) : (
                          <Row
                            className="dividerBottomFull"
                            style={{
                              textAlign: "left",
                              paddingBottom: "20px",
                              marginTop: "20px",
                            }}
                          >
                            <Col span={5}>
                              <span
                                className="iconGreen"
                                style={{ fontWeight: "bold" }}
                              >
                                {indicator.name}
                              </span>
                              <br />
                              <Link
                                onClick={() => {
                                  setIndicator(true);
                                }}
                                to="#"
                              >
                                <span>{indicator.frecuency}</span>
                              </Link>
                            </Col>
                            <Col
                              style={{
                                fontSize: "12px",
                                textAlign: "center",
                              }}
                              span={5}
                            >
                              <span>
                                <b>{indicator.duration}</b>
                              </span>
                              <br />
                              <span>{indicator.court}</span>
                            </Col>
                            <Col
                              style={{
                                textAlign: "center",
                              }}
                              span={2}
                            >
                              {indicator.type === 1 ? (
                                <>
                                  <span>
                                    <img
                                      src={Increase}
                                      alt="Increase"
                                      width="17"
                                    />
                                  </span>
                                </>
                              ) : indicator.type === 2 ? (
                                <>
                                  <span>
                                    <img
                                      src={Maintain}
                                      alt="Maintain"
                                      width="17"
                                    />
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span>
                                    <img
                                      src={Diminish}
                                      alt="Increase"
                                      width="17"
                                    />
                                  </span>
                                </>
                              )}
                            </Col>
                            <Col
                              style={{
                                textAlign: "center",
                              }}
                              span={2}
                            >
                              <span>{indicator.acumulate}</span>
                              <br />
                              <span>Total {indicator.totally}%</span>
                            </Col>
                            <Col
                              style={{
                                textAlign: "center",
                              }}
                              span={2}
                            >
                              <span>{indicator.objetive}</span>
                            </Col>
                            <Col
                              style={{
                                textAlign: "center",
                                paddingRight: "30px",
                              }}
                              span={2}
                            >
                              {indicator.tendencie > 100 ? (
                                <>
                                  <span className="iconGreen">
                                    {indicator.tendencie}%
                                  </span>
                                  <span>
                                    <RiArrowUpSFill
                                      style={{
                                        position: "absolute",
                                        top: "-4px",
                                      }}
                                      className="iconsize3 iconGreen"
                                    />
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span>{indicator.tendencie}%</span>
                                  <span>
                                    <RiArrowUpSFill
                                      style={{
                                        position: "absolute",
                                        top: "-4px",
                                      }}
                                      className="iconsize3"
                                    />
                                  </span>
                                </>
                              )}
                            </Col>
                            <Col
                              style={{
                                textAlign: "left",
                                paddingLeft: "20px",
                              }}
                              span={3}
                            >
                              {indicator.asignedTo.map((member, index) => (
                                <img
                                  alt="member"
                                  style={{
                                    width: "30px",
                                    position: "absolute",
                                    marginLeft: index * 15 + "px",
                                    borderRadius: "50%",
                                    // border: "1px solid #000",
                                  }}
                                  src={member.img}
                                />
                              ))}
                            </Col>

                            <Col
                              style={{
                                height: "35px",
                                textAlign: "center",
                              }}
                              span={1}
                            >
                              <MdShowChart
                                onClick={() => {
                                  setHistorial(true);
                                }}
                                className="iconsize3 iconGray"
                              />
                            </Col>
                            <Col
                              style={{
                                height: "35px",
                                textAlign: "center",
                              }}
                              className="dividerLeft"
                              span={1}
                            >
                              <IoMdCloudDownload className="iconsize3 iconGray" />
                            </Col>
                            <Col
                              className="dividerLeft"
                              style={{
                                textAlign: "center",
                                height: "35px",
                              }}
                              span={1}
                            >
                              <Dropdown overlay={menu2} trigger={["click"]}>
                                <img
                                  alt="logo"
                                  src={More}
                                  width="25"
                                  height="25"
                                />
                              </Dropdown>
                            </Col>
                          </Row>
                        )
                      )}
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Col>
          <Col
            style={{
              textAlign: "right",
              paddingRight: "10px",
            }}
            span={4}
          >
            <Dropdown overlay={menu} trigger={["click"]}>
              <Link
                to=""
                className="principalColorText"
                onClick={(e) => e.preventDefault()}
              >
                {user.username} <Avatar icon={<UserOutlined />} />
                <CaretDownOutlined />
              </Link>
            </Dropdown>
          </Col>
          <Col span={1} style={{ marginTop: "5px", textAlign: "left" }}>
            <Link to={"/" + t("routes.messages")}>
              <MaterialIcon icon="notifications" />
            </Link>
          </Col>
        </Row>
      </Header>
    </>
  );
}

export default Indicators;
