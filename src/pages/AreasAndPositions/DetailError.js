import { Col, Row } from "antd";
import React from "react";

export default function DetailError() {
  return (
    <>
      <Row
        className="dividerBottomFull"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col className="gutter-row" span={24}>
          <h3>Detalle del archivo: Archivo_final.csv</h3>
        </Col>
      </Row>

      <Row
        style={{ marginTop: "20px" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col className="gutter-row" span={8}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <h3>Resumen</h3>
            </Col>
          </Row>

          <Row
            style={{ textAlign: "left", marginTop: "30px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={2}></Col>
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>Archivo:</p>
            </Col>
            <Col className="gutter-row" span={13}>
              <p>organigrama2018.csv</p>
            </Col>
          </Row>

          <Row
            style={{ textAlign: "left" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={2}></Col>
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>Usuario:</p>
            </Col>
            <Col className="gutter-row" span={13}>
              <p>Demo Soporte TI</p>
            </Col>
          </Row>

          <Row
            style={{ textAlign: "left" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={2}></Col>
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>Estatus:</p>
            </Col>
            <Col className="gutter-row" span={13}>
              <p className="iconRed" style={{ fontWeight: "bold" }}>
                ERROR
              </p>
            </Col>
          </Row>

          <Row
            style={{ textAlign: "left" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={2}></Col>
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>
                Total de errores:
              </p>
            </Col>
            <Col className="gutter-row" span={13}>
              <p className="iconRed" style={{ fontWeight: "bold" }}>
                2 ERRORES
              </p>
            </Col>
          </Row>

          <Row
            style={{ textAlign: "left" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={10}>
              <p style={{ fontWeight: "bold", textAlign: "right" }}>
                Fecha de carga:
              </p>
            </Col>
            <Col className="gutter-row" span={12}>
              <p>10 MAY 2021</p>
            </Col>
          </Row>
        </Col>
        <Col
          className="gutter-row dividerLeft"
          style={{ paddingLeft: "70px" }}
          span={16}
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <h3>Errores</h3>
            </Col>
          </Row>

          <Row
            className="dividerBottomFull"
            style={{ marginTop: "30px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold" }}>Columna</p>
            </Col>
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold" }}>Fila</p>
            </Col>
            <Col className="gutter-row" span={8}>
              <p style={{ fontWeight: "bold" }}>Error</p>
            </Col>
          </Row>

          <Row
            className="dividerBottomFull"
            style={{ marginTop: "20px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={8}>
              <p>Biblioteca 2</p>
            </Col>
            <Col className="gutter-row" span={8}>
              <p>6</p>
            </Col>
            <Col className="gutter-row" span={8}>
              <p className="iconRed" style={{ fontWeight: "bold" }}>
                Biblioteca inexistente
              </p>
            </Col>
          </Row>

          <Row
            className="dividerBottomFull"
            style={{ marginTop: "20px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={8}>
              <p>Biblioteca 8</p>
            </Col>
            <Col className="gutter-row" span={8}>
              <p>16</p>
            </Col>
            <Col className="gutter-row" span={8}>
              <p className="iconRed" style={{ fontWeight: "bold" }}>
                Biblioteca inexistente
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <div style={{ height: "100px" }}></div>
    </>
  );
}
