import React, { useState } from "react";

import { Button, Modal, Row, Col, Input, Upload } from "antd";
import { useTranslation } from "react-i18next";
import { RiArrowUpSFill } from "react-icons/ri";
import { MdTextFields } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import ModalHistorial from "../ModalHistorial/ModalHistorial";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./ModalUpdateIndicator.scss";
import CustomToolbar from "../../Editor/components/CustomToolbar/CustomToolbar";
// import EditorU from "../../Editor/Editor";

function ModalUpdateIndicator({ Indicator, setIndicator, setHistorial }) {
  const [t, i18n] = useTranslation("global");
  const [value, setValue] = useState("");
  const modules = {
    toolbar: {
      container: ".toolbar",
    },
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
  ];

  return (
    <>
      <>
        <Modal
          title="Actualizar indicador"
          className="updateModal"
          centered={true}
          visible={Indicator}
          onCancel={() => {
            setIndicator(false);
          }}
          footer={[
            <Button
              style={{ marginRight: "15px" }}
              className="secondary"
              onClick={() => {
                setIndicator(false);
              }}
            >
              Cancelar
            </Button>,
            <Button
              className="primary"
              onClick={() => {
                setIndicator(false);
                setHistorial(true);
              }}
            >
              Actualizar
            </Button>,
          ]}
        >
          <Row style={{ textAlign: "center" }}>
            <Col style={{ textAlign: "left" }} span={6}>
              <span>Actual</span>
            </Col>
            <Col span={12}>
              <span>Objetivos</span>
            </Col>
            <Col span={6}>
              <span>Tendencia</span>
            </Col>
          </Row>
          <Row style={{ textAlign: "center", marginTop: "10px" }}>
            <Col span={6}>
              <Input
                style={{ textAlign: "center", borderRadius: "5px" }}
                type="text"
              />
            </Col>
            <Col style={{ paddingLeft: "15px" }} span={11}>
              <span>20</span>
            </Col>
            <Col className="iconGreen" span={7}>
              <span>125%</span>
              <span>
                <RiArrowUpSFill
                  style={{ position: "absolute", top: "-4px" }}
                  className="iconsize3"
                />
              </span>
            </Col>
          </Row>
          <Row style={{ textAlign: "left", marginTop: "10px" }}>
            <Col span={24}>
              <span>Agregar contexto:</span>
            </Col>
          </Row>
          <Row style={{ textAlign: "left", marginTop: "10px" }}>
            <Col span={24}>
              <ReactQuill
                modules={modules}
                formats={formats}
                value={value}
                onChange={setValue}
              />
              <CustomToolbar />
            </Col>
          </Row>
        </Modal>
      </>
    </>
  );
}

export default ModalUpdateIndicator;
