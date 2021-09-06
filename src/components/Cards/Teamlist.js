import React, { useState } from "react";
import { Col, Dropdown, Menu, Row } from "antd";
import { Link } from "react-router-dom";
import More from "../../assets/img/icons/more_vert-24px.svg";
import { useTranslation } from "react-i18next";
import ModalRename from "../Modals/ModalCreateTeam/components/ModalRename/ModalRename";
import ModalCardTeam from "../Modals/ModalCreateTeam/components/ModalCardTeam/ModalCardTeam";
import { v4 as uuid } from "uuid";

import "./Simplecard.scss";

export default function Teamlist({ teamList, setTeamList, edit }) {
  const [t, i18n] = useTranslation("global");
  const [modalRename, setModalRename] = useState(false);
  const [modalCard, setModalCard] = useState(false);

  return teamList.map((team, index) => (
    <>
      <Row
        id={team.id}
        key={index}
        style={{ marginTop: "30px", width: "80%", paddingBottom: "20px" }}
        className="dividerBottomFull rowTeam"
      >
        <Col style={{ paddingLeft: "16px" }} span={11}>
          <span>
            <b className="TeamNames" id="nameTeam">
              {team.name}
            </b>
          </span>
          <br />
          <span>{team.subtitle}</span>
        </Col>
        <Col span={11}>
          <p>{team.date}</p>
        </Col>
        <Col span={2}>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="01">
                  <Link
                    to="#"
                    onClick={() => {
                      const clone = JSON.parse(JSON.stringify(team));
                      clone.idTeam = uuid();
                      teamList.push(clone);
                    }}
                  >
                    Clonar equipo
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
                    Renombrar
                  </Link>
                </Menu.Item>
                <Menu.Item key="23">
                  {
                    //aqui
                  }
                  <Link
                    to="#"
                    onClick={() => {
                      edit(team, index);
                    }}
                  >
                    Editar
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
                    Eliminar
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
      </Row>
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
  ));
}
