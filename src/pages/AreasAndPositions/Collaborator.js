import React, { useState } from "react";
import {
  Col,
  Dropdown,
  Row,
  Menu,
  Form,
  Select,
  Input,
  Button,
  Modal,
  Checkbox,
} from "antd";
import { Link } from "react-router-dom";
import More from "../../assets/img/icons/more_vert-24px.svg";
import Avatar from "../../assets/img/avatar.png";
import Bien from "../../assets/img/icons/bien_hecho.svg";
import Screendefault from "../../components/Screens/Screendefault";
import { PlusCircleOutlined } from "@ant-design/icons";
import ModalPassword from "../../components/Modals/ModalPassword/ModalPassword";
import { useTranslation } from "react-i18next";
const { Option } = Select;

export default function Collaborator() {
  const [t, i18n] = useTranslation("global");
  const [Password, setPassword] = useState(false);

  const [Documets, setDocumets] = useState(false);
  const closeModalDocuments = () => {
    setDocumets(false);
  };
  const openModalDocuments = () => {
    setDocumets(true);
  };

  const [Permissions, setPermissions] = useState(false);
  const closeModalPermissions = () => {
    setPermissions(false);
  };
  const sendPermissions = () => {
    alert("permissions enviados");
  };
  const addPermissions = () => {
    setPermissions(true);
  };

  const [flag, setFlag] = useState("hide");
  const addDocument = () => {
    setFlag("show");
  };
  const hiddeDocument = () => {
    setFlag("hide");
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link to="#" onClick={addPermissions}>
            {t("organigrama.collaborator-form.menu.add-permissions")}
          </Link>
        </Menu.Item>
      </Menu.Item>

      <Menu.Item key="0">
        <Menu.Item key="3" disabled>
          <Link to="#">{t("organigrama.collaborator-form.menu.view-objetives")}</Link>
        </Menu.Item>
      </Menu.Item>

      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link to="/areasandpositions-perfil">{t("organigrama.collaborator-form.menu.view-proceedings")}</Link>
        </Menu.Item>
      </Menu.Item>

      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link onClick={openModalDocuments} to="#">
          {t("organigrama.collaborator-form.menu.assign-documents")}
          </Link>
        </Menu.Item>
      </Menu.Item>

      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link
            to="#"
            onClick={() => {
              setPassword({
                visible: true,
                titleModal: t("organigrama.delete-collaborator.title"),
                messageModal:
                t("organigrama.delete-collaborator.text"),
                messageWarning: t("organigrama.delete-collaborator.warning.text"),
                question: t("organigrama.delete-collaborator.warning.question"),
              });
            }}
          >
            {t("organigrama.collaborator-form.menu.delete-collaborator")}
          </Link>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );

  const showmessage = () => {
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: flex;");
  };

  return (
    <Form name="form1" layout="vertical">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={11}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}> 
            <Col span={22} style={{ textAlign: "left" }}>
              <h1>{t("organigrama.collaborator-form.title")}</h1>
            </Col>
            <Col span={2}>
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

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ textAlign: "center" }}
          >
            <Col className="gutter-row" span={24}>
              <p>
                <img alt="ico" width="140" src={Avatar} />
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Form.Item name="size" label={t("organigrama.collaborator-form.position-label")}>
                <Select placeholder={t("organigrama.collaborator-form.position-placeholder")}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Form.Item name="bussines" label={t("organigrama.collaborator-form.name-label")}>
                <Input type="text" placeholder={t("organigrama.collaborator-form.name-placeholder")} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item name="bussines" label={t("organigrama.collaborator-form.first-name-label")}>
                <Input type="text" placeholder={t("organigrama.collaborator-form.first-name-placeholder")} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item name="bussines" label={t("organigrama.collaborator-form.last-name-label")}>
                <Input type="text" placeholder={t("organigrama.collaborator-form.last-name-placeholder")} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item name="bussines" label={t("organigrama.collaborator-form.date-brithday-label")} >
                <Input type="date" placeholder={t("organigrama.collaborator-form.date-brithday-placeholder")}  />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item name="bussines" label={t("organigrama.collaborator-form.nationality-label")}>
                <Input type="text" placeholder={t("organigrama.collaborator-form.nationality-placeholder")} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item name="size" label={t("organigrama.collaborator-form.marital-status-label")}>
                <Select placeholder={t("organigrama.collaborator-form.marital-status-placeholder")}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item name="size" label={t("organigrama.collaborator-form.gender-label")}>
                <Select placeholder={t("organigrama.collaborator-form.gender-placeholder")}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="bussines"
                label={t("organigrama.collaborator-form.email-collaborator-label")}
              >
                <Input type="text" placeholder={t("organigrama.collaborator-form.email-collaborator-placeholder")} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item name="bussines" label={t("organigrama.collaborator-form.date-admission-label")}>
                <Input type="date" placeholder={t("organigrama.collaborator-form.date-admission-placeholder")} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item name="size" label={t("organigrama.collaborator-form.id-colaborator-label")}>
                <Select placeholder={t("organigrama.collaborator-form.id-colaborator-placeholder")}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Col>

        <Col className="dividerLeft gutter-row" span={13}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item name="size" label={t("organigrama.collaborator-form.city-label")}>
                <Select placeholder={t("organigrama.collaborator-form.city-placeholder")}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item name="bussines" label={t("organigrama.collaborator-form.salary-label")}>
                <Input type="text" placeholder={t("organigrama.collaborator-form.salary-placeholder")} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item name="size" label={t("organigrama.collaborator-form.area-label")}>
                <Select placeholder={t("organigrama.collaborator-form.area-placeholder")}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item name="size" label={t("organigrama.collaborator-form.branch-label")}>
                <Select placeholder={t("organigrama.collaborator-form.branch-placeholder")}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Form.Item name="bussines" label={t("organigrama.collaborator-form.report-to-label")}>
                <Input
                  type="text"
                  placeholder={t("organigrama.collaborator-form.report-to-placeholder")}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item name="size" label={t("organigrama.collaborator-form.educational-level-label")}>
                <Select placeholder={t("organigrama.collaborator-form.educational-level-placeholder")}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item name="size" label={t("organigrama.collaborator-form.years-experience-label")}>
                <Select placeholder={t("organigrama.collaborator-form.years-experience-placeholder")}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Form.Item name="bussines" label={t("organigrama.collaborator-form.skills-label")}>
                <Input type="text" placeholder={t("organigrama.collaborator-form.skills-placeholder")} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Form.Item name="bussines" label={t("organigrama.collaborator-form.languajes-label")}>
                <Input type="text" placeholder={t("organigrama.collaborator-form.languajes-placeholder")} />
              </Form.Item>
            </Col>
          </Row>

          <Row style={{ marginTop: "300px" }}>
            <Col className="gutter-row" span={15}>
            {t("organigrama.collaborator-form.text-footer")}
            </Col>
            <Col className="gutter-row" span={5}>
              <Link to="/areasandpositions?tab=2">
                <Button className="secondary">{t("organigrama.collaborator-form.btn-cancel")}</Button>
              </Link>
            </Col>
            <Col className="gutter-row" span={3}>
              <Button onClick={showmessage} className="primary">
              {t("organigrama.collaborator-form.btn-save")}
              </Button>
            </Col>
          </Row>
        </Col>
        <Screendefault>
          <p style={{ textAlign: "center" }}>
            <img alt="ico" width="140" src={Bien} />
          </p>
          <h3>{t("organigrama.collaborator-form.well-done")}</h3>
          <h3>{t("organigrama.collaborator-form.organization-created")}</h3>
          <br />
          <Link to="/organigrama">
            <Button className="primary">{t("organigrama.collaborator-form.btn-done")}</Button>
          </Link>
        </Screendefault>
      </Row>
      <Modal
        title={t("organigrama.collaborator-form.permissions-modal.title")}
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
            {t("organigrama.collaborator-form.permissions-modal.btn-cancel")}
          </Button>,
          <Button className="primary" onClick={closeModalPermissions}>
            {t("organigrama.collaborator-form.permissions-modal.btn-appli")}
          </Button>,
        ]}
      >
        <Form style={{ marginLeft: "10px" }}>
          <Form.Item name="Administrador">
            <Checkbox>{t("organigrama.collaborator-form.permissions-modal.permissions-adminitrator")}</Checkbox>
          </Form.Item>
          <Form.Item name="Nine" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigrama.collaborator-form.permissions-modal.permissions-nine")}</Checkbox>
          </Form.Item>
          <Form.Item name="remember" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigrama.collaborator-form.permissions-modal.permissions-objectives")}</Checkbox>
          </Form.Item>
          <Form.Item name="Organigrama" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigrama.collaborator-form.permissions-modal.permissions-organizatition")}</Checkbox>
          </Form.Item>
          <Form.Item name="editar" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigrama.collaborator-form.permissions-modal.permissions-edit-organization")}</Checkbox>
          </Form.Item>
          <Form.Item name="Desarrollo" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigrama.collaborator-form.permissions-modal.permissions-plan-developing")}</Checkbox>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title={t("organigrama.assign-documents.title")}
        className="smallModal"
        visible={Documets}
        onCancel={closeModalDocuments}
        onOk={openModalDocuments}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={closeModalDocuments}
          >
            {t("organigrama.assign-documents.btn-cancel")}
          </Button>,
          <Button className="primary" onClick={closeModalDocuments}>
            {t("organigrama.assign-documents.btn-save")}
          </Button>,
        ]}
      >
        <Form style={{ marginLeft: "10px" }}>
          <Form.Item name="Administrador">
            <Checkbox>{t("organigrama.assign-documents.curp")}</Checkbox>
          </Form.Item>
          <Form.Item name="Nine" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigrama.assign-documents.proof-studies")}</Checkbox>
          </Form.Item>
          <Form.Item name="remember" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigrama.assign-documents.proof-address")}</Checkbox>
          </Form.Item>
          <Form.Item name="Organigrama" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigrama.assign-documents.official-identification")}</Checkbox>
          </Form.Item>
          <Form.Item name="editar" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigrama.assign-documents.birth-certificate")}</Checkbox>
          </Form.Item>
          <Form.Item name="Desarrollo" style={{ marginTop: "-25px" }}>
            <Link to="#" onClick={addDocument}>
              {" "}
              <PlusCircleOutlined /> {t("organigrama.assign-documents.link-add-document")}
            </Link>
          </Form.Item>
          <Row className={flag}>
            <Col span={24}>
              <Row style={{ marginTop: "-20px" }}>
                <Col span={24}>
                  <span>
                    <b>{t("organigrama.assign-documents.add-new-document")}</b>
                  </span>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col span={22}>
                  <Input
                    type="text"
                    placeholder="Ej. Número de Seguridad Social NSS"
                  />
                </Col>
                <Col style={{ textAlign: "right" }} span={2}>
                  <Link
                    onClick={hiddeDocument}
                    to="#"
                    style={{ fontSize: "20px", marginLeft: "10px" }}
                  >
                    {" "}
                    <PlusCircleOutlined />{" "}
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Modal>
      <ModalPassword Password={Password} setPassword={setPassword} />
    </Form>
  );
}
