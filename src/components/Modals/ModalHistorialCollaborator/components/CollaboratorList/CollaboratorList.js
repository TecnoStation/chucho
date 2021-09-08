import React from 'react'
import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import { Link } from 'react-router-dom';

 function CollaboratorList({Collaborator}) {
  const [t, i18n] = useTranslation("global");

    return (
        <>
         <Row
          className="dividerBottomFull"
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col span={5}>{Collaborator.position}</Col>
          <Col span={6}>{Collaborator.start}</Col>
          <Col span={9}>{Collaborator.end}</Col>
          <Col span={4}>
            <Link className="iconBlue" to="#">
              Ver Detalle
            </Link>
          </Col>
        </Row>   
        </>
    )
}

export default CollaboratorList
