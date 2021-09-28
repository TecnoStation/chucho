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
    { year: "30-DEC-20", value: 18 },
    { year: "8-JAN-21", value: 40 },
    { year: "17-JAN-21", value: 35 },
    { year: "26-JAN-21", value: 50 },
    { year: "4-FEB-21", value: 49 },
    { year: "13-FEB-21", value: 60 },
    { year: "22-FEB-21", value: 70 },
    { year: "3-MAR-21", value: 90 },
    { year: "12-MAR-21", value: 95 },
  ];

  const config = {
    data,
    height: 400,
    xField: "year",
    yField: "value",
    point: {
      size: 5,
      shape: "diamond",
    },
  };

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
                            <span>{t("my-evaluations.evaluation")}</span>

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
                            <span>
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
                            <span>{t("my-evaluations.evaluation")}</span>
                            <span></span>

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
                            <span>
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
