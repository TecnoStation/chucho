import React, { useEffect, useState } from "react";
import {
  Form,
  Tabs,
  Input,
  Select,
  Col,
  Row,
  Button,
  Modal,
  Slider,
  InputNumber,
} from "antd";
import {
  EnvironmentOutlined,
  PlusCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Branchs from "../../components/branchs/branchs";
import Screendefault from "../../components/Screens/Screendefault";
import Competencies from "../../components/Competencies/Competencies";
import Warning from "../../assets/img/icons/atencion.svg";
import Avatar from "../../assets/img/avatar.png";
import Bien from "../../assets/img/icons/bien_hecho.svg";
import "./MybusinessEdit.scss";
import Modalcompetencies from "../../components/Modals/Modalcompetencies/Modalcompetencies";
import Slidercompetencies from "../../components/Slider/Slidercompetencies";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";
const { TextArea } = Input;
const { Option } = Select;

const competencies = [];

export default function MybusinessEdit() {
  const [t, i18n] = useTranslation("global");

  const [editionmode, setEditionmode] = useState(false);
  const [branchs, setBranchs] = useState([]);
  const [valueTemporal, setValueTemporal] = useState({
    idBranch: "",
    name: "",
    direction: "",
  });

  const [form] = Form.useForm();

  const sendBranch = (values) => {
    setBranchs([
      ...branchs,
      {
        idBranch: uuid(),
        name: values["name"],
        direction: values["direction"],
      },
    ]);
    form.resetFields();
    setModal(false);
  };

  const editBranch = (Item) => {
    // setValueTemporal(Item);
    setEditionmode(true);
    setModal(true);
  };

  const deleteBranch = (Item) => {
    const arrFilter = branchs.filter((item) => item.idBranch !== Item.idBranch);
    setBranchs(arrFilter);
  };

  const { TabPane } = Tabs;

  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };

  const [modalCrop, setModalCrop] = useState(false);
  const closeModalCrop = () => {
    setModalCrop(false);
  };

  const [slider, setSlide] = useState(50);

  const [modalComp, setModalComp] = useState(false);
  const openModalComp = () => {
    setSlide(50);
    setAction(2);
    document.getElementById("edit").setAttribute("style", "display: none");
    document.getElementById("save").setAttribute("style", "display: ;");
    setModalComp(true);
  };

  const [modalPassword, setModalPassword] = useState(false);
  const closeModalPassword = () => {
    setModalPassword(false);
  };

  const [Item, setItem] = useState(false);

  const [Competence, setCompetence] = useState(false);
  const sendComp = () => {
    alert("ok");
    setModalComp(false);
  };
  const closeModalComp = () => {
    setModalComp(false);
  };
  const cefective = (competence, e) => {
    setCompetence(competence);
    document.getElementById("title").innerHTML = competence;
    let deleteMessage = document.getElementById("deleteMessage");
    deleteMessage.setAttribute("style", "display: none;");
    let next = document.getElementById("next");
    next.setAttribute("style", "display: none;");
    let cefective = document.getElementById("cefective");
    cefective.setAttribute("style", "display: flex;");
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: flex;");
  };

  const [editDataV, seteditDataV] = useState("button");
  const [deleteDataV, setdeleteDataV] = useState("hidden");
  const [action, setAction] = useState(false);

  const openModalPassword = (Item, action, data, e) => {
    setAction(action);
    if (action === 1) {
      setItem(Item);
      setSlide(data.nivel * 25);
      setCompetence(data.competence);
      seteditDataV("button");
      setdeleteDataV("hidden");
      setModalPassword(true);
    } else {
      setItem(Item);
      seteditDataV("hidden");
      setdeleteDataV("button");
      setModalPassword(true);
    }
  };

  const deleteItem = () => {
    document.getElementById("competence" + Item).remove();
    let deleteMessage = document.getElementById("deleteMessage");
    deleteMessage.setAttribute("style", "display: none;");
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
  };

  const warning = () => {
    setModalPassword(false);
    let deleteMessage = document.getElementById("deleteMessage");
    deleteMessage.setAttribute("style", "display: flex;");
    let next = document.getElementById("next");
    next.setAttribute("style", "display: none;");
    let cefective = document.getElementById("cefective");
    cefective.setAttribute("style", "display: none;");
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: flex;");
  };

  const sendPassword = () => {
    document.getElementById("save").setAttribute("style", "display: none;");
    document.getElementById("edit").setAttribute("style", "display: ");
    setModalPassword(false);
    setModalComp(true);
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

  const sendCrop = () => {
    alert("ok");
    setModalCrop(false);
  };

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

  const tabs = ["1", "2"];
  const [Active, setActive] = useState(tabs[0]);

  const closeInfo = () => {
    if (action !== 0) {
      competencies.push({ competence: Competence, nivel: slider / 25 });
    }
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
    setModalComp(false);
  };

  const changeActive = () => {
    if (Active === "1") {
      setActive(tabs[1]);
    } else {
      setActive(tabs[0]);
    }
  };

  const marks = {
    0: "0",
    25: "1",
    50: "2",
    75: "3",
    100: "4",
  };

  const closecefective = () => {
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
    let next = document.getElementById("next");
    next.setAttribute("style", "display: flex;");
    let cefective = document.getElementById("cefective");
    cefective.setAttribute("style", "display: none;");
  };

  const onChange = (inputValue) => {
    document.getElementById("nivel").value = inputValue / 25;
    setSlide(inputValue);
  };

  const onChangeInput = (inputValue) => {
    setSlide(inputValue * 25);
  };

  return (
    <>
      <Tabs
        className="tab"
        activeKey={Active}
        onChange={changeActive}
        type="card"
      >
        <TabPane className="tabPane" tab={t("organigrama.my-business-edit.information.tab-name")} key="1">
          <div className="info">
            <Modal
              title="Sube tu foto de perfil"
              visible={modalCrop}
              onCancel={closeModalCrop}
              onOk={sendCrop}
            >
              <h1>Áera en construción</h1>
            </Modal>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span={12}>
                <h2 style={{ textAlign: "left" }}>{t("organigrama.my-business-edit.information.title")}</h2>
                <Form Formname="form1" layout="vertical">
                  <p>
                    <img alt="ico" width="140" src={Avatar} />
                  </p>

                  <div className="formWork">
                    <Form.Item name="bussines" label={t("organigrama.my-business-edit.information.form.business-name")}>
                      <Input type="text" placeholder={t("organigrama.my-business-edit.information.form.business-name-placeholder")} />
                    </Form.Item>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                      <Col className="gutter-row" span={12}>
                        <Form.Item
                          name="activity"
                          label={t("organigrama.my-business-edit.information.form.business-activity")}
                          tooltip={info}
                        >
                          <Select placeholder={t("organigrama.my-business-edit.information.form.business-activity-placeholder")}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col className="gutter-row" span={12}>
                        <Form.Item
                          name="subactivity"
                          label={t("organigrama.my-business-edit.information.form.subactivity")}
                          tooltip={infosub}
                        >
                          <Select placeholder={t("organigrama.my-business-edit.information.form.subactivity-placeholder")}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                      <Col className="gutter-row" span={12}>
                        <Form.Item name="size" label={t("organigrama.my-business-edit.information.form.business-size")}>
                          <Select placeholder={t("organigrama.my-business-edit.information.form.business-size-placeholder")}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span={12}>
                        <Form.Item name="from" label={t("organigrama.my-business-edit.information.form.from")}>
                          <Select
                            className="gutter-row"
                            placeholder={t("organigrama.my-business-edit.information.form.from-placeholder")}
                          >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item name="site" label={t("organigrama.my-business-edit.information.form.site-web")}>
                      <Input type="text" placeholder={t("organigrama.my-business-edit.information.form.site-web-placeholder")} />
                    </Form.Item>
                    <Form.Item
                      name="officesName"
                      label={t("organigrama.my-business-edit.information.form.name-headquartes")}>
                      <Input type="text" placeholder={t("organigrama.my-business-edit.information.form.name-headquartes-placeholder")} />
                    </Form.Item>
                    <Form.Item
                      name="officesfrom"
                      label={t("organigrama.my-business-edit.information.form.headquartes-direction")}>
                      <Input addonAfter={<EnvironmentOutlined />} />
                    </Form.Item>
                  </div>
                </Form>
              </Col>
              <Col className="gutter-row dividerLeft" span={12}>
                <h2 style={{ textAlign: "left" }}>{t("organigrama.my-business-edit.information.form.add-branch-title")}</h2>
                <br />
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={12}>
                    <Form name="form" layout="vertical">
                      <Form.Item name="empresa">
                        <Input addonAfter={<SearchOutlined />} />
                      </Form.Item>
                    </Form>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <Link
                      to="#"
                      onClick={() => {
                        setModal(true);
                        setEditionmode(false);
                      }}
                    >
                      {" "}
                      <PlusCircleOutlined className="iconGreen" /> {t("organigrama.my-business-edit.information.form.add-branch-link")}
                    </Link>
                  </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={12}>
                    <span>{t("organigrama.my-business-edit.information.form.branches-added")}</span>
                  </Col>
                  <Col
                    className="gutter-row"
                    style={{ textAlign: "left" }}
                    span={12}
                  >
                    <span>{t("organigrama.my-business-edit.information.form.direction")}</span>
                  </Col>
                  <div className="divider">
                    <div className="dividerBottom"></div>
                  </div>
                </Row>

                <Branchs
                  branchs={branchs}
                  setValueTemporal={setValueTemporal}
                  setModal={setModal}
                  setItem={setItem}
                  Item={Item}
                  editBranch={editBranch}
                  deleteBranch={deleteBranch}
                />

                <Modal
                  title={editionmode ? t("organigrama.add-branch-modal.title2") : t("organigrama.add-branch-modal.title") }
                  className="middleModal"
                  visible={modal}
                  onCancel={() => {
                    setModal(false);
                    setValueTemporal({
                      idBranch: "",
                      name: "",
                      direction: "",
                    });
                    form.resetFields();
                  }}
                  footer={false}
                >
                  <Form
                    onFinish={sendBranch}
                    layout="vertical"
                    form={form}
                    initialValues={Item}
                  >
                    <Form.Item
                      label={t("organigrama.add-branch-modal.branch-name")}
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Ingresa el nombre de la sucursal",
                        },
                      ]}
                      style={{ textAlign: "left" }}
                    >
                      <Input
                        type="text"
                        placeholder={t("organigrama.add-branch-modal.branch-name-placeholder")}
                      />
                    </Form.Item>
                    <Form.Item
                      label={t("organigrama.add-branch-modal.branch-direction")}
                      name="direction"
                      rules={[
                        {
                          required: true,
                          message: "Ingresa la dirección de la sucursal",
                        },
                      ]}
                      style={{ textAlign: "left" }}
                    >
                      <Input
                        addonAfter={<EnvironmentOutlined />}
                        placeholder={t("organigrama.add-branch-modal.branch-direction-placeholder")}
                      />
                    </Form.Item>

                    <div style={{ textAlign: "right" }}>
                      <Form.Item
                        style={{
                          display: "inline-block",
                          marginRight: "16px",
                        }}
                      >
                        <Button
                          onClick={() => {
                            setValueTemporal({
                              name: "",
                              direction: "",
                            });
                            setModal(false);
                            form.resetFields();
                          }}
                          className="secondary"
                          >
                          {t("organigrama.add-branch-modal.btn-cancel")}
                        </Button>
                      </Form.Item>

                      <Form.Item
                        style={{
                          display: "inline-block",
                        }}
                      >
                        {editionmode ? (
                          <Button className="primary" htmlType="submit">
                            {t("organigrama.add-branch-modal.btn-edit")}
                          </Button>
                        ) : (
                          <Button className="primary" htmlType="submit">
                            {t("organigrama.add-branch-modal.btn-save")}
                          </Button>
                        )}
                      </Form.Item>
                    </div>
                  </Form>
                </Modal>
              </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                style={{ textAlign: "right" }}
                className="gutter-row"
                span={24}
              >
                <Link to="/organigrama/mybusiness">
                  <Button className="secondary" style={{ marginRight: "15px" }}>
                  {t("organigrama.add-branch-modal.btn-cancel")}
                  </Button>
                </Link>
                <Link to="/organigrama/mybusiness">
                  <Button className="primary">{t("organigrama.add-branch-modal.btn-save")}</Button>
                </Link>
              </Col>
              <br />
            </Row>
          </div>
        </TabPane>
        <TabPane className="tabPane" tab={t("organigrama.my-business-edit.culture.tab-name")} key="2">
          <div className="info">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={12}>
                <h2 style={{ textAlign: "left" }}>{t("organigrama.my-business-edit.culture.title")}</h2>
                <br />
                <Form name="form" layout="vertical">
                  <div className="formWork">
                    <Form.Item
                      name="propose"
                      label={t("organigrama.my-business-edit.culture.mission")}
                      tooltip={info}
                    >
                      <TextArea
                        placeholder={t("organigrama.my-business-edit.culture.mission-placeholder")}
                        rows={6}
                      />
                    </Form.Item>
                    <Form.Item name="vision" label={t("organigrama.my-business-edit.culture.View")} tooltip={info}>
                      <TextArea
                        placeholder={t("organigrama.my-business-edit.culture.View-placeholder")}
                        rows={6}
                      />
                    </Form.Item>
                    <Form.Item
                      name="bussinesDescriptions"
                      label={t("organigrama.my-business-edit.culture.business-description")}
                      tooltip={info}
                    >
                      <TextArea
                        placeholder={t("organigrama.my-business-edit.culture.business-description-placeholder")}
                        rows={6}
                      />
                    </Form.Item>
                  </div>
                </Form>
              </Col>
              <Col className="gutter-row dividerLeft" span={12}>
                <h2 style={{ textAlign: "left" }}>
                {t("organigrama.my-business-edit.culture.institutional-competencies")}
                </h2>
                <br />
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={10}>
                    <Link to="#" onClick={openModalComp}>
                      {" "}
                      <PlusCircleOutlined />  {t("organigrama.my-business-edit.culture.add-competencies")}
                    </Link>
                  </Col>
                </Row>

                <Modalcompetencies
                  modalComp={modalComp}
                  sendComp={sendComp}
                  closeModalComp={closeModalComp}
                  cefective={cefective}
                />

                <br />
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={10}>
                    <span>{t("organigrama.my-business-edit.culture.competencies-added")}</span>
                  </Col>
                  <Col
                    className="gutter-row"
                    style={{ textAlign: "center" }}
                    span={10}
                  >
                    <span>{t("organigrama.my-business-edit.culture.level")}</span>
                  </Col>
                  <div className="divider">
                    <div className="dividerBottom"></div>
                  </div>
                </Row>
                <div id="Competencias" className="Competencias">
                  <Competencies
                    myonClick={openModalPassword}
                    data={competencies}
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
                <Link to="/organigrama/mybusiness">
                  <Button className="secondary" style={{ marginRight: "15px" }}>
                  {t("organigrama.my-business-edit.culture.btn-cancel")}
                  </Button>
                </Link>

                <Link to="/organigrama/mybusiness">
                  <Button className="primary">{t("organigrama.my-business-edit.culture.btn-save")}</Button>
                </Link>
              </Col>
              <br />
            </Row>
          </div>
        </TabPane>
      </Tabs>

      <Screendefault>
        <div id="deleteMessage">
          <Row>
            <Col span={24}>
              <p style={{ textAlign: "center" }}>
                <img alt="ico" className="" src={Warning} />
              </p>
            </Col>
            <Col span={24}>
              <h3>¡Atención!</h3>
            </Col>
            <Col span={24}>
              <h3>Estás a punto de eliminar esta competencia.</h3>
            </Col>
            <Col span={24}>
              <h3>¿Seguro deseas eliminarla?</h3>
              <br />
            </Col>
            <Col span={24}>
              <Button
                style={{ marginRight: "15px" }}
                onClick={closeInfo}
                className="secondary btn"
              >
                Cancelar
              </Button>
              <Button onClick={deleteItem} className="primary btn">
                Eliminar
              </Button>
            </Col>
          </Row>
        </div>

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

        <div id="next" style={{ display: "none" }}>
          <p>
            <img alt="ico" width="140" src={Bien} />
          </p>
          <h3>¡Bien hecho!</h3>
          <h3>Ahora necesitamos conocer la cultura de tu empresa</h3>
          <br />
          <p>
            El papel de la cultura organizacional es esencial, pues constituye
            un motor que permite a la organización caminar hacia un mismo lugar,
            ya que determina las acciones y actitudes que deben tomarse en
            consideración para lograr los objetivos.
          </p>
          <br />
          <Button onClick={closeInfo} className="primary btn">
            Continuar
          </Button>
        </div>

        <div className="cefective" id="cefective" style={{ display: "none" }}>
          <Row>
            <Col
              style={{ textAlign: "left" }}
              className="dividerBottom"
              span={24}
            >
              <h4 id="title">{Competence}</h4>
            </Col>
            <Col style={{ textAlign: "left" }} span={24}>
              <br />
              <p>
                Los colaboradores que tienen un alto dominio de esta
                competencia, por lo general tienen la capacidad de:
              </p>
            </Col>
            <Col style={{ textAlign: "left" }} span={24}>
              <ul>
                <li>Escuchar y dispuesto a hacerlo.</li>
                <li>Entiende los mensajes verbales.</li>
                <li>Comprende los aspectos no verbales de la comunicación.</li>
                <li>Expresa sus ideas con claridad y coherencia.</li>
                <li>Genera el impacto deseado en sus interlocutores.</li>
              </ul>
            </Col>
            <Col span={24} style={{ textAlign: "left" }}>
              Aquí puedes consultar el significado de cada nivel
            </Col>
            <Col span={24}>
              <br />
              <span>
                <b>Dominio de competencia</b>
              </span>
              <br />
              <InputNumber
                id="nivel"
                className="tag-cefective"
                min={0}
                max={4}
                value={slider / 25}
                onChange={onChangeInput}
              />
              <input type="hidden" id="competence" value=""></input>
              <span style={{ display: "none" }} id="idcompe"></span>
              <br />
              <span>
                Competente: <b>2.6 - 3.4</b>
              </span>
            </Col>
            <Col span={4}></Col>
            <Col span={16} id="colSlider">
              <Slider
                id="Slider"
                marks={marks}
                onChange={onChange}
                step={null}
                value={slider}
                defaultValue={slider}
              />
            </Col>
            <Col span={4}></Col>
            <Col span={24} style={{ textAlign: "right" }}>
              <br />
              <Button
                onClick={closecefective}
                className="secondary"
                style={{ marginRight: "15px" }}
              >
                Cancelar
              </Button>
              <Button id="save" onClick={closeInfo} className="primary">
                Guardar
              </Button>
              <Button
                id="edit"
                style={{ display: "none" }}
                onClick={editInfo}
                className="primary"
              >
                Editar
              </Button>
            </Col>
          </Row>
        </div>

        <Modal
          className="middleModal"
          title="Editar competencias institucionales"
          visible={modalPassword}
          onCancel={closeModalPassword}
          onOk={sendPassword}
          footer={[
            <Button
              style={{ marginRight: "15px" }}
              className="secondary"
              onClick={closeModalPassword}
            >
              Cancelar
            </Button>,
            <input
              type={editDataV}
              onClick={sendPassword}
              className="primary"
              value="Ingresar"
            />,
            <input
              type={deleteDataV}
              onClick={warning}
              className="primary"
              value="Ingresar"
            />,
          ]}
        >
          <p>
            Al editar las competencias institucionales se verá reflejado en
            todos los colaboradores de tu empresa.
          </p>
          <br />
          <Form layout="vertical">
            <Form.Item name="password" label="Ingresa tu contraseña de usuario">
              <Input type="text" id="name" placeholder="Ej. Ghkcclsd23" />
            </Form.Item>
          </Form>
        </Modal>
      </Screendefault>
    </>
  );
}
