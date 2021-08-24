import React, { useState } from "react";
import { Form, Button, Modal, Checkbox, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useForm } from "antd/lib/form/Form";
import { v4 as uuid } from "uuid";
import DocumentsList from "./components/DocumentsList/DocumentsList";

function ModalDocument({ ModalDocumets, setModalDocumets }) {
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
      title="Asignar documentos al colaborador"
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
          Cancelar
        </Button>,
        <Button
          className="primary"
          onClick={() => {
            setModalDocumets(false);
          }}
        >
          Guardar
        </Button>,
      ]}
    >
      <Form style={{ marginLeft: "10px" }}>
        <Form.Item name="Administrador">
          <Checkbox>CURP</Checkbox>
        </Form.Item>
        <Form.Item name="Nine" style={{ marginTop: "-25px" }}>
          <Checkbox>Comprobante de estudios</Checkbox>
        </Form.Item>
        <Form.Item name="remember" style={{ marginTop: "-25px" }}>
          <Checkbox>Comprobante de domicilio</Checkbox>
        </Form.Item>
        <Form.Item name="Organigrama" style={{ marginTop: "-25px" }}>
          <Checkbox>Identificación oficia</Checkbox>
        </Form.Item>
        <Form.Item name="editar" style={{ marginTop: "-25px" }}>
          <Checkbox>Acta de nacimiento</Checkbox>
        </Form.Item>
        <DocumentsList Documents={Documents} />

        <Form.Item name="Desarrollo" style={{ marginTop: "-25px" }}>
          <Link to="#" onClick={() => setFlag("show")}>
            {" "}
            <PlusCircleOutlined onClick={() => {}} /> Agregar documento
          </Link>
        </Form.Item>
        <Row className={flag}>
          <Col span={24}>
            <Row style={{ marginTop: "-20px" }}>
              <Col span={24}>
                <span>
                  <b>Agrega un nuevo documento</b>
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
