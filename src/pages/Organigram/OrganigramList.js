import React, { useState } from "react";
import MaterialIcon from "material-icons-react";
import { Col, Input, Row, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import TreeDrop from "./components/TreeDrop/TreeDrop";
import { Link } from "react-router-dom";
import ModalErasersList from "../../components/Modals/ModalErasersList/ModalErasersList";

function OrganigramList() {
  const menu = (
    <>
      <div className="menuToltip">
        <Link to="/areasandpositions-general">
          <span>Carga masiva</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link to="/areasandpositions-general">
          <span>Áreas y puestos</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link to="/areasandpositions-general">
          <span>Perfil de puestos</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link to="/areasandpositions-general">
          <span>Colaboradores</span>
        </Link>
      </div>
    </>
  );

  const [historial, setHistorial] = useState(false);

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
          <Tooltip title="Crear equipo" placement="bottom" color="#2cccd3">
            <Link to="/organigrama/teams">
              <MaterialIcon icon="groups" />
            </Link>
          </Tooltip>
        </Col>
        <Col
          style={{ marginTop: "5px", height: "25px" }}
          className="dividerLeft"
          span={1}
        >
          <Tooltip title="Mi empresa" placement="bottom" color="#2cccd3">
            <Link to="/organigrama/mybisiness">
              <MaterialIcon icon="domain" />
            </Link>
          </Tooltip>
        </Col>
        <Col
          style={{ marginTop: "5px", height: "25px" }}
          className="dividerLeft"
          span={1}
        >
          <Tooltip title={menu} placement="bottom" color="#2cccd3">
            <Link to="#">
              <MaterialIcon icon="publish" />
            </Link>
          </Tooltip>
        </Col>
        <Col
          style={{ marginTop: "5px", height: "25px", textAlign: "left" }}
          className="dividerLeft"
          span={15}
        >
          <Tooltip
            title="Historial de cambios"
            placement="bottom"
            color="#2cccd3"
          >
            <Link
              to="#"
              onClick={() => {
                setHistorial(true);
              }}
            >
              <MaterialIcon icon="rotate_left" />
            </Link>
          </Tooltip>
        </Col>
        <Col span={5}>
          <Input addonAfter={<SearchOutlined />} placeholder="Buscar puesto" />
        </Col>
      </Row>
      <br />
      <TreeDrop />
      <br />
      <TreeDrop />
      <ModalErasersList historial={historial} setHistorial={setHistorial} />
    </>
  );
}

export default OrganigramList;
