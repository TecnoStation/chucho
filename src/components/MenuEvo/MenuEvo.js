import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoSmall from "../../assets/img/Evou-E-color.png";
import Tres from "../../assets/img/icons/360-24px.svg";
import Hub from "../../assets/img/icons/device_hub-24px.svg";
import Trending from "../../assets/img/icons/trending_up-24px.svg";
import Insights from "../../assets/img/icons/insights-24px.svg";
import Grupo from "../../assets/img/icons/Grupo 625.svg";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import Brive from "../../assets/img/brive/BVC-blanco-largo.svg";
import { useTranslation } from "react-i18next";

import "./MenuEvo.scss";

export default function MenuEvo() {
  const [t, i18n] = useTranslation("global");
  const [drop, setDrop] = useState("showBlock");
  const [visible, seVisible] = useState("hide");
  const [brive, setBrive] = useState("brive hide");

  return (
    <>
      <div>
        <p>
          <img alt="logo" src={LogoSmall} style={{ width: "23px" }} />
        </p>
      </div>
      <div
        className="item"
        onMouseOver={() => {
          setBrive("brive showBlock");
        }}
        onMouseOut={() => {
          setBrive("brive hide");
        }}
      >
        <img
          alt="ico"
          className="itemicon"
          style={{ width: "18px" }}
          src={Hub}
        />
        <p className="itemtex">{t("sidebar.organization-chart")}</p>
        <div className="slideSide">
          <span>{t("sidebar.organization-chart")}</span>
          <hr></hr>
          <ul>
            <li>
              <Link
                to={
                  "/" +
                  t("routes.organigram") +
                  "/" +
                  t("paths_organigram.mybusiness")
                }
              >
                {t("organization-chart.my-busines")}
              </Link>
            </li>
            <Link
              to="#"
              className={drop}
              onClick={() => {
                setDrop("hide");
                seVisible("showBlock");
              }}
            >
              <li>
                {t("organization-chart.areas-and-positions")}
                <IoMdArrowDropright
                  style={{
                    position: "absolute",
                    fontSize: "16px",
                    marginTop: "3px",
                    color: "#000",
                    marginRight: "-10px",
                  }}
                />
              </li>
            </Link>
            <Link
              to="#"
              className={visible}
              onClick={() => {
                setDrop("showBlock");
                seVisible("hide");
              }}
            >
              <li>
                {t("organization-chart.areas-and-positions")}
                <IoMdArrowDropdown
                  style={{
                    position: "absolute",
                    fontSize: "16px",
                    marginTop: "3px",
                    color: "#000",
                    marginRight: "-10px",
                  }}
                />
                <ul className={visible}>
                  <Link
                    to={
                      "/" +
                      t("routes.organigram") +
                      "/" +
                      t("paths_organigram.areasandpositions") +
                      "?tab=1"
                    }
                    onClick={() => {
                      setDrop("hide");
                    }}
                  >
                    <li>{t("areas-and-positions.create-area")}</li>
                  </Link>
                  <Link
                    to={
                      "/" +
                      t("routes.organigram") +
                      "/" +
                      t("paths_organigram.areasandpositions") +
                      "?tab=2"
                    }
                    onClick={() => {
                      setDrop("hide");
                    }}
                  >
                    <li>{t("areas-and-positions.create-position")}</li>
                  </Link>
                  <Link
                    to={
                      "/" +
                      t("routes.organigram") +
                      "/" +
                      t("paths_organigram.areasandpositions-collaborator")
                    }
                    onClick={() => {
                      setDrop("hide");
                    }}
                  >
                    <li>{t("areas-and-positions.create-collaborator")}</li>
                  </Link>
                </ul>
              </li>
            </Link>

            <Link
              to={
                "/" +
                t("routes.organigram") +
                "/" +
                t("paths_organigram.teamstarted")
              }
            >
              <li>{t("organization-chart.my-teams")}</li>
            </Link>
            <Link
              to={
                "/" +
                t("routes.organigram") +
                "/" +
                t("paths_organigram.organigram")
              }
            >
              <li>{t("organization-chart.general-organigram")}</li>
            </Link>
          </ul>
        </div>
      </div>
      <div
        className="item"
        onMouseOver={() => {
          setBrive("brive showBlock");
        }}
        onMouseOut={() => {
          setBrive("brive hide");
        }}
      >
        <img
          alt="ico"
          className="itemicon"
          style={{ width: "18px" }}
          src={Tres}
        />
        <p className="itemtex">{t("sidebar.evaluation360")}</p>
        <div className="slideSide">
          <span>{t("sidebar.evaluation360")}</span>
          <hr></hr>
          <ul>
            <li>{t("evaluation-360.create-perfil-position")}</li>
            <li>{t("evaluation-360.create-process")}</li>
            <li>{t("evaluation-360.evaluations")}</li>
          </ul>
        </div>
      </div>
      <div
        className="item"
        onMouseOver={() => {
          setBrive("brive showBlock");
        }}
        onMouseOut={() => {
          setBrive("brive hide");
        }}
      >
        <img alt="ico" className="itemicon" src={Trending} />
        <p className="itemtex">{t("sidebar.objectives")}</p>
        <div className="slideSide">
          <span>{t("sidebar.objectives")}</span>
          <hr></hr>
          <ul>
            <li>{t("objectives.tree-objetives")}</li>
            <li>{t("objectives.inbox")}</li>
            <li>{t("objectives.resume-evaluations")}</li>
          </ul>
        </div>
      </div>
      <div
        className="item"
        onMouseOver={() => {
          setBrive("brive showBlock");
        }}
        onMouseOut={() => {
          setBrive("brive hide");
        }}
      >
        <img
          alt="ico"
          style={{ width: "18px" }}
          className="itemicon"
          src={Insights}
        />
        <p className="itemtex">{t("sidebar.keyindicators")}</p>
        <div className="slideSide">
          <span>{t("sidebar.keyindicators")}</span>
          <hr></hr>
          <ul>
            <Link
              to={
                "/" +
                t("routes.indicators") +
                "/" +
                t("path_indicator.indicatorStarted")
              }
            >
              <li>{t("key-Indicators.my-indicators")}</li>
            </Link>
            <li>{t("key-Indicators.my-evaluations")}</li>
            <li>{t("key-Indicators.manage")}</li>
          </ul>
        </div>
      </div>
      <div
        className="item"
        onMouseOver={() => {
          setBrive("brive showBlock");
        }}
        onMouseOut={() => {
          setBrive("brive hide");
        }}
      >
        <img
          alt="ico"
          style={{ width: "18px" }}
          className="itemicon"
          src={Grupo}
        />
        <p className="itemtex">{t("sidebar.nineBox")}</p>
        <div className="slideSide">
          <span>{t("sidebar.nineBox")}</span>
          <hr></hr>
          <ul>
            <Link
              to="#"
              className={drop}
              onClick={() => {
                setDrop("hide");
                seVisible("showBlock");
              }}
            >
              <li>
                {t("nineBox.developmentplans")}
                <IoMdArrowDropright
                  style={{
                    position: "absolute",
                    fontSize: "16px",
                    marginTop: "3px",
                    color: "#000",
                    marginRight: "-10px",
                  }}
                />
              </li>
            </Link>
            <Link
              to="#"
              className={visible}
              onClick={() => {
                setDrop("showBlock");
                seVisible("hide");
              }}
            >
              <li>
                {t("nineBox.developmentplans")}
                <IoMdArrowDropdown
                  style={{
                    position: "absolute",
                    fontSize: "16px",
                    marginTop: "3px",
                    color: "#000",
                    marginRight: "-10px",
                  }}
                />
                <ul className={visible}>
                  <li>{t("developmentplans.create-plan")}</li>
                  <li>{t("developmentplans.my-plans")}</li>
                  <li>{t("developmentplans.vendors")}</li>
                </ul>
              </li>
            </Link>
            <li>{t("nineBox.see-nine-box")}</li>
          </ul>
        </div>
      </div>
      <div className={brive}>
        <img alt="" style={{ width: "152px" }} src={Brive} />
        <div className="allRigths">
          <p>{t("sidebar.copyright-brive")}</p>
          <p className="link">
            {t("sidebar.copyright-legal")} <br />{" "}
            {t("sidebar.copyright-privacy")}
          </p>
        </div>
      </div>
    </>
  );
}
