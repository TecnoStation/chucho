import { Button, Col, Row, Tooltip } from "antd";
import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { FiUpload, FiZoomIn, FiZoomOut } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { IoBusinessSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AiOutlineHistory } from "react-icons/ai";

import "./Zoom.scss";
import TreeStarted from "../TreeStarted/TreeStarted";
import ModalErasersList from "../../../../components/Modals/ModalErasersList/ModalErasersList";
import TreeEraser from "../TreeEraser/TreeEraser";

function ZoomEraser() {
  const [t, i18n] = useTranslation("global");
  const [historial, setHistorial] = useState(false);
  const menu = (
    <>
      <div className="menuToltip">
        <Link to={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-general")
          }>
          <span>{t("organigram.org-eraser.menu-3.load-massive")}</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link to={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-general")
          }>
          <span>{t("organigram.org-eraser.menu-3.areas-positions")}</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link to={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-general")
          }>
          <span>{t("organigram.org-eraser.menu-3.profile-positions")}</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link to={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-general")
          }>
          <span>{t("organigram.org-eraser.menu-3.Collaborators")}</span>
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
                  <Link to={
                      "/" +
                      t("routes.organigram") +
                      "/" +
                      t("paths_organigram.teams")
                    }>
                    <Tooltip
                      title={t("organigram.org-eraser.menu-3.create-team")}
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
                  <Link to={
                      "/" +
                      t("routes.organigram") +
                      "/" +
                      t("paths_organigram.mybusiness")
                    }>
                    <Tooltip
                      title={t("organigram.org-eraser.menu-3.me-business")}
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
                    title={t("organigram.org-eraser.menu-3.record-changes")}
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
            </div>
            <TransformComponent>
              <TreeEraser />
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
      <ModalErasersList historial={historial} setHistorial={setHistorial} />
    </>
  );
}

export default ZoomEraser;
