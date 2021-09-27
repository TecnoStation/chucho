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
  Tag,
  Modal,
} from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import More from "../../assets/img/icons/more_vert-24px.svg";
import Avatar from "../../assets/img/avatar.png";
import Bien from "../../assets/img/icons/bien_hecho.svg";
import Screendefault from "../../components/Screens/Screendefault";
import ModalPassword from "../../components/Modals/ModalPassword/ModalPassword";
import { useTranslation } from "react-i18next";
import ModalPermissions from "../../components/Modals/ModalPermissions/ModalPermissions";
import ModalDocument from "../../components/Modals/ModalDocument/ModalDocument";
import ModalMoveArea from "../../components/Modals/ModalMoveArea/ModalMoveArea";
import SelectDinamic from "../../components/SelectDinamic/SelectDinamic";
import Good from "../../assets/img/icons/bien_hecho.svg";
import { FaCamera } from "react-icons/fa";
import ModalPhoto from "../../components/Modals/ModalPhoto/ModalPhoto";

const { Option } = Select;

export default function Collaborator() {
  const [t, i18n] = useTranslation("global");
  const [Password, setPassword] = useState(false);
  const [ModalDocumets, setModalDocumets] = useState(false);
  const [Permissions, setPermissions] = useState(false);
  const [modalMove, setModalMove] = useState(false);
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
                type: 1,
                function: () => {
                  setModalMove({
                    visible: true,
                    mode: 5,
                    modalTitle: t("organigram.delete-collaborator.tex2"),
                  });
                  // history.push({
                  //   pathname:
                  //     "/" +
                  //     t("routes.organigram") +
                  //     "/" +
                  //     t("paths_organigram.areasandpositions"),
                  // });
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
    // showmessage();
    const modal = Modal.info({
      title: "",
      className: "MessagesModal",
      centered: true,
      content: (
        <Row style={{ marginTop: "-30px" }}>
          <Col span={24}>
            <p>
              <img alt="ico" className="" src={Good} />
            </p>
          </Col>
          <Col style={{ marginTop: "-15px" }} span={24}>
            <h2>
              <h3>{t("organigram.collaborator-form.well-done")}</h3>
            </h2>
          </Col>
          <Col span={24} style={{ padding: "0px 60px 0px 60px" }}>
            <h3 style={{ fontWeight: "bold" }}>
              {t("organigram.collaborator-form.organization-created")}
            </h3>
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
                history.push({
                  pathname:
                    "/" +
                    t("routes.organigram") +
                    "/" +
                    t("paths_organigram.organigram"),
                });
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
  };

  const tagRender = ({ label, closable }) => {
    return (
      <Tag className="tagNormal" closable={closable}>
        {label}
      </Tag>
    );
  };

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
  //---------------- upload photo -----------------------------

  const [photo, setPhoto] = useState(false);

  //---------------- end upload photo -------------------------

  return (
    <Form name="form1" layout="vertical" onFinish={onFinish}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={11}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={22} style={{ textAlign: "left" }}>
              <h1 className="primaryText">
                {t("organigram.collaborator-form.title")}
              </h1>
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
                <SelectDinamic
                  placeholder={t(
                    "organigram.collaborator-form.position-placeholder"
                  )}
                  data={data}
                />
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
                <SelectDinamic
                  placeholder={t(
                    "organigram.collaborator-form.marital-status-placeholder"
                  )}
                  data={data}
                />
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
                <SelectDinamic
                  placeholder={t(
                    "organigram.collaborator-form.gender-placeholder"
                  )}
                  data={data}
                />
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
                <SelectDinamic
                  placeholder={t(
                    "organigram.collaborator-form.id-colaborator-placeholder"
                  )}
                  data={data}
                />
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
                <SelectDinamic
                  placeholder={t(
                    "organigram.collaborator-form.city-placeholder"
                  )}
                  data={data}
                />
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
                <SelectDinamic
                  placeholder={t(
                    "organigram.collaborator-form.area-placeholder"
                  )}
                  data={data}
                />
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
                <SelectDinamic
                  placeholder={t(
                    "organigram.collaborator-form.branch-placeholder"
                  )}
                  data={data}
                />
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
                <SelectDinamic
                  placeholder={t(
                    "organigram.collaborator-form.educational-level-placeholder"
                  )}
                  data={data}
                />
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
                <SelectDinamic
                  placeholder={t(
                    "organigram.collaborator-form.years-experience-placeholder"
                  )}
                  data={data}
                />
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
                <Select
                  mode="tags"
                  tagRender={tagRender}
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
                <Select
                  mode="tags"
                  tagRender={tagRender}
                  placeholder={t(
                    "organigram.collaborator-form.languajes-placeholder"
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row style={{ marginTop: "300px" }}>
            <Col className="gutter-row" span={16}>
              {t("organigram.collaborator-form.text-footer")}
            </Col>
            <Col style={{ textAlign: "right" }} span={8}>
              <Link
                style={{ marginRight: "16px" }}
                to={
                  "/" +
                  t("routes.organigram") +
                  "/" +
                  t("paths_organigram.areasandpositions")
                }
              >
                <Button className="secondary">
                  {t("organigram.collaborator-form.btn-cancel")}
                </Button>
              </Link>
              <Button htmlType="submit" className="primary">
                {t("organigram.collaborator-form.btn-save")}
              </Button>
            </Col>
          </Row>
        </Col>
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
      <ModalMoveArea
        modalMove={modalMove}
        setModalMove={setModalMove}
        setPassword={setPassword}
      />
      <ModalPhoto setSrc={setSrc} photo={photo} setPhoto={setPhoto} />
    </Form>
  );
}
