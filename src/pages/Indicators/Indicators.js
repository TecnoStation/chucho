import React, { useState } from "react";
import {
  Col,
  Row,
  Menu,
  Dropdown,
  Avatar,
  Layout,
  Tabs,
  Card,
  Input,
  Button,
} from "antd";
import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";
import { IoMdCloudDownload } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { MdShowChart } from "react-icons/md";
import { GrDocumentUpload } from "react-icons/gr";
import { RiArrowUpSFill } from "react-icons/ri";
import Increase from "../../assets/img/icons/aumentar.svg";
import ModalUpdateIndicator from "../../components/Modals/ModalUpdateIndicator/ModalUpdateIndicator";
import ModalHistorial from "../../components/Modals/ModalHistorial/ModalHistorial";
import { Line } from "@ant-design/charts";
import Cup from "../../assets/img/icons/emoji_events-24px.svg";
import Medalgold from "../../assets/img/icons/military_tech-24px.svg";
import Medalplate from "../../assets/img/icons/military_tech-24px_2.svg";
import Medalcobrum from "../../assets/img/icons/military_tech-24px_3.svg";

import "./Indicators.scss";
import Editor from "../../components/Editor/Editor";
import { hasValue } from "@antv/util";

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
          Ver Perfil
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">Cerrar sesión</Menu.Item>
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
                    }}
                    span={1}
                  >
                    <span>
                      <IoMdCloudDownload className="iconsize3 iconGray" />
                    </span>
                  </Col>
                </Row>

                <Row style={{ textAlign: "center" }}>
                  <Col style={{ paddingTop: "20px" }} span={7n}>
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

                <Row style={{ marginTop: "10px" }}>
                  <Col span={24}>
                    <Card style={{ borderRadius: "10px" }}>
                      <Row
                        className="dividerBottomFull"
                        style={{ textAlign: "left", paddingBottom: "20px" }}
                      >
                        <Col span={7}>
                          <span
                            className="iconGreen"
                            style={{ fontWeight: "bold" }}
                          >
                            Indicador clave - semanal
                          </span>
                          <br />
                          <span>
                            Mejorar la semámtica en Html5 y los <br /> metadatos
                            de cada sección.
                          </span>
                        </Col>
                        <Col
                          style={{ textAlign: "center", paddingRight: "20px" }}
                          span={3}
                        >
                          <span>
                            <img src={Increase} alt="Increase" width="17" />
                          </span>
                          <br />
                          <span style={{ fontSize: "10px" }}>Aumentar</span>
                        </Col>
                        <Col style={{ textAlign: "center" }} span={2}>
                          <span>
                            <Input
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
                          <span>10</span>
                        </Col>
                        <Col
                          style={{
                            textAlign: "center",
                            paddingRight: "30px",
                          }}
                          span={5}
                        >
                          <span>100%</span>
                          <span>
                            <RiArrowUpSFill
                              style={{ position: "absolute", top: "-4px" }}
                              className="iconsize3"
                            />
                          </span>
                        </Col>
                        <Col
                          style={{
                            textAlign: "center",
                            marginTop: "5px",
                          }}
                          span={1}
                        >
                          <GrDocumentUpload className="iconsize2 " />
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
                Gestion de indicadores clave
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
