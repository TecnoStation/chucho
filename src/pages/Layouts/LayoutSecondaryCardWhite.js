import React, { useState } from "react";
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
import { useTranslation } from "react-i18next";
import { Layout } from "antd";
import SelectLevel from "./components/SelectLevel/SelectLevel";
import "./LayoutSecondary.scss";

const { Search } = Input;

//const user = null;
const user = { id: 1, username: "Lupita Gamiño" };
const { Header, Content } = Layout;

export default function LayoutSecondaryCardWhite({
  title: Title,
  component: Component,
  ...rest
}) {
  const [t, i18n] = useTranslation("global");
  const menu = (
    <Menu style={{
      position: "absolute",
      marginLeft: "-90px",
      marginTop: "-20px",
    }} >
      <Menu.Item key="0">
        <Link
          to={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-perfil")
          }
        >
          {t("organigram.perfil.view-perfil")}
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">{t("organigram.perfil.close-session")}</Menu.Item>
    </Menu>
  );
  //----------------- Filter Teams ------------------------------------------
  const filterTeams = () => {
    const input = document.getElementById("filter");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("organigramList");
    const row = div.getElementsByClassName("rowOrganigram");
    let i;
    for (i = 0; i < row.length; i++) {
      let col = row[i].getElementsByClassName("OrganigramNames")[0];
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

  //----------------- End Filter Teams ------------------------------------------

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
                      <Search
                        size="small"
                        id="filter"
                        onChange={filterTeams}
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
