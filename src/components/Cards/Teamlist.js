import React from "react";
import { Col, Dropdown, Menu, Row } from "antd";
import { Link } from "react-router-dom";
import More from "../../assets/img/icons/more_vert-24px.svg";

import "./Simplecard.scss";

export default function Teamlist(props) {
  const { teams } = props;

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Menu.Item key="01">
          <Link onClick={() => props.clone()} to="#">
            Clonar equipo
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key="1">
        <Menu.Item key="12">
          <Link onClick={() => props.openModalRename()} to="#">
            Renombrar
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key="2">
        <Menu.Item key="23">
          <Link onClick={() => props.edit()} to="#">
            Editar
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <Menu.Item key="34">
          <Link to="#">Eliminar</Link>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );

  console.log(teams);

  return teams.map((data, index) => (
    <Row
      id={data.id}
      key={index}
      style={{ marginTop: "30px", width: "80%", paddingBottom: "20px" }}
      className="dividerBottomFull"
    >
      <Col span={11}>
        <span>
          <b id="nameTeam">{data.name}</b>
        </span>
        <br />
        <span>{data.subtitle}</span>
      </Col>
      <Col span={11}>
        <p>{data.date}</p>
      </Col>
      <Col span={2}>
        <Dropdown overlay={menu} trigger={["click"]}>
          <Link
            to="#"
            className="ant-dropdown-link"
            id={index}
            onMouseEnter={(e) => props.setDates(index, e)}
            onClick={(e) => props.setDates(index, e)}
          >
            <img alt="logo" src={More} width="25" height="25" />
          </Link>
        </Dropdown>
      </Col>
    </Row>
  ));
}
