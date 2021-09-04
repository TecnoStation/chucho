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
import MpdalUpdateIndicator from "../../components/Modals/ModalUpdateIndicator/ModalUpdateIndicator";

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
                    <span>
                      <MdShowChart className="iconsize3 iconGray" />
                    </span>
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
                        <Col span={2}>
                          <span>
                            <Input
                              onClick={() => {
                                setIndicator(true);
                              }}
                              style={{
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
                          <MdShowChart className="iconsize3 iconGray" />
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

                <MpdalUpdateIndicator
                  Indicator={Indicator}
                  setIndicator={setIndicator}
                />
              </TabPane>
              <TabPane tab="Mis evaluaciones" key="2">
                Mis evaluaciones
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
