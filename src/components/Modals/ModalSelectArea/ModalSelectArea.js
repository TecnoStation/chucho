import React from "react";
import { Row, Modal, Button, Col, AutoComplete, Form } from "antd";
import { IoMdSquare } from "react-icons/io";

function ModalSelectArea({ modalSelect, setModalSelect, setModalMove }) {
  return (
    <Modal
      title="Selecciona el área al que los deseas mover"
      visible={modalSelect}
      onCancel={() => {
        setModalSelect(false);
      }}
      footer={[
        <Button
          style={{ marginRight: "15px" }}
          className="secondary"
          onClick={() => {
            setModalSelect(false);
          }}
        >
          Cancelar
        </Button>,
        <input
          type="button"
          className="primary"
          onClick={() => {
            setModalSelect(false);
            setModalMove(false);
          }}
          value="Mover"
        />,
      ]}
    >
      <Form layout="vertical">
        <Form.Item name="password" label="">
          <AutoComplete
            className="autoComplete"
            placeholder="Buscar área"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </Form.Item>
      </Form>
      <Row>
        <Col className="tagThree" span={24} style={{ textAlign: "left" }}>
          <IoMdSquare className="iconGreen" /> Dirección de Finanzas
        </Col>
      </Row>
    </Modal>
  );
}

export default ModalSelectArea;
