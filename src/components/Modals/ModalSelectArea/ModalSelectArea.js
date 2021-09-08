import React, { useState } from "react";
import { Row, Modal, Button, Col, AutoComplete, Form } from "antd";
import { IoMdSquare } from "react-icons/io";

function ModalSelectArea({ modalSelect, setModalSelect, setModalMove }) {
  const [listTeamName, setListTeamName] = useState([
    { value: "Director de marketing" },
    { value: "Gerente de ventas" },
    { value: "Analista de software" },
  ]);
  return (
    <Modal
      title="Selecciona el área al que los deseas mover"
      visible={modalSelect}
      centered={true}
      className="selectAreaModal"
      onCancel={() => {
        setModalSelect(false);
      }}
      footer={[
        <Row style={{ marginTop: "0px" }}>
          <Col span={24}>
            <Button
              style={{ marginRight: "15px" }}
              className="secondary"
              onClick={() => {
                setModalSelect(false);
              }}
            >
              Cancelar
            </Button>

            <Button
              type="button"
              className="primary"
              onClick={() => {
                setModalSelect(false);
                setModalMove(false);
              }}
            >
              Mover
            </Button>
          </Col>
        </Row>,
      ]}
    >
      <Form style={{ textAlign: "left" }} layout="vertical">
        <Form.Item name="password" label="">
          <AutoComplete
            className="autoComplete"
            placeholder="Buscar área"
            options={listTeamName}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </Form.Item>
      </Form>
      <Row>
        <Col
          className="tagThree"
          span={24}
          style={{
            textAlign: "left",
            height: "32px",
            paddingTop: "5px",
            paddingLeft: "10px",
          }}
        >
          <IoMdSquare className="iconGreen" /> Dirección de Finanzas
        </Col>
      </Row>
    </Modal>
  );
}

export default ModalSelectArea;
