import React, { useState } from "react";
import { Form, Tabs, Input, Select, Col, Row, Button } from "antd";
import {
  EnvironmentOutlined,
  PlusCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Branchs from "../../components/Branchs/Branchs";
import Competencies from "../../components/Competencies/Competencies";
import Avatar from "../../assets/img/avatar.png";
import "./MybusinessEdit.scss";
import Modalcompetencies from "../../components/Modals/Modalcompetencies/Modalcompetencies";
import { useTranslation } from "react-i18next";
import ModalPassword from "../../components/Modals/ModalPassword/ModalPassword";
import Screens from "../../components/Screens/Screens";
import ModalBranch from "../../components/Modals/ModalBranch/ModalBranch";
const { TextArea, Search } = Input;
const { Option } = Select;

export default function MybusinessEdit() {
  const [t, i18n] = useTranslation("global");

  const { TabPane } = Tabs;
  const tabs = ["1", "2"];
  const [Active, setActive] = useState(tabs[0]);

  const changeActive = () => {
    if (Active === "1") {
      setActive(tabs[1]);
    } else {
      setActive(tabs[0]);
    }
  };

  const [firtFlag, setFirtFlag] = useState(true);
  const [message, setMessage] = useState(false);

  const onFinish = (values) => {
    firtFlag ? setMessage(true) : console.log("Success:", values);
  };

  // // ---------- Branchs ---------------------------------------

  const [form] = Form.useForm();
  const [modal, setModal] = useState(false);
  const [branchs, setBranchs] = useState([]);
  const [editionmode, setEditionmode] = useState(false);
  const [index, setIndex] = useState();
  const [Password, setPassword] = useState("");

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
      messageWarning: "Estás a punto de eliminar la sucursal",
      messageModal:
        "Al eliminar las sucursales institucionales se verá reflejado en todos las áreas de tu empresa",
      question: "¿Seguro deseas eliminarla?",
      function: () => {
        const arrayFilter = branchs.filter((item) => item.idBranch !== id);
        setBranchs(arrayFilter);
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

  return (
    <>
      <Tabs
        className="tab"
        activeKey={Active}
        onChange={changeActive}
        type="card"
      >
        <TabPane className="tabPane" tab="Información" key="1">
          <div className="info">
            <Form name="formInformtion" onFinish={onFinish} layout="vertical">
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span={12}>
                  <h2 style={{ textAlign: "left" }}>
                    Información de Mi empresa
                  </h2>
                  <p>
                    <img alt="ico" width="140" src={Avatar} />
                  </p>

                  <div className="formWork">
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "*Campo requerido",
                        },
                      ]}
                      name="bussines"
                      label="Nombre de Mi empresa"
                    >
                      <Input type="text" placeholder="Nombre" />
                    </Form.Item>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                      <Col className="gutter-row" span={12}>
                        <Form.Item
                          rules={[
                            {
                              required: true,
                              message: "*Campo requerido",
                            },
                          ]}
                          name="activity"
                          label="Actividad de la empresa"
                          tooltip="info"
                        >
                          <Select placeholder="Selecciona una opción">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col className="gutter-row" span={12}>
                        <Form.Item
                          rules={[
                            {
                              required: true,
                              message: "*Campo requerido",
                            },
                          ]}
                          name="subactivity"
                          label="Subactividad de la empresa"
                          tooltip="info"
                        >
                          <Select placeholder="Selecciona una opción">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                      <Col className="gutter-row" span={12}>
                        <Form.Item
                          rules={[
                            {
                              required: true,
                              message: "*Campo requerido",
                            },
                          ]}
                          name="size"
                          label="Tamaño de la empresa"
                        >
                          <Select placeholder="Selecciona una opción">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} span={12}>
                        <Form.Item
                          rules={[
                            {
                              required: true,
                              message: "*Campo requerido",
                            },
                          ]}
                          name="from"
                          label="Pais"
                        >
                          <Select
                            className="gutter-row"
                            placeholder="Selecciona una opción"
                          >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "*Campo requerido",
                        },
                      ]}
                      name="site"
                      label="Sitio web"
                    >
                      <Input type="text" placeholder="Nombre" />
                    </Form.Item>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "*Campo requerido",
                        },
                      ]}
                      name="officesName"
                      label="Nombre de las oficinas centrales"
                    >
                      <Input type="text" placeholder="Nombre" />
                    </Form.Item>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "*Campo requerido",
                        },
                      ]}
                      name="officesfrom"
                      label="Dirección de las oficinas centrales"
                    >
                      <Input addonAfter={<EnvironmentOutlined />} />
                    </Form.Item>
                  </div>
                </Col>
                <Col className="gutter-row dividerLeft" span={12}>
                  <h2 style={{ textAlign: "left" }}>Agregar sucursal</h2>
                  <br />
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12}>
                      <Search
                        id="filter"
                        onChange={filterBranchs}
                        placeholder="Buscar Sucursal"
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
                        <PlusCircleOutlined className="iconGreen" /> Agregar
                        sucursal
                      </Link>
                    </Col>
                  </Row>
                  <Row
                    style={{ marginTop: "15px" }}
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  >
                    <Col className="gutter-row" span={12}>
                      <span>Sucursales Agregadas</span>
                    </Col>
                    <Col
                      className="gutter-row"
                      style={{ textAlign: "left" }}
                      span={12}
                    >
                      <span>Dirección</span>
                    </Col>
                    <div className="divider">
                      <div className="dividerBottom"></div>
                    </div>
                  </Row>
                  <div id="branchList">
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
                  <Link to="/organigrama/mybusiness">
                    <Button
                      className="secondary"
                      style={{ marginRight: "15px" }}
                    >
                      Cancelar
                    </Button>
                  </Link>
                  {firtFlag ? (
                    <Button htmlType="submit" className="primary">
                      Guardar
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

        <TabPane className="tabPane" tab="Cultura" key="2">
          <div className="info">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={12}>
                <h2 style={{ textAlign: "left" }}>Cultura Mi empresa</h2>
                <br />
                <Form name="formCulture" layout="vertical">
                  <div className="formWork">
                    <Form.Item
                      name="propose"
                      label="Proposito / mision"
                      tooltip="info"
                    >
                      <TextArea
                        placeholder="Ej. “Organizar la información del mundo y hacerla universalmente accesible y útil.” - Google (1000 caracteres)"
                        rows={6}
                      />
                    </Form.Item>
                    <Form.Item name="vision" label="Visión" tooltip="info">
                      <TextArea
                        placeholder="Ej. “Ej. “Ser el motor de búsqueda más importante del mundo” - Google (1000 caracteres)"
                        rows={6}
                      />
                    </Form.Item>
                    <Form.Item
                      name="bussinesDescriptions"
                      label="Descripción de la empresa"
                      tooltip="info"
                    >
                      <TextArea
                        placeholder="Ej. “Ser el motor de búsqueda más importante del mundo” -Google (1000 caracteres)"
                        rows={6}
                      />
                    </Form.Item>
                  </div>
                </Form>
              </Col>
              <Col className="gutter-row dividerLeft" span={12}>
                <h2 style={{ textAlign: "left" }}>
                  Competencias institucionales
                </h2>
                <br />
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={10}>
                    <Link
                      to="#"
                      onClick={() => {
                        setModalComp(true);
                        setSlider(50);
                      }}
                    >
                      <PlusCircleOutlined /> Agregar competencia
                    </Link>
                  </Col>
                </Row>

                <br />
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={11}>
                    <span>
                      <b>Competencias agregadas</b>
                    </span>
                  </Col>
                  <Col
                    className="gutter-row"
                    style={{ textAlign: "center" }}
                    span={10}
                  >
                    <span>
                      <b>Nivel</b>
                    </span>
                  </Col>
                  <div className="divider">
                    <div className="dividerBottom"></div>
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
                <Link to="/organigrama/mybusiness">
                  <Button className="secondary" style={{ marginRight: "15px" }}>
                    Cancelar
                  </Button>
                </Link>

                <Link to="/organigrama/mybusiness">
                  <Button className="primary">Guardar</Button>
                </Link>
              </Col>
              <br />
            </Row>
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

      <Screens
        message={message}
        setMessage={setMessage}
        messageType={0}
        setActive={setActive}
      />
    </>
  );
}
