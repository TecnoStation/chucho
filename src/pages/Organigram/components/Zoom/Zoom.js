import { Button, Col, Row, Tooltip } from "antd";
import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import TreeOffice from "../TreeOffice/TreeOffice";
import { FiUpload, FiZoomIn, FiZoomOut } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { IoBusinessSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AiOutlineHistory } from "react-icons/ai";

import "./Zoom.scss";
import ModalErasersList from "../../../../components/Modals/ModalErasersList/ModalErasersList";

export default function Zoom() {
  const [t, i18n] = useTranslation("global");
  const menu = (
    <>
      <div className="menuToltip">
        <Link to="/areasandpositions-general">
          <span>{t("organigram.organigramlist.menu-1.load-massive")}</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link to="/areasandpositions-general">
          <span>{t("organigram.organigramlist.menu-1.areas-positions")}</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link to="/areasandpositions-general">
          <span>{t("organigram.organigramlist.menu-1.profile-positions")}</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link to="/areasandpositions-general">
          <span>{t("organigram.organigramlist.menu-1.Collaborators")}</span>
        </Link>
      </div>
    </>
  );

  const [historial, setHistorial] = useState(false);

  return (
    // <TransformWrapper>
    //   <TransformComponent>
    //     <TreeOffice/>
    //   </TransformComponent>
    // </TransformWrapper>
    <>
      <TransformWrapper
        className="zoom"
        initialScale={1}
        minScale={0.5}
        maxScale={1.2}
        initialPositionX={-200}
        centerContent={true}
        wheelEnabled={false}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="tools">
              <Row style={{ marginTop: "5px" }}>
                <Col span={24}>
                  <Link to="/organigrama/teams">
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
                  <Link to="/organigrama/mybusiness">
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
                    title={t("organigram.organigramlist.menu-1.record-changes")}
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
              <TreeOffice />
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
      <ModalErasersList historial={historial} setHistorial={setHistorial} />
    </>
  );
}
