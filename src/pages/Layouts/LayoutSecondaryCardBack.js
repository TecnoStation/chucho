import React from "react";
import { useHistory } from "react-router";
import { Col, Row, Menu, Dropdown, Avatar, Card, Button } from "antd";
import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import { Link, Redirect, Route } from "react-router-dom";
import MenuEvo from "../../components/MenuEvo/MenuEvo";
import { AiOutlineArrowLeft } from "react-icons/ai";
import MaterialIcon from "material-icons-react";
import { useTranslation } from "react-i18next";

import { Layout } from "antd";
import "./LayoutSecondary.scss";

//const user = null;
const user = { id: 1, username: "Lupita Gamiño" };
const { Header, Content } = Layout;

export default function LayoutSecondaryCardBack({
  title: Title,
  component: Component,
  ...rest
}) {
  const history = useHistory();
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
                    <Col style={{ textAlign: "left" }} span={3}>
                      <Link
                        to="#"
                        onClick={() => {
                          history.goBack();
                        }}
                      >
                        <Button
                          className="layoutBtn"
                          style={{ textAlign: "left" }}
                          icon={
                            <AiOutlineArrowLeft className="iconAjust2 iconGreen" />
                          }
                        >
                          <span className="textAjust3 title2">{Title}</span>
                        </Button>
                      </Link>
                    </Col>
                    <Col span={15}></Col>
                    <Col style={{ textAlign: "right" }} span={4}>
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
                      style={{
                        marginTop: "5px",
                        textAlign: "center",
                      }}
                    >
                      <Link to={"/" + t("routes.messages")}>
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
