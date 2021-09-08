import React from 'react'
import {  Col, Row } from "antd";
import { Link } from 'react-router-dom';

function HistorialData({historialjob}) {
    return (
        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col span={5}><span>{historialjob.name}</span></Col>
          <Col span={6}><span>{historialjob.date}</span></Col>
          <Col span={9}><span>{historialjob.collaborators}</span></Col>
          <Col span={4}>
            <Link className="iconBlue" to="#">
              Ver Detalle
            </Link>
          </Col>
        </Row>
    )
}

export default HistorialData
