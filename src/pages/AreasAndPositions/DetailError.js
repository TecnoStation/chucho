import { Col, Row } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function DetailError() {
  const [t, i18n] = useTranslation("global");

  //------------------- data dinamics ------------------------
  const [data, setData] = useState({
    file: "organigrama2018.csv",
    user: "Demo Soporte TI",
    status: "ERROR",
    totalErrors: 2 + " Errores",
    date: "10 MAY 2021",
    errors: [
      {
        iderror: 0,
        column: "Biblioteca 2",
        row: "6",
        error: "Biblioteca inexistente",
      },
      {
        iderror: 1,
        column: "Biblioteca 8",
        row: "16",
        error: "Biblioteca inexistente",
      },
    ],
  });
  //------------------- end data dinamics ------------------------

  return (
    <>
      <Row
        className="dividerBottomFull"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col className="gutter-row" span={24}>
          <h3>
            {t("organigram.areasandpositions-detailerror.title-detailfile")}
          </h3>
        </Col>
      </Row>

      <Row
        style={{ marginTop: "20px" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col className="gutter-row" span={8}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <h3>{t("organigram.areasandpositions-detailerror.abstract")}</h3>
            </Col>
          </Row>

          <Row
            style={{ textAlign: "left", marginTop: "30px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={2}></Col>
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>
                {t("organigram.areasandpositions-detailerror.file")}
              </p>
            </Col>
            <Col className="gutter-row" span={13}>
              <p>{data.file}</p>
            </Col>
          </Row>

          <Row
            style={{ textAlign: "left" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={2}></Col>
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>
                {t("organigram.areasandpositions-detailerror.username")}
              </p>
            </Col>
            <Col className="gutter-row" span={13}>
              <p>{data.user}</p>
            </Col>
          </Row>

          <Row
            style={{ textAlign: "left" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={2}></Col>
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>
                {t("organigram.areasandpositions-detailerror.status")}:
              </p>
            </Col>
            <Col className="gutter-row" span={13}>
              <p className="iconRed" style={{ fontWeight: "bold" }}>
                {data.status}
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
                {t("organigram.areasandpositions-detailerror.total-mistakes")}
              </p>
            </Col>
            <Col className="gutter-row" span={13}>
              <p className="iconRed" style={{ fontWeight: "bold" }}>
                {data.totalErrors}
              </p>
            </Col>
          </Row>

          <Row
            style={{ textAlign: "left" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={10}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>
                {t("organigram.areasandpositions-detailerror.date-load")}
              </p>
            </Col>
            <Col className="gutter-row" span={12}>
              <p>{data.date}</p>
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
              <h3>{t("organigram.areasandpositions-detailerror.mistakes")}</h3>
            </Col>
          </Row>

          <Row
            className="dividerBottomFull"
            style={{ marginTop: "30px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold" }}>
                {t("organigram.areasandpositions-detailerror.column")}
              </p>
            </Col>
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold" }}>
                {t("organigram.areasandpositions-detailerror.row")}
              </p>
            </Col>
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold" }}>
                {t("organigram.areasandpositions-detailerror.error")}
              </p>
            </Col>
          </Row>

          {data.errors.map((error, index) => (
            <Row
              className="dividerBottomFull"
              style={{ marginTop: "20px" }}
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            >
              <Col className="gutter-row" span={8}>
                <p>{error.column}</p>
              </Col>
              <Col className="gutter-row" span={8}>
                <p>{error.row}</p>
              </Col>
              <Col className="gutter-row" span={8}>
                <p className="iconRed" style={{ fontWeight: "bold" }}>
                  {error.error}
                </p>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
      <div style={{ height: "100px" }}></div>
    </>
  );
}
