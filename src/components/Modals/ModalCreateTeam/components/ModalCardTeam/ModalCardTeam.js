import React from "react";
import { Col, Dropdown, Form, Menu, Modal, Row, Checkbox } from "antd";
import { Link } from "react-router-dom";
import Avatar from "../../../../../assets/img/avatar.png";
import More from "../../../../../assets/img/icons/more_vert-24px.svg";
import MembersTeam from "./component/MembersTeam";

function ModalCardTeam({
  modalCard,
  setModalCard,
  teamList,
  edit,
  setTeamList,
}) {
  const team = teamList[modalCard.index];
  const menu = (
    <Menu style={{
      position: "absolute",
      marginLeft: "-90px",
      marginTop: "-20px",
    }} >
      <Menu.Item key="1">
        <Link
          to="#"
          onClick={() => {
            edit(team, modalCard.index);
            setModalCard(false);
          }}
        >
          Editar datos
        </Link>
      </Menu.Item>
      <Menu.Divider />

      <Menu.Item key="2">
        <Link
          to="#"
          onClick={() => {
            const arrayFilter = teamList.filter(
              (item) => item.idTeam !== team.idTeam
            );
            setTeamList(arrayFilter);
            setModalCard(false);
          }}
        >
          Eliminar
        </Link>
      </Menu.Item>
    </Menu>
  );
  console.log(modalCard);
  return (
    <>
      <Modal
        title={modalCard.name}
        className="middleModal"
        visible={modalCard.visible}
        onCancel={() => {
          setModalCard(false);
        }}
        footer={false}
      >
        <Row>
          <Col span={6}>
            <p>
              <b>Tipo de equipo</b>
            </p>
          </Col>
          <Col span={16}>
            <p>
              <b>Modalidad</b>
            </p>
          </Col>
          <Col span={2}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <Link
                to="#"
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <img alt="logo" src={More} width="25" height="25" />
              </Link>
            </Dropdown>
          </Col>
        </Row>
        <Row style={{ textAlign: "left", paddingLeft: "12px" }}>
          <Col span={12}>
            <p>{modalCard.type}</p>
          </Col>
          <Col span={12}>
            <p>{modalCard.modality} </p>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "left", paddingLeft: "5px" }} span={24}>
            <p>
              <b>Marco de trabajo</b>
            </p>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "left", paddingLeft: "5px" }} span={24}>
            <p>{modalCard.frameWork}</p>
          </Col>
        </Row>
        <Row style={{ textAlign: "center", marginTop: "40px" }}>
          <Col span={10}>Miembros del Equipo</Col>
          <Col span={6}>Líder</Col>
          <Col span={8}>Roles</Col>
        </Row>

        <MembersTeam collaborators={modalCard.collaborators} />
      </Modal>
    </>
  );
}

export default ModalCardTeam;
