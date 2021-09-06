import { Button, Col, Row, Tooltip } from "antd";
import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { FiUpload, FiZoomIn, FiZoomOut } from "react-icons/fi";
import { FaRegQuestionCircle, FaUsers } from "react-icons/fa";
import { IoBusinessSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AiOutlineHistory } from "react-icons/ai";

import "./Zoom.scss";
import TreeStarted from "../TreeStarted/TreeStarted";
import ModalErasersList from "../../../../components/Modals/ModalErasersList/ModalErasersList";

function ZoomStarted({ setEraser }) {
  const [t, i18n] = useTranslation("global");
  const [historial, setHistorial] = useState(false);
  const [messageOrg, setMessageOrg] = useState("messageOrg");
  const menu = (
    <>
      <div className="menuToltip">
        <Link
          to={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-general")
          }
        >
          <span>{t("organigram.organigramlist.menu-1.load-massive")}</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link
          to={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-general")
          }
        >
          <span>{t("organigram.organigramlist.menu-1.areas-positions")}</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link
          to={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-general")
          }
        >
          <span>{t("organigram.organigramlist.menu-1.profile-positions")}</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link
          to={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-general")
          }
        >
          <span>{t("organigram.organigramlist.menu-1.Collaborators")}</span>
        </Link>
      </div>
    </>
  );
  return (
    <>
      <TransformWrapper
        className="zoom"
        initialScale={1}
        minScale={0.5}
        maxScale={1.2}
        initialPositionX={400}
        centerContent={true}
        wheelEnabled={false}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="tools">
              <Row style={{ marginTop: "5px" }}>
                <Col span={24}>
                  <Link
                    to={
                      "/" +
                      t("routes.organigram") +
                      "/" +
                      t("paths_organigram.teams")
                    }
                  >
                    <Tooltip
                      title={t("organigram.organigramlist.menu-1.create-team")}
                      placement="left"
                      color="#2cccd3"
                    >
                      <Button
                        className="secondary iconGray roundBtn"
                        icon={<FaUsers />}
                        size="large"
                      />
                    </Tooltip>
                  </Link>
                </Col>
              </Row>
              <Row style={{ marginTop: "5px" }}>
                <Col span={24}>
                  <Link
                    to={
                      "/" +
                      t("routes.organigram") +
                      "/" +
                      t("paths_organigram.mybusiness")
                    }
                  >
                    <Tooltip
                      title={t("organigram.organigramlist.menu-1.me-business")}
                      placement="left"
                      color="#2cccd3"
                    >
                      <Button
                        className="secondary iconGray roundBtn"
                        icon={<IoBusinessSharp />}
                        size="large"
                      />
                    </Tooltip>
                  </Link>
                </Col>
              </Row>

              <Row style={{ marginTop: "5px" }}>
                <Col span={24}>
                  <Tooltip title={menu} placement="left" color="#2cccd3">
                    <Button
                      className="secondary iconGray roundBtn"
                      style={{ width: "40px" }}
                      icon={<FiUpload />}
                      size="large"
                    ></Button>
                  </Tooltip>
                </Col>
              </Row>

              <Row style={{ marginTop: "5px" }}>
                <Col span={24}>
                  <Tooltip
                    title="Historial de cambios"
                    placement="left"
                    color="#2cccd3"
                  >
                    <Button
                      className="secondary iconGray roundBtn"
                      style={{ width: "40px" }}
                      size="large"
                      icon={<AiOutlineHistory />}
                      onClick={() => {
                        setHistorial(true);
                      }}
                    ></Button>
                  </Tooltip>
                </Col>
              </Row>

              <Row style={{ marginTop: "5px" }}>
                <Col span={24}>
                  <Button
                    className="secondary iconGray roundBtn"
                    onClick={() => zoomIn()}
                    icon={<FiZoomIn />}
                    size="large"
                  />
                </Col>
              </Row>
              <Row style={{ marginTop: "5px" }}>
                <Col span={24}>
                  <Button
                    className="secondary iconGray roundBtn"
                    onClick={() => zoomOut()}
                    icon={<FiZoomOut />}
                    size="large"
                  ></Button>
                </Col>
              </Row>
              <div className={messageOrg}>
                <Row>
                  <Col span={9}>
                    <FaRegQuestionCircle className="question" />
                  </Col>
                  <Col
                    className="dividerLeft"
                    span={15}
                    style={{ paddingLeft: "10px" }}
                  >
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#fff",
                      }}
                    >
                      Si ya llenaste tu archivo de excel, lo puedes subir con el
                      ícono de carga masiva
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <Button
                        className="secondary iconGray roundBtn"
                        style={{ width: "40px" }}
                        icon={<FiUpload />}
                        size="large"
                      ></Button>
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
            <TransformComponent>
              <TreeStarted
                setEraser={setEraser}
                setMessageOrg={setMessageOrg}
              />
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
      <ModalErasersList historial={historial} setHistorial={setHistorial} />
    </>
  );
}

export default ZoomStarted;
