import { Col, Row } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function DetailSuccess() {
  const [t, i18n] = useTranslation("global");
  //------------------- data dinamics ------------------------
  const [data, setData] = useState({
    file: "organigrama2018.csv",
    user: "Demo Soporte TI",
    status: "Adjuntado con éxito",
    totalErrors: "",
    date: "10 MAY 2021",
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
            {t("organigram.areasandpositions-detailsuccess.title-detailfile")}
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
              <h3>
                {t("organigram.areasandpositions-detailsuccess.abstract")}
              </h3>
            </Col>
          </Row>

          <Row
            style={{ textAlign: "left", marginTop: "30px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={3}></Col>
            <Col className="gutter-row" span={7}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>
                {t("organigram.areasandpositions-detailsuccess.file")}
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
            <Col className="gutter-row" span={3}></Col>
            <Col className="gutter-row" span={7}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>
                {t("organigram.areasandpositions-detailsuccess.username")}
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
            <Col className="gutter-row" span={3}></Col>
            <Col className="gutter-row" span={7}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>
                {t("organigram.areasandpositions-detailsuccess.status")}
              </p>
            </Col>
            <Col className="gutter-row" span={13}>
              <p className="iconGreen" style={{ fontWeight: "bold" }}>
                {data.status}
              </p>
            </Col>
          </Row>

          <Row
            style={{ textAlign: "left" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={3}></Col>
            <Col className="gutter-row" span={7}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>
                {t("organigram.areasandpositions-detailsuccess.total-mistakes")}
              </p>
            </Col>
            <Col className="gutter-row" span={12}>
              <p className="iconRed" style={{ fontWeight: "bold" }}></p>
            </Col>
          </Row>

          <Row
            style={{ textAlign: "left" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={10}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>
                {t("organigram.areasandpositions-detailsuccess.date-load")}
              </p>
            </Col>
            <Col className="gutter-row" span={13}>
              <p>{data.date}</p>
            </Col>
          </Row>
        </Col>
        <Col
          className="gutter-row dividerLeft"
          style={{ paddingLeft: "70px" }}
          span={16}
        ></Col>
      </Row>
      <div style={{ height: "100px" }}></div>
    </>
  );
}
