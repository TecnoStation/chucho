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
        title={t("organigram.modal-org.save-draft")}
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
            {t("organigram.modal-org.btn-cancel")}
          </Button>,
          <Link to={ "/" + t("routes.organigram") + "/" + t("paths_organigram.eraser")}>
            <Button
              className="primary"
              onClick={() => {
                setSave(false);
              }}
            >
              {t("organigram.modal-org.btn-save")}
            </Button>
          </Link>,
        ]} 
      >
        <Form layout="vertical">
          <Form.Item name="color" label={t("organigram.modal-org.name-draft-label")}>
            <Input
              style={{ textAlign: "" }}
              placeholder={t("organigram.modal-org.direction-placeholder")}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
