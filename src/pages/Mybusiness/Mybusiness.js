import React from "react";
import { Col, Dropdown, Input, Menu, Row, Form } from "antd";
import More from "../../assets/img/icons/more_vert-24px.svg";
import { Link } from "react-router-dom";
import Avatar from "../../assets/img/avatar.png";
import { SearchOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import "./Mybusiness.scss";

export default function Mybusiness() {
  const [t, i18n] = useTranslation("global"); 
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Menu.Item key="3">
          <Link to={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.mybusiness-edit")
          }>{t("organigrama.mybusiness-principal.menu")}</Link>
        </Menu.Item> 
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={10}>
          <Row>
            <Col span={22} style={{ textAlign: "center" }}>
              <h1>{t("organigrama.mybusiness-principal.data-general.title")}</h1>
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
                <b>{t("organigrama.mybusiness-principal.data-general.business-name")}</b>
              </span>
              <br />
              <span className="span">Manpower Inc.</span>
            </Col>
            <Col span={12}>
              <span className="span">
                <b>{t("organigrama.mybusiness-principal.data-general.business-activity")}</b>
              </span>
              <br />
              <span className="span">Capital Humano</span>
            </Col>
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <Col span={12}>
              <span className="span">
                <b>{t("organigrama.mybusiness-principal.data-general.subactivity")}</b>
              </span>
              <br />
              <span className="span">
                Reclutamiento y tercerización de personal
              </span>
            </Col>
            <Col span={12}>
              <span className="span">
                <b>{t("organigrama.mybusiness-principal.data-general.business-size")}</b>
              </span>
              <br />
              <span className="span">1,500 - 2,500 empleados</span>
            </Col>
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <Col span={12}>
              <span className="span">
                <b>{t("organigrama.mybusiness-principal.data-general.site-web")}</b>
              </span>
              <br />
              <span className="link">https://www.manpower.com/</span>
            </Col>
            <Col span={12}>
              <span className="span">
                <b>{t("organigrama.mybusiness-principal.data-general.from")}</b>
              </span>
              <br />
              <span className="span">México</span>
            </Col>
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <Col span={12}>
              <span className="span">
                <b>{t("organigrama.mybusiness-principal.data-general.name-headquartes")}</b>
              </span>
              <br />
              <span className="link">Manpower Ciudad de México</span>
            </Col>
            <Col span={12}></Col>
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <Col span={24}>
              <span className="span">
                <b>{t("organigrama.mybusiness-principal.data-general.headquartes-direction")}</b>
              </span>
              <br />
              <span className="link">
                Av. Revolución No. 1877, Esq.Altamirano, Col. Barrio Loreto,
                Tizapán,Álvaro Obregón, 03930 Ciudad de México, CDMX
              </span>
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
              <h1>{t("organigrama.mybusiness-principal.business-culture.title")}</h1>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <span className="span">
                <b>{t("organigrama.mybusiness-principal.business-culture.mission")}</b>
              </span>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col span={24}>
              <span className="span">
                Nuestro objetivo: ayudar a desarrollar el mundo del trabajo.
              </span>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col span={24}>
              <span className="span">
                <b>{t("organigrama.mybusiness-principal.business-culture.view")}</b>
              </span>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col span={24}>
              <span className="span">
                Somos líderes en la creación y ejecución de servicios y
                soluciones innovadoras en la Estrategia de Talento que permitan
                a nuestros clientes triunfar en el cambiante mundo del trabajo.
              </span>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col span={24}>
              <span className="span">
                <b>{t("organigrama.mybusiness-principal.business-culture.business-description")}</b>
              </span>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col span={24}>
              <span className="span">
                Somos líderes en la creación y ejecución de servicios y
                soluciones innovadoras en la Estrategia de Talento que permitan
                a nuestros clientes triunfar en el cambiante mundo del trabajo.
              </span>
            </Col>
          </Row>
          <Row
            className="dividerBottom"
            style={{ marginTop: "40px", width: "100%" }}
          >
            <Col span={18}>
              <b>{t("organigrama.mybusiness-principal.business-culture.institutional-competences")}</b>
              <span className="span"></span>
            </Col>
            <Col span={6}>
              <b>{t("organigrama.mybusiness-principal.business-culture.level")}</b>
              <span className="span"></span>
            </Col>
          </Row>

          <Row style={{ marginTop: "20px" }}>
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
          </Row>
        </Col>
      </Row>
    </div>
  );
}
