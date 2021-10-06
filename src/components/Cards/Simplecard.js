import React, { useState } from "react";
import { Col, Dropdown, Menu, Input } from "antd";
import { Link } from "react-router-dom";
import More from "../../assets/img/icons/more_vert-24px.svg";
import { useTranslation } from "react-i18next";
import ModalRename from "../Modals/ModalCreateTeam/components/ModalRename/ModalRename";
import ModalCardTeam from "../Modals/ModalCreateTeam/components/ModalCardTeam/ModalCardTeam";
import { v4 as uuid } from "uuid";

import "./Simplecard.scss";

export default function Simplecard({ teamList, setTeamList, edit }) {
  const [t, i18n] = useTranslation("global"); 
  const [modalRename, setModalRename] = useState(false);
  const [modalCard, setModalCard] = useState(false);

  return (
    <>
      {teamList.map((team, index) => (
        <div className="Simplecard rowTeam" id={team.idTeam} key={index}>
          <Col
            onClick={() => {
              setModalCard({
                visible: true,
                idTeam: uuid(),
                type: team.type,
                name: team.name,
                modality: team.modality,
                frameWork: team.frameWork,
                collaborators: team.collaborators,
                index: index,
              });
            }}
            style={{ cursor: "pointer" }}
            className="gutter-row"
            span={22}
          >
            <h4 className="TeamNames" id="nameTeam">
              <b> {team.name}</b>
            </h4>
            <span>{team.subtitle}</span>
            <br />
            <span>{team.date}</span>
          </Col>
          <Col className="gutter-row" span={2}>
            <Dropdown
              overlay={
                <Menu style={{
      position: "absolute",
      marginLeft: "-75px",
      marginTop: "-20px",
    }} >
                  <Menu.Item key="01">
                    <Link
                      to="#"
                      onClick={() => {
                        const clone = JSON.parse(JSON.stringify(team));
                        clone.idTeam = uuid();
                        teamList.push(clone);
                      }}
                    >
                      {t("organigram.menu.clone-team")}
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="12">
                    <Link
                      onClick={() => {
                        setModalRename({
                          name: team.name,
                          index: index,
                          visible: true,
                        });
                      }}
                      to="#"
                    >
                      {t("organigram.menu.rename")}
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="23">
                    <Link
                      to="#"
                      onClick={() => {
                        edit(team, index);
                      }}
                    >
                      {t("organigram.menu.edit")}
                    </Link>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="34">
                    <Link
                      to="#"
                      onClick={() => {
                        const arrayFilter = teamList.filter(
                          (item) => item.idTeam !== team.idTeam
                        );
                        setTeamList(arrayFilter);
                      }}
                    >
                      {t("organigram.menu.remove")}
                    </Link>
                  </Menu.Item>
                </Menu>
              }
              trigger={["click"]}
            >
              <Link to="#" className="ant-dropdown-link" id={index}>
                <img alt="logo" src={More} width="25" height="25" />
              </Link>
            </Dropdown>
          </Col>
        </div>
      ))}
      <ModalCardTeam
        setTeamList={setTeamList}
        edit={edit}
        teamList={teamList}
        modalCard={modalCard}
        setModalCard={setModalCard}
      />

      <ModalRename
        setModalRename={setModalRename}
        modalRename={modalRename}
        setTeamList={setTeamList}
        teamList={teamList}
      />
    </>
  );
}
