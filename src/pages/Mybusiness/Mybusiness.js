import React, { useState } from "react";
import { Col, Dropdown, Input, Menu, Row, Form } from "antd";
import More from "../../assets/img/icons/more_vert-24px.svg";
import { Link } from "react-router-dom";
import Avatar from "../../assets/img/avatar.png";
import { SearchOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import "./Mybusiness.scss";
import CompetenciesList from "./components/CompetenciesList/CompetenciesList";

export default function Mybusiness() {
  const [t, i18n] = useTranslation("global");
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link
            to={
              "/" +
              t("routes.organigram") +
              "/" +
              t("paths_organigram.mybusiness-edit")
            }
          >
            {t("organigram.mybusiness-principal.menu.edit-data")}
          </Link>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );
  //-------------------------------- company data ---------------------

  const [data, setData] = useState([
    {
      companyName: "Manpower Inc.",
      activity: "Capital Humano",
      subActivity: "Reclutamiento y tercerización de personal",
      businessZise: "1,500 - 2,500 empleados",
      siteWeb: "https://www.manpower.com/",
      from: "México",
      centralBranchs: "Manpower Ciudad de México",
      branchsDirection:
        "Av. Revolución No. 1877, Esq.Altamirano, Col. Barrio Loreto, Tizapán,Álvaro Obregón, 03930 Ciudad de México, CDMX",
      mission: "Nuestro objetivo: ayudar a desarrollar el mundo del trabajo.",
      vision:
        "Somos líderes en la creación y ejecución de servicios y soluciones innovadoras en la Estrategia de Talento que permitan a nuestros clientes triunfar en el cambiante mundo del trabajo.",
      description:
        "Somos líderes en la creación y ejecución de servicios y soluciones innovadoras en la Estrategia de Talento que permitan a nuestros clientes triunfar en el cambiante mundo del trabajo.",
      competencies: [
        {
          name: "Creatividad",
          level: 3,
        },
        {
          name: "Solución de Problemas - Desarrolla Alternativas",
          level: 3,
        },
      ],
    },
  ]);

  //-------------------------------- End company data ---------------------

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={10}>
          <Row>
            <Col span={22} style={{ textAlign: "center" }}>
              <h1>{t("organigram.mybusiness-principal.data-general.title")}</h1>
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
          <Row>
            <Col span={24} style={{ textAlign: "center" }}>
              <p>
                <img alt="ico" width="140" src={Avatar} />
              </p>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <span className="span">
                <b>
                  {t(
                    "organigram.mybusiness-principal.data-general.business-name"
                  )}
                </b>
              </span>
              <br />
              <span className="span">{data.companyName}</span>
            </Col>
            <Col span={12}>
              <span className="span">
                <b>
                  {t(
                    "organigram.mybusiness-principal.data-general.business-activity"
                  )}
                </b>
              </span>
              <br />
              <span className="span">{data.activity}</span>
            </Col>
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <Col span={12}>
              <span className="span">
                <b>
                  {t(
                    "organigram.mybusiness-principal.data-general.subactivity"
                  )}
                </b>
              </span>
              <br />
              <span className="span">{data.subActivity}</span>
            </Col>
            <Col span={12}>
              <span className="span">
                <b>
                  {t(
                    "organigram.mybusiness-principal.data-general.business-size"
                  )}
                </b>
              </span>
              <br />
              <span className="span">{data.businessZise}</span>
            </Col>
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <Col span={12}>
              <span className="span">
                <b>
                  {t("organigram.mybusiness-principal.data-general.site-web")}
                </b>
              </span>
              <br />
              <span className="link">{data.siteWeb}</span>
            </Col>
            <Col span={12}>
              <span className="span">
                <b>{t("organigram.mybusiness-principal.data-general.from")}</b>
              </span>
              <br />
              <span className="span">{data.from}</span>
            </Col>
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <Col span={12}>
              <span className="span">
                <b>
                  {t(
                    "organigram.mybusiness-principal.data-general.name-headquartes"
                  )}
                </b>
              </span>
              <br />
              <span className="link">{data.centralBranchs}</span>
            </Col>
            <Col span={12}></Col>
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <Col span={24}>
              <span className="span">
                <b>
                  {t(
                    "organigram.mybusiness-principal.data-general.headquartes-direction"
                  )}
                </b>
              </span>
              <br />
              <span className="link">{data.branchsDirection}</span>
            </Col>
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <Col span={24}>
              <Form layout="vertical">
                <Form.Item name="empresa" label="Sucursales">
                  <Input
                    placeholder="Buscar sucursales"
                    addonAfter={<SearchOutlined />}
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
        <Col span={14} className="dividerLeft gutter-row">
          <Row>
            <Col span={24} style={{ textAlign: "center" }}>
              <h1>
                {t("organigram.mybusiness-principal.business-culture.title")}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <span className="span">
                <b>
                  {t(
                    "organigram.mybusiness-principal.business-culture.mission"
                  )}
                </b>
              </span>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col span={24}>
              <span className="span">{data.mission}</span>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col span={24}>
              <span className="span">
                <b>
                  {t("organigram.mybusiness-principal.business-culture.view")}
                </b>
              </span>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col span={24}>
              <span className="span">{data.vision}</span>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col span={24}>
              <span className="span">
                <b>
                  {t(
                    "organigram.mybusiness-principal.business-culture.business-description"
                  )}
                </b>
              </span>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col span={24}>
              <span className="span">{data.description}</span>
            </Col>
          </Row>
          <Row
            className="dividerBottom"
            style={{ marginTop: "40px", width: "100%" }}
          >
            <Col span={18}>
              <b>Competencias Institucionales</b>
              <span className="span"></span>
            </Col>
            <Col span={6}>
              <b>Nivel</b>
              <span className="span"></span>
            </Col>
          </Row>

          {data[0].competencies.map((competence, index) => (
            <CompetenciesList competence={competence} />
          ))}

          {/* <Row style={{ marginTop: "20px" }}>
            <Col span={18}>
              Creatividad<span className="span"></span>
            </Col>
            <Col span={6} style={{ paddingLeft: "15px" }}>
              3<span className="span"></span>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px", background: "#F4F6FB" }}>
            <Col span={18}>
              Solución de Problemas - Desarrolla Alternativas
              <span className="span"></span>
            </Col>
            <Col span={6} style={{ paddingLeft: "15px" }}>
              3<span className="span"></span>
            </Col>
          </Row> */}
        </Col>
      </Row>
    </div>
  );
}
