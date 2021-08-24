import React, { useState } from "react";
import { Form, Button, Modal, Checkbox, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useForm } from "antd/lib/form/Form";
import { v4 as uuid } from "uuid";
import DocumentsList from "./components/DocumentsList/DocumentsList";
import { useTranslation } from "react-i18next";

function ModalDocument({ ModalDocumets, setModalDocumets }) {
  const [t, i18n] = useTranslation("global");
  const [flag, setFlag] = useState("hide");
  const [Documents, setDocuments] = useState([]);
  const [Document, setDocument] = useState("");
  const addDocuments = (e) => {
    e.preventDefault();
    setDocuments([
      ...Documents,
      {
        idDocument: uuid(),
        DocumentName: e.target.value,
      },
    ]);
    form.resetFields();
    setFlag("hide");
  };
  const [form] = useForm();

  return (
    
    <Modal
      title={t("organigrama.assign-documents.title")}
      className="smallModal"
      visible={ModalDocumets}
      onCancel={() => {
        setModalDocumets(false);
      }}
      onOk={() => setModalDocumets(true)}
      footer={[
        <Button
          style={{ marginRight: "15px" }}
          className="secondary"
          onClick={() => {
            setModalDocumets(false);
          }}
        >
          {t("organigrama.assign-documents.btn-cancel")}
        </Button>,
        <Button
          className="primary"
          onClick={() => {
            setModalDocumets(false);
          }}
        >
          {t("organigrama.assign-documents.btn-save")}
        </Button>,
      ]}
    >
      <Form style={{ marginLeft: "10px" }}>
        <Form.Item name="Administrador">
          <Checkbox>{t("organigrama.assign-documents.curp")}</Checkbox>
        </Form.Item>
        <Form.Item name="Nine" style={{ marginTop: "-25px" }}>
          <Checkbox>{t("organigrama.assign-documents.proof-studies")}</Checkbox>
        </Form.Item>
        <Form.Item name="remember" style={{ marginTop: "-25px" }}>
          <Checkbox>{t("organigrama.assign-documents.proof-address")}</Checkbox>
        </Form.Item>
        <Form.Item name="Organigrama" style={{ marginTop: "-25px" }}>
          <Checkbox>
            {t("organigrama.assign-documents.official-identification")}
          </Checkbox>
        </Form.Item>
        <Form.Item name="editar" style={{ marginTop: "-25px" }}>
          <Checkbox>
            {t("organigrama.assign-documents.birth-certificate")}
          </Checkbox>
        </Form.Item>
        <DocumentsList Documents={Documents} />

        <Form.Item name="Desarrollo" style={{ marginTop: "-25px" }}>
          <Link to="#" onClick={() => setFlag("show")}>
            {" "}
            <PlusCircleOutlined onClick={() => {}} />{" "}
            {t("organigrama.assign-documents.link-add-document")}
          </Link>
        </Form.Item>
        <Row className={flag}>
          <Col span={24}>
            <Row style={{ marginTop: "-20px" }}>
              <Col span={24}>
                <span>
                  <b>{t("organigrama.assign-documents.add-new-document")}</b>
                </span>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form
                  initialValues={{
                    document: "",
                  }}
                  form={form}
                >
                  <Form.Item name="document">
                    <Input
                      type="text"
                      value={Document}
                      onPressEnter={addDocuments}
                      placeholder="Ej. Número de Seguridad Social NSS"
                    />
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default ModalDocument;
