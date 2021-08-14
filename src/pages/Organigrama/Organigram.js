import React from "react";
import MaterialIcon from "material-icons-react";
import { Col, Input, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import TreeDrop from "./components/TreeDrop/TreeDrop";

function Organigram() {
  return (
    <>
      <Row style={{ textAlign: "center" }}>
        <Col style={{ marginTop: "5px" }} span={1}>
          <MaterialIcon icon="filter_alt" />
        </Col>
        <Col
          style={{ marginTop: "5px", height: "25px" }}
          className="dividerLeft"
          span={1}
        >
          <MaterialIcon icon="groups" />
        </Col>
        <Col
          style={{ marginTop: "5px", height: "25px" }}
          className="dividerLeft"
          span={1}
        >
          <MaterialIcon icon="domain" />
        </Col>
        <Col
          style={{ marginTop: "5px", height: "25px" }}
          className="dividerLeft"
          span={1}
        >
          <MaterialIcon icon="publish" />
        </Col>
        <Col
          style={{ marginTop: "5px", height: "25px", textAlign: "left" }}
          className="dividerLeft"
          span={15}
        >
          <MaterialIcon icon="filter_alt" />
        </Col>
        <Col span={5}>
          <Input addonAfter={<SearchOutlined />} placeholder="Buscar puesto" />
        </Col>
      </Row>
      <br />
      <TreeDrop />
      <br />
      <TreeDrop />
    </>
  );
}

export default Organigram;
