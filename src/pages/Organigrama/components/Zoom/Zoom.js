import { Button, Col, Row } from "antd";
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import TreeOffice from "../TreeOffice/TreeOffice";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { FcUpload } from "react-icons/fc";
import { IoBusinessSharp, IoReloadSharp } from "react-icons/io5";
import "./Zoom.scss";
import { Link } from "react-router-dom";

export default function Zoom({
  setColor,
  setHistorialP,
  setHistorialC,
  setModalPassword,
}) {
  return (
    // <TransformWrapper>
    //   <TransformComponent>
    //     <TreeOffice/>
    //   </TransformComponent>
    // </TransformWrapper>

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
                  <Button
                    className="secondary iconGray roundBtn"
                    icon={<FaUsers />}
                    size="large"
                  />
                </Link>
              </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
              <Col span={24}>
                <Link to="/miempresa">
                  <Button
                    className="secondary iconGray roundBtn"
                    icon={<IoBusinessSharp />}
                    size="large"
                  />
                </Link>
              </Col>
            </Row>

            <Row style={{ marginTop: "5px" }}>
              <Col span={24}>
                <Button
                  className="secondary iconGray roundBtn"
                  icon={<FcUpload />}
                  size="large"
                />
              </Col>
            </Row>

            <Row style={{ marginTop: "5px" }}>
              <Col span={24}>
                <Button
                  className="secondary iconGray roundBtn"
                  icon={<IoReloadSharp />}
                  size="large"
                />
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
  );
}
