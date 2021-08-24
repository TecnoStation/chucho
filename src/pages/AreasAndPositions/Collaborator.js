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

  //--------------------- permissions - Documents - password - etc -------------------z

  const [Permissions, setPermissions] = useState(false);
  const [ModalDocumets, setModalDocumets] = useState(false);
  const [Password, setPassword] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  //--------------------- end permissions -----------------------------------------------

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
            {t("organigrama.collaborator-form.menu.add-permissions")}
          </Link>
        </Menu.Item>
      </Menu.Item>

      <Menu.Item key="0">
        <Menu.Item key="3" disabled>
          <Link to="#">
            {t("organigrama.collaborator-form.menu.view-objetives")}
          </Link>
        </Menu.Item>
      </Menu.Item>

      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link to="/areasandpositions-perfil">
            {t("organigrama.collaborator-form.menu.view-proceedings")}
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
                type: 0,
                titleModal: t("organigrama.delete-collaborator.title"),
                messageModal: t("organigrama.delete-collaborator.text"),
                messageWarning: t(
                  "organigrama.delete-collaborator.warning.text"
                ),
                question: t("organigrama.delete-collaborator.warning.question"),
                function: () => {
                  history.push({
                    pathname: "/organigrama/areasandpositions",
                    search: "?tab=1",
                  });
                },
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
  const onFinish = (values) => {
    showmessage();
    console.log("Success:", values);
  };

  return (
    <Form name="form1" layout="vertical" onFinish={onFinish}>
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
              <Form.Item
                name="size"
                label="Puesto"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Select placeholder="Selecciona el puesto a ocupar">
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
                label="Nombre*"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Input type="text" placeholder="Nombre " />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="firstname"
                label="Primer apellido* "
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Input type="text" placeholder="Apellido paterno " />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item name="lastName" label="Segundo apellido ">
                <Input type="text" placeholder="Apellido materno " />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="birthday"
                label="Fecha de nacimiento* "
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
                label="Nacionalidad* "
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Input type="text" placeholder="Nacionalidad " />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="stateMarital"
                label="Estado civil"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
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
                name="gender"
                label="Género"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
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
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="email"
                label="Correo electronico del colaborador "
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
                    "organigrama.collaborator-form.email-collaborator-placeholder"
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="dateBegin"
                label="Fecha de ingreso "
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
                label="ID de colaborador"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Select placeholder="Auto generada">
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
                label="Ciudad"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Select placeholder="Ciudad donde vive ">
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="salary"
                label="Salario "
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Input type="text" placeholder="Ej.$28,000.00 MXN " />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="area"
                label="Area*"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Select placeholder="Ej Dirección de Finanzas">
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="branch"
                label="Sucursal*"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Select placeholder="Zona centro CDMX">
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
                label="Reporta a* "
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
                    "organigrama.collaborator-form.report-to-placeholder"
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="studyLevel"
                label="Nivel de estudios"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Select placeholder="Ej. Educación Superior">
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="experience"
                label="años de experiencia"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
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
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="skills"
                label="Habilidades técnicas "
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Input type="text" placeholder="Ej. Microsoft Word " />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="languajes"
                label="Idiomas "
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Input type="text" placeholder="Ej. Ingles Avanzado " />
              </Form.Item>
            </Col>
          </Row>

          <Row style={{ marginTop: "300px" }}>
            <Col className="gutter-row" span={15}>
              {t("organigrama.collaborator-form.text-footer")}
            </Col>
            <Col className="gutter-row" span={5}>
              <Link to="/areasandpositions?tab=2">
                <Button className="secondary">
                  {t("organigrama.collaborator-form.btn-cancel")}
                </Button>
              </Link>
            </Col>
            <Col className="gutter-row" span={3}>
              <Button
                htmlType="submit"
                // onClick={showmessage}
                className="primary"
              >
                Guardar
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
    </Form>
  );
}
