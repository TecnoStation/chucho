import React, { useState } from "react";
import {
  Col,
  Dropdown,
  Input,
  Menu,
  Row,
  Form,
  Select,
  Button,
  Tag,
  Modal,
  Checkbox,
} from "antd";
import More from "../../assets/img/icons/more_vert-24px.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import { RiPencilFill } from "react-icons/ri";
import { PlusCircleOutlined } from "@ant-design/icons";
import Modalcompetencies from "../../components/Modals/Modalcompetencies/Modalcompetencies";
import Screendefault from "../../components/Screens/Screendefault";
import Slidercompetencies from "../../components/Slider/Slidercompetencies";
import { IoMdSquare } from "react-icons/io";
import Avatar from "../../assets/img/avatar.png";
import Warning from "../../assets/img/icons/atencion.svg";
import Treearea from "../../components/Tree/Treearea";
import { useTranslation } from "react-i18next";

const { Option } = Select;

export default function AreasAndPositionsAddJob() {
  const [t, i18n] = useTranslation("global");
  const treeData = [
    {
      title: "CEO",
      key: "1",
      icon: <IoMdSquare />,
      children: [
        {
          title: "Director General A",
          key: "0-1",
          icon: <IoMdSquare />,
        },
        {
          title: "Director General B",
          key: "0-2",
          icon: <IoMdSquare />,
        },
      ],
    },
  ];

  const treeData2 = [
    {
      title: "CEO",
      key: "1",
      icon: <IoMdSquare />,
      children: [
        {
          title: "Gerente Ventas",
          key: "0-1",
          icon: <IoMdSquare />,
          children: [
            {
              title: "Sub Gerente Ventas",
              key: "0-1-0",
              icon: <IoMdSquare />,
            },
            {
              title: "Sub Gerente de marketing",
              key: "0-1-1",
              icon: <IoMdSquare />,
            },
          ],
        },
        {
          title: "Director General B",
          key: "0-2",
          icon: <IoMdSquare />,
        },
      ],
    },
  ];

  const [slider, setSlide] = useState(50);
  const [action, setAction] = useState(false);
  const [modalComp, setModalComp] = useState(false);
  const [Competence, setCompetence] = useState(false);
  const [Item, setItem] = useState(false);
  const [Permissions, setPermissions] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const competencies = [];

  const openModalComp = () => {
    setSlide(50);
    setAction(2);
    setModalComp(true);
  };

  const sendComp = () => {
    alert("ok");
    setModalComp(false);
  };
  const closeModalComp = () => {
    setModalComp(false);
  };

  const cefective = (competence, e) => {
    setCompetence(competence);
    document.getElementById("titulo").innerHTML = competence;
    let deleteMessage = document.getElementById("deleteMessage");
    deleteMessage.setAttribute("style", "display: none;");
    let slide = document.getElementById("slide");
    slide.setAttribute("style", "display: flex;");
    let cefective = document.getElementById("cefective");
    cefective.setAttribute("style", "display: flex;");
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: flex;");
  };

  const onChangeInput = (inputValue) => {
    setSlide(inputValue * 25);
  };

  const onChange = (inputValue) => {
    document.getElementById("nivel").value = inputValue / 25;
    setSlide(inputValue);
  };

  const closecefective = () => {
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
    let cefective = document.getElementById("cefective");
    cefective.setAttribute("style", "display: none;");
  };

  const closeInfo = () => {
    if (action !== 0) {
      competencies.push({ competence: Competence, nivel: slider / 25 });
    }
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
    setModalComp(false);
  };

  const editInfo = () => {
    competencies[Item].competence = Competence;
    competencies[Item].nivel = slider / 25;
    document.getElementById("nomCompe" + Item).innerHTML = Competence;
    document.getElementById("nivel" + Item).innerHTML = slider / 25;
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
    setModalComp(false);
  };

  const marks = {
    0: "0",
    25: "1",
    50: "2",
    75: "3",
    100: "4",
  };

  const closeModalPermissions = () => {
    setPermissions(false);
  };

  const sendPermissions = () => {
    alert("permisos enviados");
  };

  const addPermissions = () => {
    setPermissions(true);
  };

  const [modalPassword, setModalPassword] = useState(false);
  const closeModalPassword = () => {
    setModalPassword(false);
  };
  const openModalPassword = () => {
    setModalPassword(true);
  };

  const sendPassword = () => {
    let slide = document.getElementById("slide");
    slide.setAttribute("style", "display: none;");
    let deleteMessage = document.getElementById("deleteMessage");
    deleteMessage.setAttribute("style", "display: flex;");
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: flex;");
    setModalPassword(false);
  };

  const deleteItem = () => {
    let deleteMessage = document.getElementById("deleteMessage");
    deleteMessage.setAttribute("style", "display: none;");
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
    setModalPassword(false);
    query.set("tab", 2);
    history.push({ pathname: "/areasandpositions", search: "?tab=2" });
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link to="#" onClick={addPermissions}>
            Agregar permisos
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link to="#" onClick={openModalPassword}>
            Eliminar puesto
          </Link>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );

  const info = () => {
    return (
      <>
        <span>
          <b>Actividad de la empresa:</b>
        </span>
        <br />
        <span>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500
        </span>
      </>
    );
  };

  const infosub = () => {
    return (
      <>
        <span>
          <b>Subactividad de la empresa:</b>
        </span>
        <br />
        <span>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500
        </span>
      </>
    );
  };

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}> 
        <Col className="gutter-row" span={14}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={22}
              style={{ textAlign: "left", marginBottom: "30px" }}
            >
              <h3>
                <b>{t("organigrama.areasandpositions-addjob.title")}</b>
              </h3>
              <span>{t("organigrama.areasandpositions-addjob.tex")}</span>
            </Col>
            <Col className="gutter-row" span={2}>
              <Dropdown overlay={menu} trigger={["click"]}>
                <Link
                  to="#"
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <img alt="logo" src={More} width="25" height="25" />
                </Link>
              </Dropdown>
            </Col>
          </Row>
          <Form Formname="form1" layout="vertical">
            <div className="formWork">
              <Form.Item name="bussines" label={t("organigrama.areasandpositions-addjob.label-nameposition")}>
                <Input type="text" placeholder={t("organigrama.areasandpositions-addjob.placeholder-position")} />
              </Form.Item>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                  <Form.Item
                    name="activity"
                    label={t("organigrama.areasandpositions-addjob.label-levelposition")}
                    tooltip={info}
                  >
                    <Select placeholder={t("organigrama.areasandpositions-addjob.placeholder-direction")}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={12}>
                  <Form.Item
                    name="subactivity"
                    label={t("organigrama.areasandpositions-addjob.label-positionpersonalized")}
                    tooltip={infosub}
                  >
                    <Select placeholder={t("organigrama.areasandpositions-addjob.placeholder-personalized")}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                  <Form.Item name="size" label={t("organigrama.areasandpositions-addjob.label-kindposition")}>
                    <Select placeholder={t("organigrama.areasandpositions-addjob.placeholder-positionkey")}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span={12}>
                  <Form.Item name="from" label={t("organigrama.areasandpositions-addjob.label-levelrisk")}>
                    <Select className="gutter-row" placeholder={t("organigrama.areasandpositions-addjob.placeholder-high")}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span={12}>
                  <Form.Item name="from" label={t("organigrama.areasandpositions-addjob.label-levelstudies")}>
                    <Select
                      className="gutter-row"
                      placeholder={t("organigrama.areasandpositions-addjob.placeholder-educationhigher")}
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span={12}>
                  <Form.Item name="from" label={t("organigrama.areasandpositions-addjob.label-yearsexperience")}>
                    <Select
                      className="gutter-row"
                      placeholder={t("organigrama.areasandpositions-addjob.placeholder-selec")}
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </div>

            <Form Formname="form1" layout="vertical">
              <Row style={{ marginTop: "20px" }}>
                <Col span={24}>
                  <span>
                    <b>{t("organigrama.areasandpositions-addjob.abilities-for-position")}</b>
                  </span>
                  <br />
                  <br />
                </Col>
              </Row>

              <Row style={{ marginBottom: "10px" }}>
                <Col span={24}>
                  <Tag className="TagArea" closable>
                    QuickBooks
                  </Tag>{" "}
                  <Tag className="TagArea" closable>
                    Suite Office
                  </Tag>
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <Form.Item name="habilidades" label={t("organigrama.areasandpositions-addjob.label-skilltech")}>
                    <Input
                      type="text"
                      id="habilidades"
                      placeholder={t("organigrama.areasandpositions-addjob.placeholder-word")}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <span>
                    <b>{t("organigrama.areasandpositions-addjob.label-languages")}</b>
                  </span>
                  <br />
                  <br />
                </Col>
              </Row>
            </Form>

            <Row style={{ marginBottom: "10px" }}>
              <Col span={24}>
                <Tag className="TagArea" closable>
                  Ingles avanzado
                </Tag>{" "}
                <Tag className="TagArea" closable>
                  Frances
                </Tag>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Form.Item name="idiomas" label={t("organigrama.areasandpositions-addjob.label-languages")}>
                  <Input
                    type="text"
                    id="idiomas"
                    placeholder={t("organigrama.areasandpositions-addjob.placeholder-english")}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>

          <Row className="dividerBottomFull">
            <Col span={10}>
              <b>{t("organigrama.areasandpositions-addjob.competences")}</b>
            </Col>
            <Col style={{ textAlign: "center" }} span={14}>
              <b>{t("organigrama.areasandpositions-addjob.level")}</b>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col span={17}>
              <b>Creatividad</b>
            </Col>
            <Col span={5}>3</Col>
            <Col span={2}></Col>
          </Row>

          <Row className="tagTwo" style={{ marginTop: "10px" }}>
            <Col span={17}>
              <b>Solución de Problemas - Desarrolla Alternativas</b>
            </Col>
            <Col span={5}>3</Col>
            <Col span={2}>
              <RiPencilFill style={{ marginRight: "10px", marginTop: "7px" }} />
            </Col>
          </Row>

          <Row className="dividerBottomFull" style={{ marginTop: "20px" }}>
            <Col span={16}>
              <b>{t("organigrama.areasandpositions-addjob.competences2")}</b>
            </Col>
            <Col span={8}>
              <Link to="#" onClick={openModalComp}>
                {" "}
                <PlusCircleOutlined /> {t("organigrama.areasandpositions-addjob.link-addcompeten")}
              </Link>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col span={17}>
              <b>Actitud de servicio</b>{" "}
            </Col>
            <Col span={5}>3</Col>
            <Col span={2}></Col>
          </Row>

          <Row className="tagTwo" style={{ marginTop: "10px" }}>
            <Col span={17}>
              <b>Apego a normas</b>
            </Col>
            <Col span={5}>3</Col>
            <Col span={2}>
              <RiPencilFill style={{ marginRight: "10px", marginTop: "7px" }} />
            </Col>
          </Row>

          <Row className="dividerBottomFull" style={{ marginTop: "20px" }}>
            <Col span={16}>
              <b>{t("organigrama.areasandpositions-addjob.competen-position")}</b>
            </Col>
            <Col span={8}>
              <Link to="#" onClick={openModalComp}>
                {" "}
                <PlusCircleOutlined /> {t("organigrama.areasandpositions-addjob.link-addcompetens")}
              </Link>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col span={17}>
              <b>Competencias del puesto</b>{" "}
            </Col>
            <Col span={5}>3</Col>
            <Col span={2}></Col>
          </Row>

          <Row className="tagTwo" style={{ marginTop: "10px" }}>
            <Col span={17}>
              <b>Competencias del puesto</b>
            </Col>
            <Col span={5}>3</Col>
            <Col span={2}>
              <RiPencilFill style={{ marginRight: "10px", marginTop: "7px" }} />
            </Col>
          </Row>

          <Row style={{ marginTop: "30px" }}>
            <Col style={{ textAlign: "center" }} span={14}>
              <b>{t("organigrama.areasandpositions-addjob.fields-obligatory")}</b>
            </Col>
            <Col span={5}>
              <Link to="/organigrama/areasandpositions-collaborator">
                <Button className="secondary">{t("organigrama.areasandpositions-addjob.btn-cancel")}</Button>
              </Link>
            </Col>
            <Col span={5}>
              <Link to="/organigrama/areasandpositions-collaborator">
                <Button className="primary">{t("organigrama.areasandpositions-addjob.btn-save")}</Button>
              </Link>
            </Col>
          </Row>
        </Col>

        <Col className="gutter-row dividerLeft" span={10}>
          <Row>
            <Col span={24}>
              <h3>{t("organigrama.areasandpositions-addjob.title1")}</h3>
            </Col>
          </Row>
          <Row>
            <Col className="dividerBottom divScrool" span={24}>
              <Treearea treeData={treeData} />
              <br />
              <Treearea treeData={treeData2} />
              <br />
              <Treearea treeData={treeData} />
              <br />
              <Treearea treeData={treeData2} />
              <br />
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col span={24}>
              <p>
                <b>{t("organigrama.areasandpositions-addjob.tex-colaborator")}</b>
              </p>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <p>
                <img alt="ico" width="50" src={Avatar} />
              </p>
            </Col>
            <Col span={21}>
              <span>
                <b>Laura Mendoza</b>
              </span>
              <br />
              <span>Director General A</span>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <p>
                <img alt="ico" width="50" src={Avatar} />
              </p>
            </Col>
            <Col span={21}>
              <span>
                <b>Panchita Lopez</b>
              </span>
              <br />
              <span>Director General B</span>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modalcompetencies
        modalComp={modalComp}
        sendComp={sendComp}
        closeModalComp={closeModalComp}
        cefective={cefective}
      />
      <Screendefault>
        <div id="slide">
          <Slidercompetencies
            Competence={Competence}
            slider={slider}
            onChangeInput={onChangeInput}
            marks={marks}
            onChange={onChange}
            closecefective={closecefective}
            closeInfo={closeInfo}
            editInfo={editInfo}
          />
        </div>
        <div id="deleteMessage" style={{ display: "none" }}>
          <Row>
            <Col span={24}>
              <p style={{ textAlign: "center" }}>
                <img alt="ico" className="" src={Warning} />
              </p>
            </Col>
            <Col span={24}>
              <h3>{t("organigrama.areasandpositions-addjob.modal-positio.atention")}</h3>
            </Col>
            <Col span={24}>
              <h3>{t("organigrama.areasandpositions-addjob.modal-positio.text1")}</h3>
            </Col>
            <Col span={24}>
              <h3>{t("organigrama.areasandpositions-addjob.modal-positio.question")}</h3>
              <br />
            </Col>
            <Col span={24}>
              <Button
                style={{ marginRight: "15px" }}
                onClick={closeInfo}
                className="secondary btn"
              >
                {t("organigrama.areasandpositions-addjob.modal-positio.btn-cancel")}
              </Button>
              <Button onClick={deleteItem} className="primary btn">
              {t("organigrama.areasandpositions-addjob.modal-positio.btn-remove")}
              </Button>
            </Col>
          </Row>
        </div>
      </Screendefault>

      <Modal
        title={t("organigrama.areasandpositions-addjob.add-positionmodal.title")}
        className="smallModal"
        visible={Permissions}
        onCancel={closeModalPermissions}
        onOk={sendPermissions}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={closeModalPermissions}
          >
            {t("organigrama.areasandpositions-addjob.add-positionmodal.btn-cancel")}
          </Button>,
          <Button className="primary" onClick={closeModalPermissions}>
            {t("organigrama.areasandpositions-addjob.add-positionmodal.btn-appli")}
          </Button>,
        ]}
      >
        <Form style={{ marginLeft: "10px" }}>
          <Form.Item name="Administrador">
            <Checkbox>{t("organigrama.areasandpositions-addjob.add-positionmodal.permissions-adminitrator")}</Checkbox>
          </Form.Item>
          <Form.Item name="Nine" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigrama.areasandpositions-addjob.add-positionmodal.permissions-nine")}</Checkbox>
          </Form.Item>
          <Form.Item name="remember" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigrama.areasandpositions-addjob.add-positionmodal.permissions-objectives")}</Checkbox>
          </Form.Item>
          <Form.Item name="Organigrama" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigrama.areasandpositions-addjob.add-positionmodal.permissions-organizatition")}</Checkbox>
          </Form.Item>
          <Form.Item name="editar" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigrama.areasandpositions-addjob.add-positionmodal.permissions-edit-organization")}</Checkbox>
          </Form.Item>
          <Form.Item name="Desarrollo" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigrama.areasandpositions-addjob.add-positionmodal.permissions-plan-developing")}</Checkbox>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        className="middleModal"
        title={t("organigrama.areasandpositions-addjob.modal-competens.title")}
        visible={modalPassword}
        onCancel={closeModalPassword}
        onOk={sendPassword}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={closeModalPassword}
          >
            {t("organigrama.areasandpositions-addjob.modal-competens.btn-cancel")}
          </Button>,
          <input
            type="button"
            onClick={sendPassword}
            className="primary"
            value={t("organigrama.areasandpositions-addjob.modal-competens.btn-enter")}
          />,
        ]}
      >
        <p style={{ textAlign: "left" }}>
        {t("organigrama.areasandpositions-addjob.modal-competens.tex")}
        </p>
        <br />
        <Form layout="vertical">
          <Form.Item name="password" label={t("organigrama.areasandpositions-addjob.modal-competens.label-enteruser")}>
            <Input type="text" id="nombre" placeholder={t("organigrama.areasandpositions-addjob.modal-competens.placeholder-user")} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
