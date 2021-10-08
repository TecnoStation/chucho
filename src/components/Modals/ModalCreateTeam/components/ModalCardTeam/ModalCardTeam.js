import React from "react";
import { Col, Dropdown, Form, Menu, Modal, Row, Checkbox, Tooltip } from "antd";
import { Link } from "react-router-dom";
import Avatar from "../../../../../assets/img/avatar.png";
import More from "../../../../../assets/img/icons/more_vert-24px.svg";
import MembersTeam from "./component/MembersTeam";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";


function ModalCardTeam({
  modalCard,
  setModalCard,
  teamList,
  edit,
  setTeamList,
}) {
  const [t, i18n] = useTranslation("global");
  const team = teamList[modalCard.index];
  const menu = (
    <Menu style={{
      position: "absolute",
      marginLeft: "-75px",
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
          {t("organigram.menu-card.edit-data")}
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
          {t("organigram.menu-card.remove")}
        </Link>
      </Menu.Item>
    </Menu>
  );
  
    const text = (<>
                    <span style={{color: "#000"}}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</b></span><br/><br/><span style={{color: "#000"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volup</span>
                </>);

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
              <b className="secondaryText">{t("organigram.teams-modal.kind-team-label")}</b>
              <Tooltip color="#FFFDE7" title={text}>
                  <span style={{ marginLeft: "10px", fontSize: "13px", position: "absolute" }}>
                    <QuestionCircleOutlined className="iconSureGray" />
                  </span>
              </Tooltip>
            </p>
          </Col>
          <Col span={16}>
            <p>
              <b className="secondaryText">{t("organigram.teams-modal.modality-label")}</b>
              <Tooltip color="#FFFDE7" title={text}  >
                  <span style={{ marginLeft: "10px", fontSize: "13px" }}>
                    <QuestionCircleOutlined className="iconSureGray" />
                  </span>
              </Tooltip>
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
            <p className="secondaryText">{modalCard.type}</p>
          </Col>
          <Col span={12}>
            <p className="secondaryText">{modalCard.modality} </p>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "left", paddingLeft: "5px" }} span={24}>
            <p>
              <b className="secondaryText">{t("organigram.teams-modal.members-team")}</b>
              <Tooltip color="#FFFDE7" title={text}>
                  <span style={{ marginLeft: "10px", fontSize: "13px" }}>
                    <QuestionCircleOutlined className="iconSureGray" />
                  </span>
              </Tooltip>
            </p>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "left", paddingLeft: "5px" }} span={24}>
            <p>{modalCard.frameWork}</p>
          </Col>
        </Row>
        <Row className="secondaryText" style={{ textAlign: "center", marginTop: "40px" }}>
          <Col span={10}>
            <b>{t("organigram.teams-modal.members-team-2")}</b>
          </Col>
          <Col span={6}>
            <b>{t("organigram.teams-modal.leader")}</b>
          </Col>
          <Col span={8}>
            <b>{t("organigram.teams-modal.role")}</b>
          </Col>
        </Row>

        <MembersTeam collaborators={modalCard.collaborators} />
      </Modal>
    </>
  );
}

export default ModalCardTeam;
