import React from "react";
import { Form, Input, Button, Modal, Tag } from "antd";
import {
  CheckCircleFilled,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";

export default function Modalcompetencias(props) {
  return (
    <>
      <Modal
        className="middleModal"
        title="Agregar competencias institucionales"
        visible={props.modalComp}
        onCancel={props.closeModalComp}
        onOk={props.sendComp}
        footer={<Button onClick={props.closeModalComp}>Cancelar</Button>}
      >
        <p>
          Agrega las competencias institucionales que deben tener todos los
          colaboradores de tu organización, puedes elegir hasta un máximo de
          tres.
        </p>
        <Form name="form" layout="vertical">
          <Form.Item name="empresa">
            <Input
              addonAfter={<SearchOutlined />}
              placeholder="Buscar Competencia"
            />
          </Form.Item>
        </Form>
        <div className="tagList">
          <Tag
            className="tag"
            onClick={(e) => props.cefective("Actitud de Servicio", e)}
          >
            Actitud de Servicio <PlusOutlined className="plusOutlined" />
          </Tag>
          <Tag
            className="tag"
            onClick={(e) => props.cefective("Apego a Normas", e)}
          >
            Apego a Normas <PlusOutlined className="plusOutlined" />
          </Tag>
          <Tag
            className="tag"
            onClick={(e) => props.cefective("Capacidad para Aprender", e)}
          >
            Capacidad para Aprender <PlusOutlined className="plusOutlined" />
          </Tag>
          <Tag
            className="tag"
            onClick={(e) => props.cefective("Comunicación Efectiva", e)}
          >
            Comunicación Efectiva <PlusOutlined className="plusOutlined" />
          </Tag>
          <Tag
            className="tag"
            onClick={(e) =>
              props.cefective("Control de Procesos - Administración", e)
            }
          >
            Control de Procesos - Administración{" "}
            <PlusOutlined className="plusOutlined" />
          </Tag>
          <Tag
            className="tag tag-active"
            onClick={(e) => props.cefective("Creatividad", e)}
          >
            Creatividad <CheckCircleFilled className="CheckCircleFilled" />
          </Tag>
        </div>
      </Modal>
    </>
  );
}
