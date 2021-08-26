import { Col, Row } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

export default function DetailError() {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Row
        className="dividerBottomFull"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col className="gutter-row" span={24}>
          <h3>{t("organigrama.areasandpositions-perfil.areasandpositions-detailerror.title-detailfile")}</h3>
        </Col>
      </Row>

      <Row
        style={{ marginTop: "20px" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col className="gutter-row" span={8}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <h3>{t("organigrama.areasandpositions-perfil.areasandpositions-detailerror.abstract")}</h3>
            </Col>
          </Row>

          <Row
            style={{ textAlign: "left", marginTop: "30px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={2}></Col>
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>{t("organigrama.areasandpositions-perfil.areasandpositions-detailerror.file")}</p>
            </Col>
            <Col className="gutter-row" span={13}>
              <p>organigrama2018.csv</p>
            </Col>
          </Row>

          <Row
            style={{ textAlign: "left" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={2}></Col>
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>{t("organigrama.areasandpositions-perfil.areasandpositions-detailerror.username")}</p>
            </Col>
            <Col className="gutter-row" span={13}>
              <p>Demo Soporte TI</p>
            </Col>
          </Row>

          <Row
            style={{ textAlign: "left" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={2}></Col>
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>{t("organigrama.areasandpositions-perfil.areasandpositions-detailerror.status")}:</p>
            </Col>
            <Col className="gutter-row" span={13}>
              <p className="iconRed" style={{ fontWeight: "bold" }}>
                ERROR
              </p>
            </Col>
          </Row>

          <Row
            style={{ textAlign: "left" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={2}></Col>
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>
              {t("organigrama.areasandpositions-perfil.areasandpositions-detailerror.total-mistakes")}
              </p>
            </Col>
            <Col className="gutter-row" span={13}>
              <p className="iconRed" style={{ fontWeight: "bold" }}>
                2 ERRORES
              </p>
            </Col>
          </Row>

          <Row
            style={{ textAlign: "left" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={10}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>
              {t("organigrama.areasandpositions-perfil.areasandpositions-detailerror.date-load")}
              </p>
            </Col>
            <Col className="gutter-row" span={12}>
              <p>10 MAY 2021</p>
            </Col>
          </Row>
        </Col>
        <Col
          className="gutter-row dividerLeft"
          style={{ paddingLeft: "70px" }}
          span={16}
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <h3>{t("organigrama.areasandpositions-perfil.areasandpositions-detailerror.mistakes")}</h3>
            </Col>
          </Row>

          <Row
            className="dividerBottomFull"
            style={{ marginTop: "30px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold" }}>{t("organigrama.areasandpositions-perfil.areasandpositions-detailerror.column")}</p>
            </Col>
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold" }}>{t("organigrama.areasandpositions-perfil.areasandpositions-detailerror.row")}</p>
            </Col>
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold" }}>{t("organigrama.areasandpositions-perfil.areasandpositions-detailerror.error")}</p>
            </Col>
          </Row>

          <Row
            className="dividerBottomFull"
            style={{ marginTop: "20px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={8}>
              <p>Biblioteca 2</p>
            </Col>
            <Col className="gutter-row" span={8}>
              <p>6</p>
            </Col>
            <Col className="gutter-row" span={8}>
              <p className="iconRed" style={{ fontWeight: "bold" }}>
                Biblioteca inexistente
              </p>
            </Col>
          </Row>

          <Row
            className="dividerBottomFull"
            style={{ marginTop: "20px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={8}>
              <p>Biblioteca 8</p>
            </Col>
            <Col className="gutter-row" span={8}>
              <p>16</p>
            </Col>
            <Col className="gutter-row" span={8}>
              <p className="iconRed" style={{ fontWeight: "bold" }}>
                Biblioteca inexistente
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <div style={{ height: "100px" }}></div>
    </>
  );
}
