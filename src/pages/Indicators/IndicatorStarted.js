import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import Inicio from "../../assets/img/icons/indicators.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ModalVideo from "../../components/Modals/ModalVideo/ModalVideo";

function IndicatorStarted() {
  const [t, i18n] = useTranslation("global");
  const [video, setVideo] = useState(false);
  return (
    <>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ textAlign: "center", padding: "90px 0px 92px 0px" }}
      >
        <Col className="gutter-row" span={8}></Col>
        <Col className="gutter-row" span={8}>
          <p>
            <img alt="ico" style={{ width: "327.46px" }} src={Inicio} />
          </p>
          <br />
          <h2 style={{ fontSize: "21px" }} className="primaryText">
            {t("indicators.title")}
          </h2>
          <span> {t("indicators.text-a")}</span>
          <br />
          <span> {t("indicators.text-b")}</span>
          <br />
          <br />
          <span style={{ marginRight: "16px" }}>
            <Link
              to={
                "/" +
                t("routes.indicators") +
                "/" +
                t("path_indicator.indicator")
              }
            >
              <Button className="secondary">
                <span className="textAjust4">{t("indicators.btn-direct")}</span>
              </Button>
            </Link>
          </span>
          <span>
            <Button
              className="primary"
              onClick={() => {
                setVideo(true);
              }}
            >
              <span className="textAjust4">{t("indicators.btn-guide")}</span>
            </Button>
          </span>
        </Col>
        <Col className="gutter-row" span={8}></Col>
      </Row>
      <ModalVideo video={video} setVideo={setVideo} />
    </>
  );
}

export default IndicatorStarted;
