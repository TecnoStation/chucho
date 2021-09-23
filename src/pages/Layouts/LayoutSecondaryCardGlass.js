import React, { useState } from "react";
import { Col, Row, Menu, Dropdown, Avatar, Input, Button } from "antd";
import {
  CaretDownOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, Redirect, Route } from "react-router-dom";
import MenuEvo from "../../components/MenuEvo/MenuEvo";
import MaterialIcon from "material-icons-react";
import { MdDeviceHub } from "react-icons/md";
import { useTranslation } from "react-i18next";

import { Layout } from "antd";
import "./LayoutSecondary.scss";
import { IoIosArrowForward } from "react-icons/io";
import SelectLevel from "./components/SelectLevel/SelectLevel";

//const user = null;
const user = { id: 1, username: "Lupita Gamiño" };
const { Header, Content } = Layout;

export default function LayoutSecondaryCardGlass({
  title: Title,
  component: Component,
  ...rest
}) {
  const [t, i18n] = useTranslation("global");
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link
          to={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-perfil")
          }
        >
          Ver Perfil
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">Cerrar sesión</Menu.Item>
    </Menu>
  );

  const [eraser, setEraser] = useState("show");
  const [save, setSave] = useState(false);
  const [levels, setLevels] = useState([
    {
      id: 0,
      name: "Ver 1 nivel",
    },
    {
      id: 1,
      name: "Ver 2 niveles",
    },
    {
      id: 2,
      name: "Ver 3 niveles",
    },
    {
      id: 3,
      name: "Ver 4 niveles",
    },
    {
      id: 4,
      name: "Ver 5 niveles",
    },
  ]);

  return (
    <Route {...rest}>
      {user ? (
        <>
          <Layout>
            <Row>
              <Col className="menuSide">
                <MenuEvo />
              </Col>

              <Col span={22} className="contentFrame">
                <Header>
                  <Row>
                    <Col style={{ textAlign: "left" }} span={3} MdDeviceHub>
                      <h3 className="title2">{Title}</h3>
                    </Col>
                    <Col
                      span={1}
                      style={{
                        textAlign: "center",
                        fontSize: "22px",
                        marginTop: "0px",
                        cursor: "pointer",
                      }}
                    >
                      <Link
                        className="iconBlue"
                        to={
                          "/" +
                          t("routes.organigram") +
                          "/" +
                          t("paths_organigram.organigram")
                        }
                      >
                        <MdDeviceHub />{" "}
                      </Link>
                    </Col>
                    <Col
                      span={1}
                      className="dividerLeft"
                      style={{
                        height: "40px",
                        textAlign: "center",
                        marginTop: "5px",
                        paddingBottom: "20px",
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      <Link
                        to={
                          "/" +
                          t("routes.organigram") +
                          "/" +
                          t("paths_organigram.organigramlist")
                        }
                      >
                        <MaterialIcon icon="format_list_bulleted" />
                      </Link>{" "}
                    </Col>
                    <Col
                      span={5}
                      style={{ textAlign: "center", marginTop: "15px" }}
                    >
                      <Input
                        addonAfter={<SearchOutlined />}
                        placeholder="Buscar puesto"
                      />
                    </Col>
                    <Col
                      span={1}
                      style={{ marginTop: "6px", textAlign: "center" }}
                    >
                      <MaterialIcon icon="filter_alt" />
                    </Col>
                    <Col span={6}></Col>
                    <Col span={2} style={{ textAlign: "center" }}>
                      <SelectLevel levels={levels} />
                    </Col>
                    <Col
                      style={{
                        textAlign: "right",
                        paddingRight: "10px",
                      }}
                      span={4}
                    >
                      <Dropdown overlay={menu} trigger={["click"]}>
                        <Link
                          to=""
                          className="principalColorText"
                          onClick={(e) => e.preventDefault()}
                        >
                          {user.username} <Avatar icon={<UserOutlined />} />{" "}
                          <CaretDownOutlined />
                        </Link>
                      </Dropdown>
                    </Col>
                    <Col
                      span={1}
                      style={{ marginTop: "5px", textAlign: "left" }}
                    >
                      <Link to={"/" + t("routes.messages")}>
                        <MaterialIcon icon="notifications" />
                      </Link>
                    </Col>
                  </Row>
                  <Row
                    className={eraser}
                    style={{
                      background: "#E2E6EC",
                      position: "absolute",
                      width: "100%",
                      left: "0",
                      top: "0",
                    }}
                  >
                    <Col span={1}></Col>
                    <Col span={1}>
                      <span>Borradores</span>
                    </Col>
                    <Col
                      style={{
                        textAlign: "left",
                        marginLeft: "20px",
                        marginTop: "2px",
                      }}
                      span={1}
                    >
                      <span style={{ position: "absolute" }}>
                        <IoIosArrowForward
                          style={{
                            fontSize: "14px",
                          }}
                        />
                      </span>
                    </Col>
                    <Col style={{ marginLeft: "-35px" }} span={4}>
                      <span>Dirección de marketing</span>
                    </Col>
                    <Col style={{ textAlign: "right" }} span={4}>
                      <Link
                        to={
                          "/" +
                          t("routes.organigram") +
                          "/" +
                          t("paths_organigram.organigram")
                        }
                      >
                        <Button
                          className="thirdBtnTwo"
                          style={{
                            background: "rgba(0,0,0,0)",
                            width: "136px",
                          }}
                          size="small"
                        >
                          Aplicar cambios
                        </Button>
                      </Link>
                    </Col>
                    <Col style={{ marginLeft: "16px" }} span={10}>
                      <Button
                        className="btnBlue thirdBtn"
                        onClick={() => {
                          setSave(true);
                        }}
                        size="small"
                      >
                        Guardar como borrador
                      </Button>
                    </Col>
                  </Row>
                </Header>
                <Content>
                  <div className="cardlayoutGlassFull">
                    <Component
                      setEraser={setEraser}
                      save={save}
                      setSave={setSave}
                    />
                  </div>
                </Content>
              </Col>
            </Row>
          </Layout>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
  );
}
