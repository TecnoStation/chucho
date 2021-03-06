import { Button, Card } from "antd";
import Item from "antd/lib/list/Item";
import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Arrorup from "../../assets/img/icons/upload.svg";
import Business from "../../assets/img/icons/empresa.svg";
import Warning from "../../assets/img/icons/atencion.svg";
import { useTranslation } from "react-i18next";

import "./Screen.scss";

let carusel = document.getElementsByTagName("Carousel");

export default function ScreenOrganigram() {
  const [t, i18n] = useTranslation("global");
  const titles = [
    t("organigram.org-chart-on-boarding.carousel-title0"),
    t("organigram.org-chart-on-boarding.carousel-title1"),
    t("organigram.org-chart-on-boarding.carousel-title2"),
    "",
  ];

  const [link, setLink] = useState("link");
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(75);
  const [br, setBr] = useState("");
  let title = titles[count];

  return (
    <div className="screen" id="screen">
      <Card
        title={title}
        className="cardCarrousel"
        id="cardOrganigram"
        headStyle={{
          textAlign: "center",
          color: "#00205b",
          fontWeight: "bold",
        }}
      >
        <div>
          <Carousel ref={(ref) => (carusel = ref)}>
            <Item style={{ fontWeight: "normal" }}>
              <div className="carruselItem">
                <p>
                  <b className="primaryTextBold">
                    {t("organigram.carousel-content0.text1-a")}
                  </b>{" "}
                  {t("organigram.carousel-content0.text1-b")}
                </p>
                <p>
                  <b className="primaryTextBold">
                    {t("organigram.carousel-content0.text2-a")}
                  </b>{" "}
                  {t("organigram.carousel-content0.text2-b")}
                </p>
                <p>
                  <b className="primaryTextBold">
                    {t("organigram.carousel-content0.text3-a")}
                  </b>
                  {t("organigram.carousel-content0.text3-b")}
                </p>
                <p>
                  <b className="primaryTextBold">
                    {t("organigram.carousel-content0.text4-a")}
                  </b>
                </p>
              </div>
            </Item>
            <Item style={{ fontWeight: "normal" }}>
              <div className="carruselItem">
                <p>{t("organigram.carousel-content1.text1-a")}</p>
                <p>
                  <b className="primaryTextBold">
                    {t("organigram.carousel-content1.text2-a")},
                  </b>
                  {t("organigram.carousel-content1.text2-b")}
                </p>
                <p>
                  <b className="primaryTextBold">
                    {t("organigram.carousel-content1.text3-a")}
                  </b>
                  {t("organigram.carousel-content1.text3-b")}
                </p>
                <p>
                  <b className="primaryTextBold">
                    {t("organigram.carousel-content1.text4-a")}
                  </b>
                  {t("organigram.carousel-content1.text4-b")}
                </p>
                <p>
                  <b className="primaryTextBold">
                    {t("organigram.carousel-content1.text4-c")}
                  </b>{" "}
                  {t("organigram.carousel-content1.text4-d")}
                </p>
              </div>
            </Item>
            <Item style={{ fontWeight: "normal" }}>
              <div className="carruselItem">
                <p>{t("organigram.carousel-content2.text1-a")}</p>
                <p>{t("organigram.carousel-content2.text2-a")}</p>
                <p>{t("organigram.carousel-content2.text3-a")}</p>
                <p style={{ textAlign: "center" }}>
                  <img alt="ico" width="80" className="" src={Arrorup} />
                </p>
              </div>
            </Item>
            <Item style={{ fontWeight: "normal" }}>
              <div className="carruselItem">
                <h4
                  className="primaryText"
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {t("organigram.started.title")}
                </h4>
                <br />
                <span
                  className="secondaryText"
                  style={{ fontWeight: "normal", fontSize: "14px" }}
                >
                  {t("organigram.started.text1-a")}
                </span>
                <span
                  className="secondaryText"
                  style={{ fontWeight: "normal", fontSize: "14px" }}
                >
                  <b>{t("organigram.started.text1-b")}</b>
                </span>
                <span
                  className="secondaryText"
                  style={{ fontWeight: "normal", fontSize: "14px" }}
                >
                  {t("organigram.started.text1-c")}
                </span>
                <span
                  className="secondaryText"
                  style={{ fontWeight: "normal", fontSize: "14px" }}
                >
                  <b>{t("organigram.started.text1-d")}</b>
                </span>
                <br />
                <br />
                <span
                  className="secondaryText"
                  style={{ fontWeight: "normal", fontSize: "14px" }}
                >
                  {t("organigram.started.text2-a")}
                </span>
                <br />
                <br />
                <p className={br} style={{ textAlign: "center" }}>
                  <img alt="ico" width={visible} src={Business} />
                </p>

                <div className={br} style={{ textAlign: "center" }}>
                  <Link
                    to={
                      "/" +
                      t("routes.organigram") +
                      "/" +
                      t("paths_organigram.mybusiness-edit")
                    }
                  >
                    <Button
                      style={{ width: "176px", height: "32px" }}
                      className="primary"
                    >
                      {t("organigram.started.btn-started")}
                    </Button>
                  </Link>
                </div>
              </div>
            </Item>
          </Carousel>
        </div>
        <div className="arrows">
          <Link
            to="#"
            onClick={() => {
              if (count !== 0) {
                setCount(count - 1);
                carusel.slidePrev();
              }
            }}
            className="arrowLeft"
          >
            <LeftOutlined />
          </Link>
          <Link
            to="#"
            onClick={() => {
              if (count < 3) {
                setCount(count + 1);
                carusel.slideNext();
                if (count === 2) {
                  setVisible(100);
                  setBr("margin30");
                  document.getElementsByClassName("rec");
                  let pagination =
                    document.getElementsByClassName("rec-pagination");
                  pagination[0].setAttribute("style", "display: none");
                  document
                    .getElementsByClassName("arrows")[0]
                    .setAttribute("style", "display: none");
                  document
                    .getElementsByClassName("link")[0]
                    .setAttribute("style", "display: none");
                  setLink("hide");
                }
              }
            }}
            className="arrowRigth"
          >
            <RightOutlined />
          </Link>
        </div>
        <div style={{ textAlign: "center", marginTop: "12px" }}>
          <p>
            <Link className={link} onClick={showWarning} to="#">
              {t("organigram.skip")}
            </Link>
          </p>
        </div>
      </Card>

      <Card className="card" id="cardWarning" style={{ textAlign: "center" }}>
        <p style={{ textAlign: "center", marginTop: "-20px" }}>
          <img alt="ico" width="120" className="" src={Warning} />
        </p>
        <h1>{t("organigram.dialog-warnin.atention")}</h1>
        <p className="primaryText">
          <b style={{ fontSize: "16px" }}>
            {t("organigram.dialog-warnin.text1")}
          </b>
        </p>
        <p className="primaryText">
          <b style={{ fontSize: "16px" }}>
            {t("organigram.dialog-warnin.text2")}
          </b>
        </p>
        <p className="primaryText">
          <b style={{ fontSize: "16px" }}>
            {t("organigram.dialog-warnin.question")}
          </b>
        </p>
        <Button
          onClick={showCard}
          className="secondary"
          style={{ marginRight: "15px", marginTop: "15px" }}
        >
          {t("organigram.dialog-warnin.btn-continue")}
        </Button>
        <Link
          to={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.organigrammain")
          }
        >
          <Button className="primary btn">
            {t("organigram.dialog-warnin.btn-skip")}
          </Button>
        </Link>
      </Card>
    </div>
  );
}

function showWarning() {
  let cardOrganigram = document.getElementById("cardOrganigram");
  let cardWarning = document.getElementById("cardWarning");

  cardOrganigram.setAttribute("style", "display: none;");
  cardWarning.setAttribute("style", "display: block;");
}

function showCard() {
  let cardOrganigram = document.getElementById("cardOrganigram");
  let cardWarning = document.getElementById("cardWarning");

  cardWarning.setAttribute("style", "display: none;");
  cardOrganigram.setAttribute("style", "display: block;");
}
