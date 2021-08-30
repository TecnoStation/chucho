import { Button, Col, Row, Tooltip } from "antd";
import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { FiUpload, FiZoomIn, FiZoomOut } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { IoBusinessSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiOutlineHistory } from "react-icons/ai";

import "./Zoom.scss";
import TreeStarted from "../TreeStarted/TreeStarted";
import ModalErasersList from "../../../../components/Modals/ModalErasersList/ModalErasersList";
import TreeEraser from "../TreeEraser/TreeEraser";

function ZoomEraser() {
  const [historial, setHistorial] = useState(false);
  const menu = (
    <>
      <div className="menuToltip">
        <Link to="/organigrama/areasandpositions-general">
          <span>Carga masiva</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link to="/organigrama/areasandpositions-general">
          <span>Áreas y puestos</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link to="/organigrama/areasandpositions-general">
          <span>Perfil de puestos</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link to="/organigrama/areasandpositions-general">
          <span>Colaboradores</span>
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
                  <Link to="/organigrama/teams">
                    <Tooltip
                      title="Crear equipo"
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
                      title="Mi empresa"
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
