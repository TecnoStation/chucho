import React, { useState } from "react";
import { Form, Button, Modal, Input } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ModalErasersList from "../ModalErasersList/ModalErasersList";

function ModalEraser({ save, setSave }) {
  const [t, i18n] = useTranslation("global");
  const [historial, setHistorial] = useState(false);

  return (
    <>
      <Modal
        className="eraserModal"
        title={t("organigram.modal-org.save-draft")}
        visible={save}
        onCancel={() => {
          setSave(false);
        }}
        footer={false}
      >
        <Form layout="vertical">
          <Form.Item
            name="color"
            label={t("organigram.modal-org.name-draft-label")}
          >
            <Input
              style={{ textAlign: "" }}
              placeholder={t("organigram.modal-org.direction-placeholder")}
            />
          </Form.Item>
          <div style={{ textAlign: "right" }}>
            <Button
              style={{ marginRight: "15px" }}
              className="secondary"
              onClick={() => {
                setSave(false);
              }}
            >
              {t("organigram.modal-org.btn-cancel")}
            </Button>

            <Button
              className="primary"
              onClick={() => {
                setSave(false);
                setHistorial(true);
              }}
            >
              {t("organigram.modal-org.btn-save")}
            </Button>
          </div>
        </Form>
      </Modal>
      <ModalErasersList historial={historial} setHistorial={setHistorial} />
    </>
  );
}

export default ModalEraser;
