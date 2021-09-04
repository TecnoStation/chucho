import React, { useState } from "react";
import { Button, Modal, Row, Col, Input, Upload, Card, Slider } from "antd";
import { Line } from "@ant-design/charts";
import { IoFilter } from "react-icons/io5";
import { RiArrowUpSFill } from "react-icons/ri";
import { DownloadOutlined } from "@ant-design/icons";
import Avatar from "../../../../../assets/img/avatar.png";
import More from "../../../../../assets/img/icons/more_vert-24px.svg";
import { AiFillLike } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";

const { Search } = Input;

function ModalHistorial({ Historial, setHistorial }) {
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
    <Modal
      title="Objetivo: Volumen de tráfico en la página web"
      className="largeModal"
      visible={Historial}
      onCancel={() => {
        setHistorial(false);
      }}
      footer={false}
    >
      <Row>
        <Col span={24}>
          <Line {...config} />
        </Col>
      </Row>
      <Row style={{ marginTop: "20px", textAlign: "left" }}>
        <Col span={8} style={{ paddingLeft: "10px" }}>
          <IoFilter className="iconsize2" />
        </Col>
        <Col span={10}>
          <h3>Historial de actualizaciones</h3>
        </Col>
        <Col span={6}>
          {" "}
          <Search
            size="small"
            id="filter"
            // onChange={filterTeams}
            placeholder={"Buscar actualización"}
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
                <span>Actualización</span>
                <br />
                <span>25</span>
              </Col>
              <Col span={2}>
                <span>Objetivo</span>
                <br />
                <span>20</span>
              </Col>
              <Col span={5}>
                <span>Tendencia</span>
                <br />
                <span style={{ marginRight: "10px" }} className="iconGreen">
                  125%
                </span>
                <span className="iconGreen">
                  <RiArrowUpSFill
                    style={{ position: "absolute", top: "17px", right: "30px" }}
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
                  tooltipVisible
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "20px", textAlign: "left" }}>
              <Col span={8}>
                <span>Evidencia adjunta</span>
              </Col>
              <Col span={16}>
                <span>Contexto de actualización</span>
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
                        background: "#ccc",
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
                          <span style={{ marginLeft: "10px" }}>
                            <AiFillLike className="iconsize iconGray" />
                          </span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-2px",
                              marginLeft: "5px",
                            }}
                          >
                            Like
                          </span>
                        </Col>

                        <Col span={7}>
                          <span>
                            <MdMessage className="iconsize iconGray" />
                          </span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-2px",
                              marginLeft: "5px",
                            }}
                          >
                            Responder
                          </span>
                        </Col>
                        <Col span={8}>
                          <span>
                            <GiTrophyCup className="iconsize iconGray" />
                          </span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-2px",
                              marginLeft: "5px",
                            }}
                          >
                            Reconocer
                          </span>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col span={1}>
                    <img alt="logo" src={More} width="25" height="25" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Modal>
  );
}

export default ModalHistorial;
