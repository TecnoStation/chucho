import React, { useEffect } from "react";
import TreeEraser from "./components/TreeEraser/TreeEraser";
import { Form, Button, Modal, Input } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ZoomEraser from "./components/Zoom/ZoomEraser";

export default function Eraser({ setEraser, setSave, save }) {
  const [t, i18n] = useTranslation("global");
  useEffect(() => {
    setEraser("show");
  });

  return (
    <>
      <br />
      <ZoomEraser />

      <Modal
        className="middleModal"
        title="Guardar como borrador"
        visible={save}
        onCancel={() => {
          setSave(false);
        }}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={() => {
              setSave(false);
            }}
          >
            Cancelar
          </Button>,
          <Link to="/organigrama">
            <Button
              className="primary"
              onClick={() => {
                setSave(false);
              }}
            >
              Guardar
            </Button>
          </Link>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item name="color" label="Nombre del borrador">
            <Input
              style={{ textAlign: "" }}
              placeholder="Direeción de Marketing"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
