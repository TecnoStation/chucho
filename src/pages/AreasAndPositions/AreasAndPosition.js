import React, { useState } from "react";
import { Form, Tabs, Input, Col, Row, Button } from "antd";
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";
import ModalPassword from "../../components/Modals/ModalPassword/ModalPassword";
import Screens from "../../components/Screens/Screens";
import { IoMdCloudDownload } from "react-icons/io";
import { ImArrowUp } from "react-icons/im";
import AreasList from "./Components/AreasList/AreasList";
import { useForm } from "antd/lib/form/Form";
import ModalMoveArea from "../../components/Modals/ModalMoveArea/ModalMoveArea";
import PositionsLis from "./Components/PositionsLis/PositionsLis";
import PositionListInformation from "./Components/PositionListInformation/PositionListInformation";
import ModalDownLoad from "../../components/Modals/ModalDownLoad/ModalDownLoad";

import "./AreasAndPositions.scss";

export default function AreasAndPositions() {
  const [t, i18n] = useTranslation("global");

  const { TabPane } = Tabs;
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tabState = query.get("tab") || "1";

  const [Active, setActive] = useState(tabState);
  const [text, setText] = useState("¿Estás listo? Agrega tu primer área");

  const changeActive = (e) => {
    query.set("tab", e);
    setActive(e);
    history.push({ search: "?tab=" + e });
  };

  const [firtFlag, setFirtFlag] = useState(true);
  const [message, setMessage] = useState(false);
  const [messageType, setMessageType] = useState(0);

  const onFinish = (values) => {
    setMessageType(3);
    firtFlag ? setMessage(true) : console.log("Success:", values);
  };

  const onFinish2 = (values) => {
    setMessageType(4);
    firtFlag ? setMessage(true) : console.log("Success:", values);
  };

  //----------------------- Areas----------------------------------------------
  const [inputArea, setinputArea] = useState("hide");
  const [Password, setPassword] = useState(false);
  const [modalMove, setModalMove] = useState(false);
  const [Areas, setAreas] = useState([]);
  const [Area, setArea] = useState();
  const [subAreas, setSubAreas] = useState([]);
  const [item, setItem] = useState("");

  const [editionMode, setEditionMode] = useState(false);
  const [formp] = useForm();
  const sendArea = (e) => {
    e.preventDefault();
    setAreas([
      ...Areas,
      {
        idArea: uuid(),
        areaName: e.target.value,
      },
    ]);
    setinputArea("hide");
    formp.resetFields();
    console.log(Areas);
  };
  const editArea = (e, index) => {
    e.preventDefault();
    Areas[item].areaName = e.target.value;
    setinputArea("hide");
    setEditionMode(false);
  };

  //--------------------- End Areas --------------------------------------------

  //---------------------- Positions ------------------------------------------
  const [ModalDownload, setModalDownload] = useState(false);
  const [inputPosition, SetInputPosition] = useState("hide");
  const [Position, SetPosition] = useState("");
  const [Positions, SetPositions] = useState([]);
  const [formPosition] = useForm();

  const sendPosition = (e) => {
    e.preventDefault();
    SetPositions([
      ...Positions,
      {
        idPosition: uuid(),
        name: e.target.value,
      },
    ]);
    SetInputPosition("hide");
    formPosition.resetFields();
  };

  //---------------------- End Positions ------------------------------------------

  //----------------------  Jobs ------------------------------------------

  const [addJob, setAddJob] = useState("hide");
  const [PositionsInfo, setPositionsInfo] = useState([]);
  const [PositionInfo, setPositionInfo] = useState();
  const [forminfo] = useForm();

  const sendPositionInfo = (values) => {
    setPositionsInfo([
      ...PositionsInfo,
      {
        idPositionInfo: uuid(),
        positionName: values["positionName"],
      },
    ]);
    forminfo.resetFields();
    setAddJob("hide");
  };

  //----------------------  End Jobs ------------------------------------------

  //----------------- Filter Job ------------------------------------------
  const filterJob = () => {
    const input = document.getElementById("filter");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("positionList");
    const row = div.getElementsByClassName("row");
    let i;
    for (i = 0; i < row.length; i++) {
      let col = row[i].getElementsByClassName("col")[0];
      if (col) {
        let txtValue = col.textContent || col.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          row[i].style.display = "";
        } else {
          row[i].style.display = "none";
        }
      }
    }
  };

  //----------------- End Filter Job ------------------------------------------

  //------------------- setAreas -------------------------------------------
  const [viewPositions, setviewPositions] = useState("hide");
  const [areaPosition, setAreaPosition] = useState("");

  //------------------- end setAreas -------------------------------------------

  return (
    <>
      <Tabs
        className="tab"
        defaultActiveKey={"1"}
        activeKey={Active}
        onChange={changeActive}
        type="card"
      >
        <TabPane
          style={{ minHeight: "648px" }}
          className="tabPane"
          tab={t("organigram.areas-and-positions.structure.tab-name")}
          key="1"
        >
          <div className="info">
            <Form name="formInformtion" onFinish={onFinish} layout="vertical">
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span={11}>
                  <h2 className="title2">
                    {t("organigram.areas-and-positions.structure.title")}
                  </h2>

                  <div style={{ marginTop: "20px" }} className="formWork">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                      <Col
                        className="gutter-row"
                        span={10}
                        style={{ textAlign: "left" }}
                      >
                        <Link
                          to={
                            "/" +
                            t("routes.organigram") +
                            "/" +
                            t("paths_organigram.areasandpositions-massivee")
                          }
                        >
                          <Button
                            className="third"
                            style={{
                              textAlign: "left",
                              marginRight: "16px",
                              pointerEvents: "none",
                            }}
                            icon={<ImArrowUp className="iconAjust2" />}
                          >
                            <span className="textAjust2">
                              {t(
                                "organigram.areas-and-positions.structure.btn-load-masive"
                              )}
                            </span>
                          </Button>
                        </Link>
                      </Col>
                      <Col
                        className="gutter-row"
                        span={14}
                        style={{
                          textAlign: "left",
                        }}
                      >
                        <Link to="#">
                          <Button
                            onClick={() => {
                              setModalDownload(true);
                            }}
                            className="btnBlue third"
                            size="default"
                          >
                            <IoMdCloudDownload className="iconAjust" />{" "}
                            <span className="textAjust">
                              {t(
                                "organigram.areas-and-positions.structure.btn-download-file"
                              )}
                            </span>{" "}
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "20px" }}>
                      <Col>
                        <p className="secondaryText">
                          {t("organigram.areas-and-positions.structure.text1")}
                        </p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                      <Col className="tagNombre">
                        <span>
                          [ Nombre de la empresa ingresado en Mi empresa ]
                        </span>
                      </Col>
                    </Row>

                    <div>
                      <AreasList
                        item={item}
                        setItem={setItem}
                        setviewPositions={setviewPositions}
                        setAreaPosition={setAreaPosition}
                        setModalMove={setModalMove}
                        Areas={Areas}
                        setArea={setArea}
                        setSubAreas={setSubAreas}
                        subAreas={subAreas}
                        setinputArea={setinputArea}
                        formp={formp}
                        setEditionMode={setEditionMode}
                        setPassword={setPassword}
                      />
                    </div>

                    <Row className={inputArea} style={{ marginTop: "20px" }}>
                      <Col span={24}>
                        <Form
                          initialValues={{
                            area: "",
                          }}
                          form={formp}
                          rules={[
                            {
                              required: true,
                              message: "*Campo requerido",
                            },
                          ]}
                        >
                          <Form.Item name="area">
                            <Input
                              onPressEnter={editionMode ? editArea : sendArea}
                              value={Area}
                            />
                          </Form.Item>
                        </Form>
                      </Col>
                    </Row>

                    <Row style={{ marginTop: "20px" }}>
                      <Col span={24}>
                        <Link
                          to="#"
                          onClick={() => {
                            setinputArea("show");
                            setText("Agregar nueva área");
                          }}
                        >
                          {" "}
                          <PlusCircleOutlined />{" "}
                          <span style={{ marginLeft: "8px" }}>{text}</span>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </Col>

                <Col
                  className={"gutter-row dividerLeft " + viewPositions}
                  style={{ textAlign: "left" }}
                  span={13}
                >
                  <h2 className="title2" style={{ display: "" }}>
                    {t(
                      "organigram.areas-and-positions.structure.positions-in-area"
                    )}
                    <span> {areaPosition}</span>
                  </h2>
                  <p className="secondaryText">
                    {t(
                      "organigram.areas-and-positions.structure.insert- your-positions"
                    )}
                  </p>

                  <PositionsLis
                    Positions={Positions}
                    SetPositions={SetPositions}
                  />

                  <Row
                    className={inputPosition}
                    style={{ marginTop: "20px", width: "90%" }}
                  >
                    <Col span={24}>
                      <Form
                        initialValues={{
                          position: "",
                        }}
                        form={formPosition}
                      >
                        <Form.Item name="position">
                          <Input onPressEnter={sendPosition} value={Position} />
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>

                  <Row
                    style={{ marginTop: "20px" }}
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  >
                    <Col
                      className="gutter-row"
                      span={24}
                      style={{ textAlign: "justify" }}
                    >
                      <Link style={{ marginLeft: "30px" }}
                        to="#"
                        onClick={() => {
                          SetInputPosition("show");
                        }}
                      >
                        <PlusCircleOutlined />
                        <span style={{ marginLeft: "8px" }}>
                          {t(
                            "organigram.areas-and-positions.structure.link-add-position"
                          )}
                        </span>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <br />

              <Row
                className="btnTabs"
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              >
                <Col
                  style={{ textAlign: "right" }}
                  className="gutter-row"
                  span={24}
                >
                  <Link to="/organigrama/mybusiness">
                    <Button
                      className="secondary"
                      style={{ marginRight: "15px" }}
                    >
                      {t("organigram.areas-and-positions.structure.btn-cancel")}
                    </Button>
                  </Link>
                  {firtFlag ? (
                    <Button htmlType="submit" className="primary">
                      {t("organigram.areas-and-positions.structure.btn-save")}
                    </Button>
                  ) : (
                    <Link to="/organigrama/mybusiness">
                      <Button className="primary">Guardar</Button>
                    </Link>
                  )}
                </Col>
                <br />
              </Row>
            </Form>
          </div>
        </TabPane>

        <TabPane
          className="tabPane"
          style={{
            minHeight: "648px",
            paddingRight: "50px",
          }}
          tab="Puesto"
          key="2"
        >
          <div className="info">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                style={{ textAlign: "left" }}
                className="primaryText"
                span={6}
              >
                <span>
                  <b>
                    {t(
                      "organigram.areas-and-positions.position.title-position"
                    )}
                  </b>
                </span>
                <br />
                <span className="iconGreen">
                  {t("organigram.areas-and-positions.position.total-positions")}
                </span>
              </Col>

              <Col
                style={{ textAlign: "center" }}
                className="gutter-row"
                span={18}
              >
                <Link
                  to={
                    "/" +
                    t("routes.organigram") +
                    "/" +
                    t("paths_organigram.areasandpositions-massivep")
                  }
                >
                  <Button
                    className="third"
                    style={{
                      textAlign: "left",
                      marginRight: "20px",
                      pointerEvents: "none",
                    }}
                    icon={<ImArrowUp className="iconAjust2" />}
                  >
                    {" "}
                    <span className="textAjust2">
                      {t(
                        "organigram.areas-and-positions.position.btn-load-masive"
                      )}
                    </span>
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
                  <span className="textAjust">
                    {t(
                      "organigram.areas-and-positions.position.btn-download-file"
                    )}
                  </span>{" "}
                </Button>
                <Input
                  id="filter"
                  style={{ width: "250px" }}
                  addonAfter={<SearchOutlined />}
                  placeholder={t(
                    "organigram.areas-and-positions.position.placeholder-input"
                  )}
                  onKeyUp={filterJob}
                />
              </Col>
              <Row className="info2 dividerBottomFull">
                <Col className="secondaryText" span={8}>
                  <b>{t("organigram.areas-and-positions.position.position-name")}</b>
                </Col>
                <Col className="secondaryText" span={4}>
                 <b> {t(
                    "organigram.areas-and-positions.position.basic-information"
                  )}</b>
                </Col>
                <Col className="secondaryText" span={4}>
                  <b>{t("organigram.areas-and-positions.position.profiling")}</b>
                </Col>
                <Col className="secondaryText" span={4}>
                 <b> {t("organigram.areas-and-positions.position.skills")}</b>
                </Col>
                <Col className="secondaryText" span={4}>
                  <b>{t("organigram.areas-and-positions.position.actions")}</b>
                </Col>
              </Row>

              <div style={{ width: "77.5vw" }} id="positionList">
                <PositionListInformation
                  PositionsInfo={PositionsInfo}
                  setModalMove={setModalMove}
                />
              </div>

              <Form
                onFinish={sendPositionInfo}
                initialValues={{ positionName: "" }}
                form={forminfo}
              >
                <Row className={addJob}>
                  <Col
                    span={5}
                    style={{
                      textAlign: "right",
                      marginLeft: "20px",
                      marginRight: "0px",
                    }}
                  >
                    <Form.Item
                      style={{ textAlign: "left" }}
                      rules={[
                        {
                          required: true,
                          message: "*Campo requerido",
                        },
                      ]}
                      name="positionName"
                    >
                      <Input
                        type="text"
                        value={PositionInfo}
                        placeholder={t(
                          "organigram.areas-and-positions.position.input-placeholder-position"
                        )}
                      />
                    </Form.Item>
                  </Col>
                  <Col
                    span={2}
                    style={{ textAlign: "center", marginRight: "0px" }}
                  >
                    <Button
                      onClick={() => {
                        setAddJob("hide");
                      }}
                      className="secondary"
                    >
                      {t("organigram.areas-and-positions.position.btn-cancel")}
                    </Button>
                  </Col>
                  <Col span={2} style={{ textAlign: "left" }}>
                    <Button htmlType="submit" className="primary">
                      {t("organigram.areas-and-positions.position.btn-save")}
                    </Button>
                  </Col>
                  <Col span={10}></Col>
                </Row>
              </Form>
              <Row className="info">
                <Col
                  span={24}
                  style={{
                    textAlign: "left",
                    paddingLeft: "40px",
                    marginTop: "20px",
                  }}
                >
                  <Link
                    to="#"
                    onClick={() => {
                      setAddJob("show formPos");
                    }}
                  >
                    <PlusCircleOutlined className="iconsize" />
                    <span style={{ marginLeft: "8px" }}>
                      {t(
                        "organigram.areas-and-positions.position.link-add-new-position"
                      )}
                    </span>
                  </Link>
                </Col>
              </Row>
            </Row>
            <Form onFinish={onFinish2}>
              <Row
                className="btnTabs"
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              >
                <Col
                  style={{ textAlign: "right" }}
                  className="gutter-row"
                  span={24}
                >
                  <Link to="/organigrama/mybusiness">
                    <Button
                      className="secondary"
                      style={{ marginRight: "15px" }}
                    >
                      {t("organigram.areas-and-positions.position.btn-cancel")}
                    </Button>
                  </Link>

                  {firtFlag ? (
                    <Button htmlType="submit" className="primary">
                      {t("organigram.areas-and-positions.structure.btn-save")}
                    </Button>
                  ) : (
                    <Link to="/organigrama/mybusiness">
                      <Button className="primary">Guardar</Button>
                    </Link>
                  )}
                </Col>
                <br />
              </Row>
            </Form>
          </div>
        </TabPane>
      </Tabs>
      <ModalPassword Password={Password} setPassword={setPassword} />

      <ModalMoveArea
        modalMove={modalMove}
        setModalMove={setModalMove}
        setPassword={setPassword}
        setAreas={setAreas}
        subAreas={subAreas}
        setSubAreas={setSubAreas}
        setPositionsInfo={setPositionsInfo}
      />

      <ModalDownLoad
        ModalDownload={ModalDownload}
        setModalDownload={setModalDownload}
      />

      <Screens
        message={message}
        setMessage={setMessage}
        messageType={messageType}
        setActive={setActive}
      />
    </>
  );
}
