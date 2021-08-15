import { Card, Col, Row } from "antd";
import React from "react";

export default function Messages() {
  return (
    <>
      <Row>
        <Col span={8}>
          <p>Validar estructuras</p>
        </Col>
        <Col span={8}>
          <p>Validar seleccionados</p>
        </Col>
        <Col span={8}>
          <p>No Validar seleccionados</p>
        </Col>
      </Row>

      <Card>
        <Row>
          <Col span={12}>
            <p>Borrador</p>
          </Col>
          <Col span={4}>
            <p>Creado por</p>
          </Col>
          <Col span={4}>
            <p>Creación</p>
          </Col>
          <Col span={4}>
            <p>Acciones</p>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <p>Estructura de la Sucursal Pachuca</p>
          </Col>
          <Col>
            <p></p>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Card>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>

      <Card>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Card>

      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </>
  );
}
