import React, { useState } from "react";

import {
  Button,
  Modal,
  Row,
  Col,
  Input,
  Card,
  Slider,
  Menu,
  Dropdown,
} from "antd";
import { Line } from "@ant-design/charts";
import { IoFilter } from "react-icons/io5";
import { RiArrowUpSFill } from "react-icons/ri";
import { DownloadOutlined } from "@ant-design/icons";
import Avatar from "../../../assets/img/avatar.png";
import More from "../../../assets/img/icons/more_vert-24px.svg";
import { AiFillLike } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Editor from "../../Editor/Editor";
import { useTranslation } from "react-i18next";
import ModalRecognition from "../ModalRecognition/ModalRecognition";

const { Search } = Input;

function ModalHistorial({ Historial, setHistorial }) {
  const [t, i18n] = useTranslation("global");
  const [value, setValue] = useState("");
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

  const [message, setMessage] = useState([
    {
      idMessage: 0,
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      reply: [
        // {
        //   idRepli: 0,
        //   message: "",
        // },
      ],
    },
  ]);

  const [slider, setSlider] = useState(50 / 12);
  const onChange = (inputValue) => {
    setSlider(inputValue);
  };

  function formatter(value) {
    return `${value * 12}`;
  }

  const add = () => {
    console.log(value);
  };

  const [recognition, setRecognition] = useState(false);
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <span>Primero más antiguo</span>
      </Menu.Item>
      <Menu.Item key="1">
        <span>Primero más reciente</span>
      </Menu.Item>
    </Menu>
  );

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
      <Modal
        title={t("indicators-evaluations.modal-objectives.title")}
        className="objetiveModal"
        visible={Historial}
        centered={true}
        onCancel={() => {
          setHistorial(false);
        }}
        footer={false}
      >
        <Row>
          <Col span={24}>
            <Line className="graph" {...config} />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px", textAlign: "left" }}>
          <Col span={8} style={{ paddingLeft: "10px" }}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <IoFilter className="iconsize2" />
            </Dropdown>
          </Col>
          <Col span={10}>
            <h3>{t("indicators-evaluations.modal-objectives.updates")}</h3>
          </Col>
          <Col span={6}>
            <Search
              id="filter"
              placeholder={t(
                "indicators-evaluations.modal-objectives.placeholder-upgrade"
              )}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col span={24}>
            <Card className="cardDefault2">
              <Row style={{ textAlign: "center" }}>
                <Col span={6}>
                  <span>
                    <b>1 de enero de 2021</b>
                  </span>
                </Col>
                <Col span={5} className="iconGreen">
                  <span>
                    {t("indicators-evaluations.modal-objectives.upgrade")}
                  </span>
                  <br />
                  <span>25</span>
                </Col>
                <Col span={2}>
                  <span>
                    {t("indicators-evaluations.modal-objectives.objective")}
                  </span>
                  <br />
                  <span>20</span>
                </Col>
                <Col span={5}>
                  <span>
                    {t("indicators-evaluations.modal-objectives.trend")}
                  </span>
                  <br />
                  <span style={{ marginRight: "10px" }} className="iconGreen">
                    125%
                  </span>
                  <span className="iconGreen">
                    <RiArrowUpSFill
                      style={{
                        position: "absolute",
                        top: "17px",
                        right: "30px",
                      }}
                      className="iconsize3"
                    />
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
              <Row style={{ marginTop: "20px", textAlign: "left" }}>
                <Col span={8}>
                  <span>
                    {t("indicators-evaluations.modal-objectives.evidences")}
                  </span>
                </Col>
                <Col span={16}>
                  <span>
                    {t(
                      "indicators-evaluations.modal-objectives.contex-upgrade"
                    )}
                  </span>
                </Col>
              </Row>
              <Row style={{ textAlign: "left", marginTop: "20px" }}>
                <Col span={8}>
                  <Button icon={<DownloadOutlined />} size={"middle"}>
                    Componentes.png
                  </Button>
                </Col>
                <Col span={16}>
                  <Row>
                    <Col span={3}>
                      <p>
                        <img
                          style={{ marginTop: "-5px" }}
                          alt="ico"
                          width="55"
                          src={Avatar}
                        />
                      </p>
                    </Col>
                    <Col span={20}>
                      <div
                        style={{
                          background: "#f4f6fb",
                          fontSize: "12px",
                          textAlign: "justify",
                          padding: "10px 15px 10px 15px",
                          borderRadius: "10px",
                        }}
                      >
                        <span>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </span>
                      </div>
                      <div style={{ marginTop: "5px", textAlign: "left" }}>
                        <Row>
                          <Col span={5}>
                            <Link className="iconGray" to="#">
                              <span style={{ marginLeft: "10px" }}>
                                <AiFillLike className="iconsize" />
                              </span>
                              <span
                                style={{
                                  position: "absolute",
                                  top: "-2px",
                                  marginLeft: "5px",
                                }}
                              >
                                {t(
                                  "indicators-evaluations.modal-objectives.like"
                                )}
                              </span>
                            </Link>
                          </Col>

                          <Col span={7}>
                            <Link className="iconGray" to="#">
                              <span>
                                <MdMessage className="iconsize" />
                              </span>
                              <span
                                style={{
                                  position: "absolute",
                                  top: "-2px",
                                  marginLeft: "5px",
                                }}
                              >
                                {t(
                                  "indicators-evaluations.modal-objectives.answer"
                                )}
                              </span>
                            </Link>
                          </Col>
                          <Col span={8}>
                            <Link
                              className="iconGray"
                              to="#"
                              onClick={() => {
                                setRecognition(true);
                              }}
                            >
                              <span>
                                <GiTrophyCup className="iconsize " />
                              </span>
                              <span
                                style={{
                                  position: "absolute",
                                  top: "-2px",
                                  marginLeft: "5px",
                                }}
                              >
                                {t(
                                  "indicators-evaluations.modal-objectives.recognize"
                                )}
                              </span>
                            </Link>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col span={1}>
                      <Dropdown overlay={menu2} trigger={["click"]}>
                        <img alt="logo" src={More} width="25" height="25" />
                      </Dropdown>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6}></Col>
                    <Col span={17}>
                      <Editor
                        id="2"
                        add={add}
                        value={value}
                        setValue={setValue}
                      />
                    </Col>
                    <Col span={1}></Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Modal>
      <ModalRecognition
        recognition={recognition}
        setRecognition={setRecognition}
      />
    </>
  );
}

export default ModalHistorial;
