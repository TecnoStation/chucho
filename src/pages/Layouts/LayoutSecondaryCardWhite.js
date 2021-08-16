import React from "react";
import { Col, Row, Menu, Dropdown, Avatar, Input, Card } from "antd";
import {
  CaretDownOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, Redirect, Route } from "react-router-dom";
import MenuEvo from "../../components/MenuEvo/MenuEvo";
import MaterialIcon from "material-icons-react";
import { MdDeviceHub } from "react-icons/md";

import { Layout } from "antd";
import "./LayoutSecondary.scss";

//const user = null;
const user = { id: 1, username: "Lupita Gamiño" };
const { Header, Content } = Layout;

export default function LayoutSecondaryCardWhite({
  title: Title,
  component: Component,
  ...rest
}) {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/areasypuestos-perfil">Ver Perfil</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">Cerrar sesión</Menu.Item>
    </Menu>
  );

  return (
    <Route {...rest}>
      {user ? (
        <>
          <Layout>
            <Row>
              <Col span={2} className="menuSide">
                <MenuEvo />
              </Col>

              <Col span={22} className="contentFrame">
                <Header>
                  <Row>
                    <Col style={{ textAlign: "left" }} span={3} MdDeviceHub>
                      <h3>{Title}</h3>
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
                      <Link className="iconBlue" to="/organigrama">
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
                      <Link to="/organigram">
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
                    <Col span={5}></Col>
                    <Col span={4} style={{ textAlign: "center" }}>
                      <Dropdown overlay={menu} trigger={["click"]}>
                        <Link
                          to="#"
                          className="iconGray"
                          onClick={(e) => e.preventDefault()}
                        >
                          Ver 5 niveles <CaretDownOutlined />
                        </Link>
                      </Dropdown>
                    </Col>
                    <Col span={3}>
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
                      <Link to="/mensajes">
                        <MaterialIcon icon="notifications" />
                      </Link>
                    </Col>
                  </Row>
                </Header>
                <Content>
                  <Card className="cardlayoutGlassWhite">
                    <Component />
                  </Card>
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
