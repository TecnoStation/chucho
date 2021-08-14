import { Button, Col, Menu, Row, Tooltip } from "antd";
import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import TreeOffice from "../TreeOffice/TreeOffice";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { IoBusinessSharp, IoReloadSharp } from "react-icons/io5";
import MaterialIcon from "material-icons-react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import "./Zoom.scss";
import ModalErasers from "../../../../components/Modals/ModalErasers/ModalErasers";

export default function Zoom({
  setColor,
  setHistorialP,
  setHistorialC,
  setModalPassword,
}) {
  const menu = (
    <>
      <div className="menuToltip">
        <Link to="/areasypuestos-general">
          <span>Carga masiva</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link to="/areasypuestos-general">
          <span>Áreas y puestos</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link to="/areasypuestos-general">
          <span>Perfil de puestos</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link to="/areasypuestos-general">
          <span>Colaboradores</span>
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
                  <Link to="/equipos">
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
                  <Link to="/miempresa">
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
                      size="large"
                    >
                      <span style={{ marginLeft: "-8px" }}>
                        <MaterialIcon icon="publish" />
                      </span>
                    </Button>
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
                      icon={<IoReloadSharp />}
                      size="large"
                      onClick={() => {
                        setHistorial(true);
                      }}
                    />
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
              <TreeOffice
                setColor={setColor}
                setHistorialP={setHistorialP}
                setHistorialC={setHistorialC}
                setModalPassword={setModalPassword}
              />
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
      <ModalErasers historial={historial} setHistorial={setHistorial} />
    </>
  );
}
