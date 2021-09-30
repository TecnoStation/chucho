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
  Button,
  Slider,
} from "antd";
import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";
import { Line } from "@ant-design/charts";
import { useHistory } from "react-router";
import { IoMdCloudDownload } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { RiArrowUpSFill } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";

import "./Indicators.scss";

const { Header } = Layout;
const { TabPane } = Tabs;

function Panel({ user }) {
  const history = useHistory();
  const [t, i18n] = useTranslation("global");
  function callback(key) {
    console.log(key);
  }
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

  const marks = {
    0: {
      style: {
        color: "#000",
      },
      label: <span>0</span>,
    },

    100: {
      style: {
        color: "#000",
      },
      label: <span>1,200</span>,
    },
  };

  const [slider, setSlider] = useState(50 / 12);
  const onChange = (inputValue) => {
    setSlider(inputValue);
  };
  function formatter(value) {
    return `${value * 12}`;
  }

  return (
    <Header>
      <Row>
        <Col id="tabHead" span={19}>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Mis indicadores clave" className="chart" key="1">
              <div
                style={{
                  width: "608px",
                  height: "auto",
                }}
              >
                <Link
                  to="#"
                  onClick={() => {
                    history.goBack();
                  }}
                >
                  <Button
                    className="layoutBtn"
                    style={{ textAlign: "left" }}
                    icon={
                      <AiOutlineArrowLeft className="iconAjust2 iconGreen" />
                    }
                  >
                    <span className="textAjust3 title2">Panel principal</span>
                  </Button>
                </Link>
                <Row>
                  <Col span={24}>
                    <Card style={{ borderRadius: "8px", marginTop: "20px" }}>
                      <Row>
                        <Col span={24}>
                          <h2
                            style={{ textAlign: "center" }}
                            className="title2"
                          >
                            Indicadores de Jorge Adolfo
                          </h2>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={24}>
                          <Line className="graph1" {...config} />
                          <div></div>
                        </Col>
                      </Row>
                      <Row style={{ textAlign: "right", marginTop: "10px" }}>
                        <Col span={12}>
                          <span
                            className="primaryText"
                            style={{ fontSize: "16px" }}
                          >
                            KPI - 1
                          </span>
                        </Col>
                        <Col span={12}>
                          <span>
                            <IoMdCloudDownload className="iconsize3 iconGray" />
                          </span>
                        </Col>
                      </Row>
                      <Row style={{ padding: "0px 10px 0px 50px" }}>
                        <Col span={6}>
                          <span className="iconGreen">
                            <b>Actualización</b>
                          </span>
                        </Col>
                        <Col span={6}>
                          <span className="secondaryText">
                            <b>Objetivo</b>
                          </span>
                        </Col>
                        <Col span={6}>
                          <span className="secondaryText">
                            <b>Tendencia</b>
                          </span>
                        </Col>
                        <Col span={6}>
                          <Slider
                            defaultValue={30}
                            marks={marks}
                            value={slider}
                            onChange={onChange}
                            tipFormatter={formatter}
                          />
                        </Col>
                      </Row>
                      <Row
                        style={{
                          textAlign: "center",
                          padding: "0px 10px 0px 40px",
                          marginTop: "-25px",
                        }}
                      >
                        <Col span={5}>
                          <span className="iconGreen">
                            <b>25</b>
                          </span>
                        </Col>
                        <Col span={5}>
                          <span className="secondaryText">
                            <b>20</b>
                          </span>
                        </Col>
                        <Col style={{ paddingRight: "10px" }} span={7}>
                          <span className="secondaryText iconGreen">
                            <b>125%</b>
                          </span>
                          <span className="iconGreen">
                            <RiArrowUpSFill
                              style={{
                                position: "absolute",
                                top: "-3px",
                                right: "32px",
                              }}
                              className="iconsize3"
                            />
                          </span>
                        </Col>
                        <Col span={7}></Col>
                      </Row>

                      <Row style={{ marginTop: "40px" }}>
                        <Col span={24}>
                          <Line className="graph1" {...config} />
                          <div></div>
                        </Col>
                      </Row>
                      <Row style={{ textAlign: "right", marginTop: "10px" }}>
                        <Col span={12}>
                          <span
                            className="primaryText"
                            style={{ fontSize: "16px" }}
                          >
                            KPI - 2
                          </span>
                        </Col>
                        <Col span={12}>
                          <span>
                            <IoMdCloudDownload className="iconsize3 iconGray" />
                          </span>
                        </Col>
                      </Row>
                      <Row style={{ padding: "0px 10px 0px 50px" }}>
                        <Col span={6}>
                          <span className="iconGreen">
                            <b>Actualización</b>
                          </span>
                        </Col>
                        <Col span={6}>
                          <span className="secondaryText">
                            <b>Objetivo</b>
                          </span>
                        </Col>
                        <Col span={6}>
                          <span className="secondaryText">
                            <b>Tendencia</b>
                          </span>
                        </Col>
                        <Col span={6}>
                          <Slider
                            defaultValue={30}
                            marks={marks}
                            value={slider}
                            onChange={onChange}
                            tipFormatter={formatter}
                          />
                        </Col>
                      </Row>
                      <Row
                        style={{
                          textAlign: "center",
                          padding: "0px 10px 0px 40px",
                          marginTop: "-25px",
                        }}
                      >
                        <Col span={5}>
                          <span className="iconGreen">
                            <b>25</b>
                          </span>
                        </Col>
                        <Col span={5}>
                          <span className="secondaryText">
                            <b>20</b>
                          </span>
                        </Col>
                        <Col style={{ paddingRight: "10px" }} span={7}>
                          <span className="secondaryText iconGreen">
                            <b>125%</b>
                          </span>
                          <span className="iconGreen">
                            <RiArrowUpSFill
                              style={{
                                position: "absolute",
                                top: "-3px",
                                right: "32px",
                              }}
                              className="iconsize3"
                            />
                          </span>
                        </Col>
                        <Col span={7}></Col>
                      </Row>

                      <Row style={{ marginTop: "40px" }}>
                        <Col span={24}>
                          <Line className="graph1" {...config} />
                          <div></div>
                        </Col>
                      </Row>
                      <Row style={{ textAlign: "right", marginTop: "10px" }}>
                        <Col span={12}>
                          <span
                            className="primaryText"
                            style={{ fontSize: "16px" }}
                          >
                            KPI - 3
                          </span>
                        </Col>
                        <Col span={12}>
                          <span>
                            <IoMdCloudDownload className="iconsize3 iconGray" />
                          </span>
                        </Col>
                      </Row>
                      <Row style={{ padding: "0px 10px 0px 50px" }}>
                        <Col span={6}>
                          <span className="iconGreen">
                            <b>Actualización</b>
                          </span>
                        </Col>
                        <Col span={6}>
                          <span className="secondaryText">
                            <b>Objetivo</b>
                          </span>
                        </Col>
                        <Col span={6}>
                          <span className="secondaryText">
                            <b>Tendencia</b>
                          </span>
                        </Col>
                        <Col span={6}>
                          <Slider
                            defaultValue={30}
                            marks={marks}
                            value={slider}
                            onChange={onChange}
                            tipFormatter={formatter}
                          />
                        </Col>
                      </Row>
                      <Row
                        style={{
                          textAlign: "center",
                          padding: "0px 10px 0px 40px",
                          marginTop: "-25px",
                        }}
                      >
                        <Col span={5}>
                          <span className="iconGreen">
                            <b>25</b>
                          </span>
                        </Col>
                        <Col span={5}>
                          <span className="secondaryText">
                            <b>20</b>
                          </span>
                        </Col>
                        <Col style={{ paddingRight: "10px" }} span={7}>
                          <span className="secondaryText iconGreen">
                            <b>125%</b>
                          </span>
                          <span className="iconGreen">
                            <RiArrowUpSFill
                              style={{
                                position: "absolute",
                                top: "-3px",
                                right: "32px",
                              }}
                              className="iconsize3"
                            />
                          </span>
                        </Col>
                        <Col span={7}></Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </div>
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
  );
}

export default Panel;
