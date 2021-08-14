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

export default function LayoutSecondary({
  title: Title,
  component: Component,
  ...rest
}) {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link to="/areasypuestos-perfil">Ver Perfil</Link>
        </Menu.Item>
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
                    <Col style={{ textAlign: "left" }} span={3}>
                      <h3>{Title}</h3>
                    </Col>
                    <Col span={15}></Col>
                    <Col style={{ textAlign: "right" }} span={4}>
                      <Dropdown overlay={menu} trigger={["click"]}>
                        <Link
                          to=""
                          className="iconGray"
                          onClick={(e) => e.preventDefault()}
                        >
                          {user.username} <Avatar icon={<UserOutlined />} />{" "}
                          <CaretDownOutlined />
                        </Link>
                      </Dropdown>
                    </Col>
                    <Col
                      span={1}
                      style={{
                        marginTop: "5px",
                        textAlign: "center",
                      }}
                    >
                      <MaterialIcon icon="notifications" />
                    </Col>
                  </Row>
                </Header>
                <div className="cardlayoutGlassFull">
                  <Component />
                </div>
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
