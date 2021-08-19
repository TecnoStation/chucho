import React from "react";
import { Button, Col, Dropdown, Menu, Row } from "antd";
import More from "../../assets/img/icons/more_vert-24px.svg";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function branchs({
  branchs,
  setValueTemporal,
  setModal,
  setItem,
  Item,
  editBranch,
  deleteBranch,
}) {
  const menu = (
    <Menu>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link
            to="#"
            onClick={() => {
              editBranch(Item);
              setValueTemporal(Item);
              console.log(Item);
            }}
            onMouseOver={() => {
              setValueTemporal(Item);
              console.log(Item);
            }}
          >
            Editar sucursal
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link to="#" onClick={() => deleteBranch(Item)}>
            Eliminar Sucursal
          </Link>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );

  return branchs.map((branch, index) => (
    <Row
      key={branch.idBranch}
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      className="rowbranch"
    >
      <Col className="gutter-row namesbranch" id="namesbranch" span={8}>
        <span>{branch.name}</span>
      </Col>
      <Col
        className="gutter-row directionbranch"
        id="directionbranch"
        span={12}
      >
        <span>{branch.direction}</span>
      </Col>

      <Col className="gutter-row" span={4}>
        <Dropdown overlay={menu} trigger={["click"]}>
          <Link
            to="#"
            className="ant-dropdown-link"
            onClick={(e) => {
              e.preventDefault();
              setItem(branch);
            }}
          >
            <img alt="logo" src={More} width="25" height="25" />
          </Link>
        </Dropdown>
      </Col>
    </Row>
  ));
}
