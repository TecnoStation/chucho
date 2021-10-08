import React, { useState } from "react";
import { Form, Tabs, Input, Select, Col, Row, Button, Modal, Tooltip, Text } from "antd";
import { EnvironmentOutlined, PlusCircleOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Branchs from "../../components/Branchs/Branchs";
import Competencies from "../../components/Competencies/Competencies";
import Avatar from "../../assets/img/avatar.png";
import Modalcompetencies from "../../components/Modals/Modalcompetencies/Modalcompetencies";
import { useTranslation } from "react-i18next";
import ModalPassword from "../../components/Modals/ModalPassword/ModalPassword";
import Screens from "../../components/Screens/Screens";
import ModalBranch from "../../components/Modals/ModalBranch/ModalBranch";
import Good from "../../assets/img/icons/bien_hecho.svg";
import { FaCamera } from "react-icons/fa";

import "./MybusinessEdit.scss";
import SelectDinamic from "../../components/SelectDinamic/SelectDinamic";
import ModalPhoto from "../../components/Modals/ModalPhoto/ModalPhoto";

const { TextArea, Search } = Input;
const { Option } = Select;

export default function MybusinessEdit() {
  const [t, i18n] = useTranslation("global");

  const { TabPane } = Tabs;

  const tabs = ["1", "2"];
  const [Active, setActive] = useState("1");

  const changeActive = (e) => {
    setActive(e);
  };

  const [firtFlag, setFirtFlag] = useState(true);
  const [message, setMessage] = useState(false);
  const [messageType, setMessageType] = useState(0);

  const onFinish = (values) => {
    setMessageType(0);
    firtFlag ? setMessage(true) : console.log("Success:", values);
  };

  const onFinish2 = (values) => {
    setMessageType(2);
    firtFlag ? setMessage(true) : console.log("Success:", values);
  };

  //---------------- upload photo -----------------------------

  const [photo, setPhoto] = useState(false);

  //---------------- end upload photo -------------------------

  // ---------- Branchs ---------------------------------------

  const [form] = Form.useForm();
  const [modal, setModal] = useState(false);
  const [branchs, setBranchs] = useState([]);
  const [editionmode, setEditionmode] = useState(false);
  const [index, setIndex] = useState();
  const [Password, setPassword] = useState(false);

  const edit = (branch, index) => {
    setEditionmode(true);
    setModal(true);
    setIndex(index);
    form.setFieldsValue({
      name: branch.name,
      direction: branch.direction,
    });
  };

  const deleteBranch = (id) => {
    setPassword({
      titleModal: "Eliminar sucursal",
      visible: true,
      type: 0,
      messageModal:
        "Al eliminar las sucursales institucionales se verá reflejado en todos las áreas de tu empresa",
      messageWarning: "Estás a punto de eliminar la sucursal",
      question: "¿Seguro deseas eliminarla?",
      function: () => {
        const arrayFilter = branchs.filter((item) => item.idBranch !== id);
        setBranchs(arrayFilter);

        const modal = Modal.info({
          title: "",
          className: "MessagesModal",
          centered: true,
          content: (
            <Row>
              <Col span={24}>
                <p>
                  <img alt="ico" className="" src={Good} />
                </p>
              </Col>
              <Col span={24}>
                <h2>
                  <b>Sucursal eliminada</b>
                </h2>
              </Col>
              <Col span={24}>
                <h3></h3>
              </Col>
              <Col span={24}>
                <h3></h3>
                <br />
              </Col>
              <Col span={24}>
                <Button
                  style={{ width: "50%" }}
                  onClick={() => {
                    modal.destroy();
                  }}
                  className="primary btn"
                >
                  {t("organigram.password-modal.btn-done")}
                </Button>
              </Col>
            </Row>
          ),
          onOk() {},
        });
      },
    });
  };

  //----------------- Filter Branchs ------------------------------------------
  const filterBranchs = () => {
    const input = document.getElementById("filter");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("branchList");
    const row = div.getElementsByClassName("rowbranch");
    let i;
    for (i = 0; i < row.length; i++) {
      let col = row[i].getElementsByClassName("namesbranch")[0];
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

  //----------------- End Filter Branchs ------------------------------------------

  // // ---------- End  Branchs --------------------------------------------

  //--------------- competences-----------------------------------------
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

  //----------------- End Selects Dinamic Data --------------------------------

  //----------------------- Image Perfil --------------------------------------

  const [src, setSrc] = useState(Avatar);

  //----------------------- End Image Perfil -----------------------------------

  const text = (<>
    <span style={{color: "#000"}}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</b></span><br/><br/><span style={{color: "#000"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volup</span>
  </>);

  return (
    <>
      <Tabs
        defaultActiveKey={"1"}
        activeKey={Active}
        onChange={changeActive}
        type="card"
      >
        <TabPane
          className="tabPane"
          tab={t("organigram.my-business-edit.information.tab-name")}
          key="1"
        >
          <div className="info">
            <Form name="formInformtion" onFinish={onFinish} layout="vertical">
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span={12}>
                  <h2 className="title2">
                    {t("organigram.my-business-edit.information.title")}
                  </h2>
                  <div className="photo">
                    <img
                      alt="ico"
                      style={{
                        width: "100px",
                        borderRadius: "50%",
                      }}
                      src={src}
                    />
                    <div
                      onClick={() => {
                        setPhoto(true);
                      }}
                      className="camera"
                    >
                      <FaCamera className="iconsize1" />
                    </div>
                  </div>

                  <div style={{ marginTop: "15px" }} className="formWork">
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: t("field-requiered"),
                        },
                      ]}
                      name="bussines"
                      label={t(
                        "organigram.my-business-edit.information.form.business-name"
                      )}
                    >
                      <Input
                        type="text"
                        placeholder={t(
                          "organigram.my-business-edit.information.form.business-name-placeholder"
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
                            "organigram.my-business-edit.information.form.business-activity"
                          )}
                        >
                          <Tooltip color="#FFFDE7" title={text}>
                              <span style={{ marginLeft: "172px", fontSize: "13px", marginTop: "-29px", position: "absolute" }}>
                              <QuestionCircleOutlined className="iconSureGray" />
                              </span>
                          </Tooltip>  
                          <SelectDinamic
                            placeholder={t(
                              "organigram.my-business-edit.information.form.business-activity-placeholder"
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
                            "organigram.my-business-edit.information.form.subactivity-busines"
                          )}
                        >
                          <Tooltip color="#FFFDE7" title={text}>
                              <span style={{ marginLeft: "195px", fontSize: "13px", marginTop: "-29px", position: "absolute" }}>
                              <QuestionCircleOutlined className="iconSureGray" />
                              </span>
                          </Tooltip>  
                          <SelectDinamic
                            placeholder={t(
                              "organigram.my-business-edit.information.form.business-activity-placeholder"
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
                            "organigram.my-business-edit.information.form.business-size"
                          )}
                        >
                          <SelectDinamic
                            placeholder={t(
                              "organigram.my-business-edit.information.form.business-activity-placeholder"
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
                          name="from"
                          label={t(
                            "organigram.my-business-edit.information.form.from"
                          )}
                        >
                          <SelectDinamic
                            placeholder={t(
                              "organigram.my-business-edit.information.form.business-activity-placeholder"
                            )}
                            data={data}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: t("field-requiered"),
                        },
                      ]}
                      name="site"
                      label={t(
                        "organigram.my-business-edit.information.form.site-web"
                      )}
                    >
                      <Input
                        type="text"
                        placeholder={t(
                          "organigram.my-business-edit.information.form.site-web-placeholder"
                        )}
                      />
                    </Form.Item>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: t("field-requiered"),
                        },
                      ]}
                      name="officesName"
                      label={t(
                        "organigram.my-business-edit.information.form.name-headquartes"
                      )}
                    >
                      <Input
                        type="text"
                        placeholder={t(
                          "organigram.my-business-edit.information.form.name-headquartes-placeholder"
                        )}
                      />
                    </Form.Item>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: t("field-requiered"),
                        },
                      ]}
                      name="officesfrom"
                      label={t(
                        "organigram.my-business-edit.information.form.headquartes-direction"
                      )}
                    >
                      <Input addonAfter={<EnvironmentOutlined />} />
                    </Form.Item>
                  </div>
                </Col>
                <Col className="gutter-row dividerLeft" span={12}>
                  <h3 className="title2" style={{}}>
                    {t(
                      "organigram.my-business-edit.information.form.add-branch-title"
                    )}
                  </h3>
                  <br />
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12}>
                      <Search
                        id="filter"
                        onChange={filterBranchs}
                        placeholder={t(
                          "organigram.my-business-edit.information.form.search-branch-placeholder"
                        )}
                      />
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <Link
                        to="#"
                        onClick={() => {
                          setEditionmode(false);
                          form.setFieldsValue({
                            name: "",
                            direction: "",
                          });

                          setModal(true);
                        }}
                      >
                        <PlusCircleOutlined className="iconGreen" />
                        <span style={{ marginLeft: "8px" }}>
                          {" "}
                          {t(
                            "organigram.my-business-edit.information.form.add-branch-link"
                          )}
                        </span>
                      </Link>
                    </Col>
                  </Row>
                  <Row
                    style={{ marginTop: "15px", textAlign: "left" }}
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span className="secondaryText">
                        {t(
                          "organigram.my-business-edit.information.form.branches-added"
                        )}
                      </span>
                    </Col>
                    <Col className="gutter-row" style={{}} span={12}>
                      <span className="secondaryText">
                        {t(
                          "organigram.my-business-edit.information.form.direction"
                        )}
                      </span>
                    </Col>
                    <div className="divider">
                      <div className="dividerBottom2"></div>
                    </div>
                  </Row>
                  <div id="branchList" className="branchList">
                    <Branchs
                      branchs={branchs}
                      edit={edit}
                      deleteBranch={deleteBranch}
                    />
                  </div>
                </Col>
              </Row>

              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  style={{ textAlign: "right" }}
                  className="gutter-row"
                  span={24}
                >
                  <Link
                    to={
                      "/" +
                      t("routes.organigram") +
                      "/" +
                      t("paths_organigram.mybusiness")
                    }
                  >
                    <Button
                      className="secondary"
                      style={{ marginRight: "15px" }}
                    >
                      {t(
                        "organigram.my-business-edit.information.form.btn-cancel"
                      )}
                    </Button>
                  </Link>
                  {firtFlag ? (
                    <Button htmlType="submit" className="primary">
                      {t(
                        "organigram.my-business-edit.information.form.btn-save"
                      )}
                    </Button>
                  ) : (
                    <Link
                      to={
                        "/" +
                        t("routes.organigram") +
                        "/" +
                        t("paths_organigram.mybusiness")
                      }
                    >
                      <Button className="primary">
                        {t(
                          "organigram.my-business-edit.information.form.btn-save"
                        )}
                      </Button>
                    </Link>
                  )}
                </Col>
                <br />
              </Row>
            </Form>
          </div>
        </TabPane>

        <TabPane className="tabPane" tab="Cultura" key="2">
          <div className="info">
            <Form name="formCulture" onFinish={onFinish2} layout="vertical">
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                  <h2 style={{ textAlign: "left" }} className="title2">
                    {t("organigram.my-business-edit.culture.title")}
                  </h2>
                  <br />

                  <div className="formWork">
                    <Form.Item
                      name="propose"
                      label="Proposito / mision"
                      
                      rules={[
                        {
                          required: true,
                          message: t("field-requiered"),
                        },
                      ]}
                    >
                      <Tooltip color="#FFFDE7" title={text}>
                        <span style={{ marginLeft: "133px", fontSize: "13px", marginTop: "-28px", position: "absolute" }}>
                        <QuestionCircleOutlined className="iconSureGray" />
                        </span>
                      </Tooltip>
                      <TextArea
                        placeholder={t(
                          "organigram.my-business-edit.culture.mission-placeholder"
                        )}
                        rows={6}
                      />
                    </Form.Item>
                    <Form.Item
                      name="vision"
                      label="Visión"
                      rules={[
                        {
                          required: true,
                          message: t("field-requiered"),
                        },
                      ]}
                    >
                      <Tooltip color="#FFFDE7" title={text}>
                        <span style={{ marginLeft: "57px", fontSize: "13px", marginTop: "-28px", position: "absolute" }}>
                        <QuestionCircleOutlined className="iconSureGray" />
                        </span>
                      </Tooltip>
                      <TextArea
                        placeholder={t(
                          "organigram.my-business-edit.culture.View-placeholder"
                        )}
                        rows={6}
                      />
                    </Form.Item>
                    <Form.Item
                      name="bussinesDescriptions"
                      label={t(
                        "organigram.my-business-edit.culture.business-description"
                      )}
                      rules={[
                        {
                          required: true,
                          message: t("field-requiered"),
                        },
                      ]}
                    >
                      <Tooltip color="#FFFDE7" title={text}>
                        <span style={{ marginLeft: "183px", fontSize: "13px", marginTop: "-28px", position: "absolute" }}>
                        <QuestionCircleOutlined className="iconSureGray" />
                        </span>
                      </Tooltip>
                      <TextArea
                        placeholder={t(
                          "organigram.my-business-edit.culture.business-description-placeholder"
                        )}
                        rows={6}
                        rules={[
                          {
                            required: true,
                            message: t("field-requiered"),
                          },
                        ]}
                      />
                    </Form.Item>
                  </div>
                </Col>
                <Col className="gutter-row dividerLeft" span={12}>
                  <h2 className="title2" style={{ textAlign: "left" }}>
                    {t(
                      "organigram.my-business-edit.culture.institutional-competencies"
                    )}
                  </h2>
                  <br />
                  <Row
                    style={{ textAlign: "left" }}
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  >
                    <Col className="gutter-row" span={10}>
                      <Link
                        to="#"
                        onClick={() => {
                          setModalComp(true);
                          setSlider(50);
                        }}
                      >
                        <PlusCircleOutlined />{" "}
                        <span style={{ marginLeft: "8px" }}>
                          {t(
                            "organigram.my-business-edit.culture.add-competencies-link"
                          )}
                        </span>
                      </Link>
                    </Col>
                  </Row>

                  <br />
                  <Row
                    style={{ textAlign: "left" }}
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  >
                    <Col
                      style={{ paddingLeft: "15px" }}
                      className="gutter-row"
                      span={12}
                    >
                      <span>
                        <b className="secondaryText">
                          {t(
                            "organigram.my-business-edit.culture.competencies-added"
                          )}
                        </b>
                      </span>
                    </Col>
                    <Col
                      className="gutter-row"
                      style={{ textAlign: "center" }}
                      span={10}
                    >
                      <span>
                        <b className="secondaryText">
                          {t("organigram.my-business-edit.culture.level")}
                        </b>
                      </span>
                    </Col>
                    <div className="divider">
                      <div className="dividerBottom2"></div>
                    </div>
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
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  style={{ textAlign: "right" }}
                  className="gutter-row"
                  span={24}
                >
                  <Link
                    to={
                      "/" +
                      t("routes.organigram") +
                      "/" +
                      t("paths_organigram.mybusiness")
                    }
                  >
                    <Button
                      className="secondary"
                      style={{ marginRight: "15px" }}
                    >
                      {t("organigram.my-business-edit.culture.btn-cancel")}
                    </Button>
                  </Link>

                  {firtFlag ? (
                    <Button htmlType="submit" className="primary">
                      {t(
                        "organigram.my-business-edit.information.form.btn-save"
                      )}
                    </Button>
                  ) : (
                    <Link
                      to={
                        "/" +
                        t("routes.organigram") +
                        "/" +
                        t("paths_organigram.mybusiness")
                      }
                    >
                      <Button className="primary">
                        {t(
                          "organigram.my-business-edit.information.form.btn-save"
                        )}
                      </Button>
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
      <ModalBranch
        form={form}
        modal={modal}
        setModal={setModal}
        branchs={branchs}
        setBranchs={setBranchs}
        editionmode={editionmode}
        setEditionmode={setEditionmode}
        index={index}
      />

      <Modalcompetencies
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

      <ModalPhoto setSrc={setSrc} photo={photo} setPhoto={setPhoto} />

      <Screens
        message={message}
        setMessage={setMessage}
        messageType={messageType}
        setActive={setActive}
      />
    </>
  );
}
