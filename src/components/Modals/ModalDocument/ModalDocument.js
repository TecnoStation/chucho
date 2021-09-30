import React, { useState } from "react";
import { Form, Button, Modal, Checkbox, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useForm } from "antd/lib/form/Form";
import Good from "../../../assets/img/icons/bien_hecho.svg";
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
      title={t("organigram.assign-documents.title")}
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
          {t("organigram.assign-documents.btn-cancel")}
        </Button>,
        <Button
          className="primary"
          onClick={() => {
            setModalDocumets(false);

            const modal = Modal.info({
              title: "",
              className: "MessagesModal",
              centered: true,
              content: (
                <Row style={{ marginTop: "-30px" }}>
                  <Col span={24}>
                    <p>
                      <img alt="ico" className="" src={Good} />
                    </p>
                  </Col>
                  <Col style={{ marginTop: "-15px" }} span={24}>
                    <h2>
                      <b>{t("organigram.modal-collaborators.title")}</b>
                    </h2>
                  </Col>
                  <Col span={24} style={{ padding: "0px 60px 0px 60px" }}>
                    <h3>{t("organigram.modal-collaborators.text")}</h3>
                  </Col>
                  <Col span={24}>
                    <h3></h3>
                    <br />
                  </Col>
                  <Col span={24}>
                    <Button
                      onClick={() => {
                        modal.destroy();
                      }}
                      className="primary btn"
                    >
                      {t("organigram.password-modal.btn-done")}
                    </Button>
                  </Col>
                </Row>
              ),
              onOk() {},
            });
          }}
        >
          {t("organigram.assign-documents.btn-save")}
        </Button>,
      ]}
    >
      <Form style={{ marginLeft: "10px" }}>
        <Form.Item name="Administrador">
          <Checkbox>{t("organigram.assign-documents.curp")}</Checkbox>
        </Form.Item>
        <Form.Item name="Nine" style={{ marginTop: "-25px" }}>
          <Checkbox>{t("organigram.assign-documents.proof-studies")}</Checkbox>
        </Form.Item>
        <Form.Item name="remember" style={{ marginTop: "-25px" }}>
          <Checkbox>{t("organigram.assign-documents.proof-address")}</Checkbox>
        </Form.Item>
        <Form.Item name="organigram" style={{ marginTop: "-25px" }}>
          <Checkbox>
            {t("organigram.assign-documents.official-identification")}
          </Checkbox>
        </Form.Item>
        <Form.Item name="editar" style={{ marginTop: "-25px" }}>
          <Checkbox>
            {t("organigram.assign-documents.birth-certificate")}
          </Checkbox>
        </Form.Item>
        <DocumentsList Documents={Documents} />

        <Form.Item name="Desarrollo" style={{ marginTop: "-25px" }}>
          <Link to="#" onClick={() => setFlag("show")}>
            {" "}
            <PlusCircleOutlined onClick={() => {}} />{" "}
            {t("organigram.assign-documents.link-add-document")}
          </Link>
        </Form.Item>
        <Row className={flag}>
          <Col span={24}>
            <Row style={{ marginTop: "-20px" }}>
              <Col span={24}>
                <span>
                  <b>{t("organigram.assign-documents.add-new-document")}</b>
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
