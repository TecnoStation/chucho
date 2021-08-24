import React, { useState } from "react";
import {
  Form,
  Tabs,
  Input,
  Col,
  Row,
  Button,
  Modal,
  Tag,
  AutoComplete,
} from "antd";
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Link, useHistory, useLocation } from "react-router-dom";
import { RiPencilFill } from "react-icons/ri";
import { BiGridVertical, BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { IoMdCloudDownload, IoMdSquare, IoMdTrash } from "react-icons/io";
import Avatar from "../../assets/img/avatar.png";
import Screendefault from "../../components/Screens/Screendefault";
import Outline from "../../assets/img/icons/bien_hecho.svg";
import {
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
  AiOutlineFileText,
} from "react-icons/ai";
import { ImArrowUp } from "react-icons/im";
//import {  } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import "./AreasAndPositions.scss";
import ModalDownLoad from "../../components/Modals/ModalDownLoad/ModalDownLoad";
import ModalMoveArea from "../../components/Modals/ModalMoveArea/ModalMoveArea";

const { TabPane } = Tabs;

export default function AreasAndPositions2() {
  const [t, i18n] = useTranslation("global");
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tabState = query.get("tab") || "1";

  const tabs = ["1", "2"];
  const [Active, setActive] = useState(tabState);

  const changeActive = () => {
    query.set("tab", 2);
    if (Active === "1") {
      query.set("tab", 2);
      setActive(tabs[1]);
      history.push({ search: "?tab=2" });
    } else {
      query.set("tab", 1);
      setActive(tabs[0]);
      history.push({ search: "?tab=1" });
    }
  };

  //------------------------------------new code -----------------------------------
  const [modalDownload, setModalDownload] = useState(false);
  const [Password, setPassword] = useState(false);
  const [modalMove, setModalMove] = useState(false);

  //-------------------------------end new code ---------------------------------------

  return (
    <>
      <Tabs
        className="tab"
        activeKey={Active}
        onChange={changeActive} 
        type="card"
      >
        <TabPane className="tabPane" tab={t("organigrama.areas-and-positions.structure.tab-name")} key="1">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="info">
            <Col className="gutter-row tabsheet1" span={12}>
              <h3 style={{ textAlign: "left" }}>Crear áreas de Mi empresa</h3>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  className="gutter-row"
                  span={10}
                  style={{ textAlign: "left" }}
                >
                  <Link to="/organigrama/areasandpositions-massivee">
                    <Button
                      className="third"
                      style={{ textAlign: "left", marginRight: "16px" }}
                      icon={<ImArrowUp className="iconAjust2" />}
                    >
                      {" "}
                      <span className="textAjust2">{t("organigrama.areas-and-positions.structure.btn-load-masive")}</span>
                    </Button>
                  </Link>
                </Col>
                <Col
                  className="gutter-row"
                  span={14}
                  style={{ textAlign: "left" }}
                >
                  <Button
                    className="btnBlue third"
                    onClick={() => {
                      setModalDownload(true);
                    }}
                    size="default"
                  >
                    {" "}
                    <IoMdCloudDownload className="iconAjust" />{" "}
                    <span className="textAjust">{t("organigrama.areas-and-positions.structure.btn-download-file")}</span>{" "}
                  </Button>
                </Col>
              </Row>

              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginTop: "20px" }}
              >
                <Col
                  className="gutter-row"
                  span={24}
                  style={{ textAlign: "justify" }}
                >
                  <span className="link">
                  {t("organigrama.areas-and-positions.structure.text1")}
                  </span>
                </Col>
              </Row>

              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginTop: "20px" }}
              >
                <Col
                  className="gutter-row tag"
                  span={24}
                  style={{ textAlign: "justify" }}
                >
                  [ Nombre de la empresa ingresado en Mi empresa ]
                </Col>
              </Row>

              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginTop: "20px" }}
              >
                <Col
                  className="gutter-row tagTwo"
                  span={24}
                  style={{ textAlign: "justify" }}
                >
                  <IoMdSquare className="iconGray" /> CEO{" "}
                </Col>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginTop: "20px" }}
              >
                <Col className="gutter-row tagThree" span={24}>
                  <Row>
                    <Col span={12} style={{ textAlign: "left" }}>
                      <IoMdSquare className="iconGreen" /> CEO
                    </Col>
                    <Col
                      span={12}
                      className="iconGreen"
                      style={{ textAlign: "right" }}
                    >
                      <PlusCircleOutlined
                        style={{ marginRight: "12px", marginTop: "5px" }}
                      />
                      <RiPencilFill
                        style={{ marginRight: "10px", marginTop: "7px" }}
                      />
                      <BiGridVertical
                        style={{ marginRight: "10px", marginTop: "7px" }}
                      />
                      <IoMdTrash
                        onClick={() => setModalMove(true)}
                        style={{ marginRight: "5px", marginTop: "7px" }}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginTop: "20px" }}
              >
                <Col
                  className="gutter-row"
                  span={24}
                  style={{ textAlign: "justify" }}
                >
                  <Form layout="vertical">
                    <Form.Item name="empresa" label="">
                      <Input />
                    </Form.Item>
                  </Form>
                </Col>
              </Row>

              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  className="gutter-row"
                  span={24}
                  style={{ textAlign: "justify" }}
                >
                  <Link to="#">
                    {" "}
                    <PlusCircleOutlined /> {t("organigrama.areas-and-positions.structure.link-add-new-area")}
                  </Link>
                </Col>
              </Row>
            </Col>

            <Col
              className="gutter-row dividerLeft"
              style={{ textAlign: "left" }}
              span={12}
            >
              <h3>{t("organigrama.areas-and-positions.structure.positions-in-area")}</h3>
              <p>{t("organigrama.areas-and-positions.structure.insert- your-positions")}</p>
              <Row className="dividerBottom" style={{ paddingBottom: "15px" }}>
                <Col span={14} style={{ marginLeft: "30px" }}>
                  <span>CEO</span>
                </Col>
                <Col
                  span={8}
                  className="iconGreen"
                  style={{ fontSize: "18px" }}
                >
                  <BiPlusCircle style={{ marginRight: "20px" }} />{" "}
                  <BiMinusCircle />
                </Col>
              </Row>
              <br />
              <Row className="dividerBottom" style={{ paddingBottom: "15px" }}>
                <Col span={14} style={{ marginLeft: "30px" }}>
                  <span>Director de Finanzas</span>
                </Col>
                <Col
                  span={8}
                  className="iconGreen"
                  style={{ fontSize: "18px" }}
                >
                  <BiPlusCircle style={{ marginRight: "20px" }} />{" "}
                  <BiMinusCircle />
                </Col>
              </Row>
              <br />
              <Row className="dividerBottom" style={{ paddingBottom: "15px" }}>
                <Col span={14} style={{ marginLeft: "30px" }}>
                  Asistente ejecutivo
                </Col>
                <Col
                  span={8}
                  className="iconGreen"
                  style={{ fontSize: "18px" }}
                >
                  <BiPlusCircle style={{ marginRight: "20px" }} />{" "}
                  <BiMinusCircle />
                </Col>
              </Row>
              <br />
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  className="gutter-row"
                  span={24}
                  style={{ textAlign: "justify" }}
                >
                  <Link to="#">
                    {" "}
                    <PlusCircleOutlined /> {t("organigrama.areas-and-positions.structure.link-add-position")}
                  </Link>
                </Col>
              </Row>
              <div style={{ height: "380px" }}></div>
            </Col>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="info2">
              <Col
                style={{ textAlign: "right" }}
                className="gutter-row"
                span={24}
              >
                <Button className="secondary" style={{ marginRight: "15px" }}>
                {t("organigrama.areas-and-positions.structure.btn-cancel")}
                </Button>
                <Button className="primary"> {t("organigrama.areas-and-positions.structure.btn-save")}</Button>
              </Col>
            </Row>
          </Row>
        </TabPane>
        <TabPane className="tabPane" tab={t("organigrama.areas-and-positions.position.tab-name")} key="2">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="info">
            <Col style={{ textAlign: "left" }} className="gutter-row" span={6}>
              <span>
                <b>{t("organigrama.areas-and-positions.position.title")}</b>
              </span>
              <br />
              <span className="iconGreen">(Total 2 puestos)</span>
            </Col>
            <Col
              style={{ textAlign: "center" }}
              className="gutter-row"
              span={18}
            >
              <Link to="/organigrama/areasandpositions-massivep">
                <Button
                  className="third"
                  style={{ textAlign: "left", marginRight: "20px" }}
                  icon={<ImArrowUp className="iconAjust2" />}
                >
                  {" "}
                  <span className="textAjust2">{t("organigrama.areas-and-positions.position.btn-load-masive")}</span>
                </Button>
              </Link>
              <Button
                className="btnBlue third"
                style={{ textAlign: "left", marginRight: "20px" }}
                onClick={() => {
                  setModalDownload(true);
                }}
                size="default"
              >
                {" "}
                <IoMdCloudDownload className="iconAjust" />{" "}
                <span className="textAjust">{t("organigrama.areas-and-positions.position.btn-download-file")}</span>{" "}
              </Button>
              <Input
                style={{ width: "250px" }}
                addonAfter={<SearchOutlined />}
                placeholder={t("organigrama.areas-and-positions.position.placeholder-input")}
              />
            </Col>

            <Row className="info2 dividerBottomFull">
              <Col span={8}>{t("organigrama.areas-and-positions.position.position-name")}</Col>
              <Col span={4}>{t("organigrama.areas-and-positions.position.basic-information")}</Col>
              <Col span={4}>{t("organigrama.areas-and-positions.position.profiling")}</Col>
              <Col span={4}>{t("organigrama.areas-and-positions.position.skills")}</Col>
              <Col span={4}>{t("organigrama.areas-and-positions.position.actions")}</Col>
            </Row>
            <Row
              className="info3Full tagThreeFull"
              style={{ marginTop: "10px" }}
            >
              <Col
                className="gutter-row"
                style={{ textAlign: "left" }}
                span={8}
              >
                <IoMdSquare
                  className="iconGreen"
                  style={{ marginLeft: "10px", marginTop: "3px" }}
                />{" "}
                <span>CEO</span>{" "}
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineCheckCircle />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col
                className="gutter-row iconGray"
                span={4}
                style={{ marginTop: "3px" }}
              >
                <Link
                  to="/organigrama/areasandpositions-addjob"
                  className="iconGray"
                >
                  <RiPencilFill style={{ marginRight: "10px" }} />
                </Link>
                <IoMdTrash
                  onClick={() => setModalMove(true)}
                  style={{ marginRight: "5px" }}
                />
              </Col>
            </Row>

            <Row className="info3Full tagThreeFull">
              <Col
                className="gutter-row"
                style={{ textAlign: "left" }}
                span={8}
              >
                <IoMdSquare
                  className="iconGreen"
                  style={{ marginLeft: "10px", marginTop: "3px" }}
                />{" "}
                <span>Director General (2)</span>{" "}
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineCheckCircle />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col
                className="gutter-row iconGray"
                span={4}
                style={{ marginTop: "3px" }}
              >
                <Link
                  to="/organigrama/areasandpositions-addjob"
                  className="iconGray"
                >
                  <RiPencilFill style={{ marginRight: "10px" }} />
                </Link>
                <IoMdTrash
                  onClick={() => setModalMove(true)}
                  style={{ marginRight: "5px" }}
                />
              </Col>
            </Row>

            <Row className="info3Full tagThreeFull">
              <Col
                className="gutter-row"
                style={{ textAlign: "left" }}
                span={8}
              >
                <IoMdSquare
                  className="iconGreen"
                  style={{ marginLeft: "10px", marginTop: "3px" }}
                />{" "}
                <span>Asistente Ejecutivo (3)</span>{" "}
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineCheckCircle />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col
                className="gutter-row iconGray"
                span={4}
                style={{ marginTop: "3px" }}
              >
                <Link
                  to="/organigrama/areasandpositions-addjob"
                  className="iconGray"
                >
                  <RiPencilFill style={{ marginRight: "10px" }} />
                </Link>
                <IoMdTrash
                  onClick={() => setModalMove(true)}
                  style={{ marginRight: "5px" }}
                />
              </Col>
            </Row>

            <Row className="info3Full tagThreeFull">
              <Col
                className="gutter-row"
                style={{ textAlign: "left" }}
                span={8}
              >
                <IoMdSquare
                  className="iconGreen"
                  style={{ marginLeft: "10px", marginTop: "3px" }}
                />{" "}
                <span>Director de Finanzas</span>{" "}
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineCheckCircle />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col
                className="gutter-row iconGray"
                span={4}
                style={{ marginTop: "3px" }}
              >
                <Link
                  to="/organigrama/areasandpositions-addjob"
                  className="iconGray"
                >
                  <RiPencilFill style={{ marginRight: "10px" }} />
                </Link>
                <IoMdTrash
                  onClick={() => setModalMove(true)}
                  style={{ marginRight: "5px" }}
                />
              </Col>
            </Row>

            <Row className="info3Full tagThreeFull">
              <Col
                className="gutter-row"
                style={{ textAlign: "left" }}
                span={8}
              >
                <IoMdSquare
                  className="iconGreen"
                  style={{ marginLeft: "10px", marginTop: "3px" }}
                />{" "}
                <span>CEO</span>{" "}
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineCheckCircle />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col className="gutter-row" span={4} style={{ marginTop: "3px" }}>
                <AiOutlineExclamationCircle className="iconRed" />
              </Col>
              <Col
                className="gutter-row iconGray"
                span={4}
                style={{ marginTop: "3px" }}
              >
                <Link
                  to="/organigrama/areasandpositions-addjob"
                  className="iconGray"
                >
                  <RiPencilFill style={{ marginRight: "10px" }} />
                </Link>
                <IoMdTrash
                  onClick={() => setModalMove(true)}
                  style={{ marginRight: "5px" }}
                />
              </Col>
            </Row>

            <Row id="showJob" style={{ display: "none" }} className="info">
              <Col
                span={8}
                style={{
                  textAlign: "right",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
              >
                <Input placeholder={t("organigrama.areas-and-positions.position.input-placeholder-position")} />
              </Col>
              <Col span={2} style={{ textAlign: "left", marginRight: "16px" }}>
                <Button className="secondary">Cancelar</Button>
              </Col>
              <Col span={2} style={{ textAlign: "left" }}>
                <Button className="primary">Guardar</Button>
              </Col>
              <Col span={10}></Col>
            </Row>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="info">
              <Col
                className="gutter-row"
                span={24}
                style={{ textAlign: "left", marginLeft: "20px" }}
              >
                <Link to="#">
                  <PlusCircleOutlined /> Agregar nueva área
                </Link>
              </Col>
            </Row>
            <div style={{ height: "470px" }}></div>
          </Row>
        </TabPane>
      </Tabs>

      <Screendefault>
        <div id="deleteMessage">
          <Row>
            <Col span={24}>
              <p style={{ textAlign: "center" }}>
                <img alt="ico" className="" src={Outline} />
              </p>
            </Col>
            <Col span={24}>
              <h3>Archivo descargado</h3>
              <br />
            </Col>
            <Col span={24}>
              <Button className="primary btn">Hecho</Button>
            </Col>
          </Row>
        </div>
      </Screendefault>

      {/* */}

      <ModalDownLoad
        modalDownload={modalDownload}
        setModalDownload={setModalDownload}
      />
      <ModalMoveArea modalMove={modalMove} setModalMove={setModalMove} />
    </>
  );
}
