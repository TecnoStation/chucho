import React from 'react'
import {  Col, Row } from "antd";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function HistorialData({historialjob}) {
  const [t, i18n] = useTranslation("global");
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
            {t("organigram.areasandpositions-perfil.tab1.modal-position.view-detail")}
            </Link>
          </Col>
        </Row>
    )
}

export default HistorialData
