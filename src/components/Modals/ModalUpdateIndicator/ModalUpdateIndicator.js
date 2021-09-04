import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Modal, Row, Col, Input, Upload } from "antd";

import { useTranslation } from "react-i18next";
import { RiArrowUpSFill } from "react-icons/ri";
import { MdTextFields } from "react-icons/md";

import "./ModalUpdateIndicator.scss";
import { FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";
import ModalHistorial from "./components/ModalHistorial/ModalHistorial";

function ModalUpdateIndicator({ Indicator, setIndicator }) {
  const [t, i18n] = useTranslation("global");
  const [value, setValue] = useState("");
  const [Historial, setHistorial] = useState(false);

  const modules = {
    toolbar: {
      container: "#toolbar",
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
          className="smallModal"
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
                theme="snow"
                modules={modules}
                formats={formats}
                value={value}
                onChange={setValue}
              />
              <CustomToolbar />
            </Col>
          </Row>
        </Modal>
        <ModalHistorial Historial={Historial} setHistorial={setHistorial} />
      </>
    </>
  );
}

export default ModalUpdateIndicator;

const CustomToolbar = () => (
  <div id="toolbar">
    <button className="ql-header">
      <MdTextFields className="iconsize2" />
    </button>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <select className="ql-color">
      <option value="red"></option>
      <option value="green"></option>
      <option value="blue"></option>
      <option value="orange"></option>
      <option value="violet"></option>
      <option value="#d0d1d2"></option>
      <option selected></option>
    </select>
    <Upload>
      <Link style={{ marginLeft: "28px" }} className="iconsize iconBlue" to="#">
        <FiUpload />
        <span> Adjuntar evidencia</span>
      </Link>
    </Upload>
  </div>
);
