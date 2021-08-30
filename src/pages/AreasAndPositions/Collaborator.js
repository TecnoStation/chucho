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
import { Link, useHistory, useLocation } from "react-router-dom";
import More from "../../assets/img/icons/more_vert-24px.svg";
import Avatar from "../../assets/img/avatar.png";
import Bien from "../../assets/img/icons/bien_hecho.svg";
import Screendefault from "../../components/Screens/Screendefault";
import { PlusCircleOutlined } from "@ant-design/icons";
import ModalPassword from "../../components/Modals/ModalPassword/ModalPassword";
import { useTranslation } from "react-i18next";
import ModalPermissions from "../../components/Modals/ModalPermissions/ModalPermissions";
import ModalDocument from "../../components/Modals/ModalDocument/ModalDocument";
const { Option } = Select;

export default function Collaborator() {
  const [t, i18n] = useTranslation("global");
  const [Password, setPassword] = useState(false);
  const [ModalDocumets, setModalDocumets] = useState(false);
  const [Permissions, setPermissions] = useState(false);
  const [flag, setFlag] = useState("hide");
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link
            to="#"
            onClick={() => {
              setPermissions(true);
            }}
          >
            {t("organigram.collaborator-form.menu.add-permissions")}
          </Link>
        </Menu.Item>
      </Menu.Item>

      <Menu.Item key="0">
        <Menu.Item key="3" disabled>
          <Link to="#">
            {t("organigram.collaborator-form.menu.view-objetives")}
          </Link>
        </Menu.Item>
      </Menu.Item>

      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link
            to={
              "/" +
              t("routes.organigram") +
              "/" +
              t("paths_organigram.areasandpositions-perfil")
            }
          >
            {t("organigram.collaborator-form.menu.view-proceedings")}
          </Link>
        </Menu.Item>
      </Menu.Item>

      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link
            onClick={() => {
              setModalDocumets(true);
            }}
            to="#"
          >
            {t("organigram.collaborator-form.menu.assign-documents")}
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
                titleModal: t("organigram.delete-collaborator.title"),
                messageModal: t("organigram.delete-collaborator.text"),
                messageWarning: t(
                  "organigram.delete-collaborator.warning.text"
                ),
                question: t("organigram.delete-collaborator.warning.question"),
                type: 0,
                function: () => {
                  history.push({
                    pathname:
                      "/" +
                      t("routes.organigram") +
                      "/" +
                      t("paths_organigram.areasandpositions"),
                  });
                },
              });
            }}
          >
            {t("organigram.collaborator-form.menu.delete-collaborator")}
          </Link>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );

  const showmessage = () => {
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: flex;");
  };
  const onFinish = (values) => {
    showmessage();
  };

  return (
    <Form name="form1" layout="vertical" onFinish={onFinish}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={11}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={22} style={{ textAlign: "left" }}>
              <h1>{t("organigram.collaborator-form.title")}</h1>
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
              <Form.Item
                name="size"
                label={t("organigram.collaborator-form.position-label")}
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Select
                  placeholder={t(
                    "organigram.collaborator-form.position-placeholder"
                  )}
                >
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
                name="name"
                label={t("organigram.collaborator-form.name-label")}
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Input
                  type="text"
                  placeholder={t(
                    "organigram.collaborator-form.name-placeholder"
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="firstname"
                label={t("organigram.collaborator-form.first-name-label")}
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Input
                  type="text"
                  placeholder={t(
                    "organigram.collaborator-form.first-name-placeholder"
                  )}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="lastName"
                label={t("organigram.collaborator-form.last-name-label")}
              >
                <Input
                  type="text"
                  placeholder={t(
                    "organigram.collaborator-form.last-name-placeholder"
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="birthday"
                label={t("organigram.collaborator-form.date-brithday-label")}
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Input type="date" placeholder="DD/MM/AAAA " />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="noationality"
                label={t("organigram.collaborator-form.nationality-label")}
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Input
                  type="text"
                  placeholder={t(
                    "organigram.collaborator-form.nationality-placeholder"
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="stateMarital"
                label={t("organigram.collaborator-form.marital-status-label")}
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Select
                  placeholder={t(
                    "organigram.collaborator-form.marital-status-placeholder"
                  )}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="gender"
                label={t("organigram.collaborator-form.gender-label")}
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Select
                  placeholder={t(
                    "organigram.collaborator-form.gender-placeholder"
                  )}
                >
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
                name="email"
                label={t(
                  "organigram.collaborator-form.email-collaborator-label"
                )}
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Input
                  type="text"
                  placeholder={t(
                    "organigram.collaborator-form.email-collaborator-placeholder"
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="dateBegin"
                label={t("organigram.collaborator-form.date-admission-label")}
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Input type="date" placeholder="DD/MM/AAAA " />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="idCollaborator"
                label={t("organigram.collaborator-form.id-colaborator-label")}
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Select
                  placeholder={t(
                    "organigram.collaborator-form.id-colaborator-placeholder"
                  )}
                >
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
              <Form.Item
                name="city"
                label={t("organigram.collaborator-form.city-label")}
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Select
                  placeholder={t(
                    "organigram.collaborator-form.city-placeholder"
                  )}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name={t("organigram.collaborator-form.salari-placeholde")}
                label={t("organigram.collaborator-form.salary-label")}
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Input
                  type="text"
                  placeholder={t(
                    "organigram.collaborator-form.salary-placeholder"
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="Área"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
                label={t("organigram.collaborator-form.area-label")}
              >
                <Select
                  placeholder={t(
                    "organigram.collaborator-form.area-placeholder"
                  )}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="branch"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
                label={t("organigram.collaborator-form.branch-label")}
              >
                <Select
                  placeholder={t(
                    "organigram.collaborator-form.branch-placeholder"
                  )}
                >
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
                name="reprotTo"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
                label={t("organigram.collaborator-form.report-to-label")}
              >
                <Input
                  type="text"
                  placeholder={t(
                    "organigram.collaborator-form.report-to-placeholder"
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="studyLevel"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
                label={t(
                  "organigram.collaborator-form.educational-level-label"
                )}
              >
                <Select
                  placeholder={t(
                    "organigram.collaborator-form.educational-level-placeholder"
                  )}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="experience"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
                label={t("organigram.collaborator-form.years-experience-label")}
              >
                <Select
                  placeholder={t(
                    "organigram.collaborator-form.years-experience-placeholder"
                  )}
                >
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
                name="skills"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
                label={t("organigram.collaborator-form.skills-label")}
              >
                <Input
                  type="text"
                  placeholder={t(
                    "organigram.collaborator-form.skills-placeholder"
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="languajes"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
                label={t("organigram.collaborator-form.languajes-label")}
              >
                <Input
                  type="text"
                  placeholder={t(
                    "organigram.collaborator-form.languajes-placeholder"
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row style={{ marginTop: "300px" }}>
            <Col className="gutter-row" span={15}>
              {t("organigram.collaborator-form.text-footer")}
            </Col>
            <Col className="gutter-row" span={5}>
              <Link to="/areasandpositions?tab=2">
                <Button className="secondary">
                  {t("organigram.collaborator-form.btn-cancel")}
                </Button>
              </Link>
            </Col>
            <Col className="gutter-row" span={3}>
              <Button htmlType="submit" className="primary">
                {t("organigram.collaborator-form.btn-save")}
              </Button>
            </Col>
          </Row>
        </Col>
        <Screendefault>
          <p style={{ textAlign: "center" }}>
            <img alt="ico" width="140" src={Bien} />
          </p>
          <h3>{t("organigram.collaborator-form.well-done")}</h3>
          <h3>{t("organigram.collaborator-form.organization-created")}</h3>
          <br />
          <Link
            to={
              "/" +
              t("routes.organigram") +
              "/" +
              t("paths_organigram.organigram")
            }
          >
            <Button className="primary">
              {t("organigram.collaborator-form.btn-done")}
            </Button>
          </Link>
        </Screendefault>
      </Row>

      <ModalPermissions
        Permissions={Permissions}
        setPermissions={setPermissions}
      />

      <ModalDocument
        ModalDocumets={ModalDocumets}
        setModalDocumets={setModalDocumets}
      />
      <ModalPassword Password={Password} setPassword={setPassword} />
    </Form>
  );
}
