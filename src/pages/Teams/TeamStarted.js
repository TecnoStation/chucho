import React, { useEffect, useState } from "react";
import { Button, Col, Input, Row } from "antd";
import Inicio from "../../assets/img/icons/Grupo 1182.svg";
import { IoMdAdd } from "react-icons/io";
import { SearchOutlined } from "@ant-design/icons";
import { BsFillGrid3X2GapFill, BsListUl } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ModalCreateTeam from "../../components/Modals/ModalCreateTeam/ModalCreateTeam";
import "./Teams.scss";
import { useForm } from "antd/lib/form/Form";

export default function TeamStarted() {
  const [t, i18n] = useTranslation("global");
  const [createTeamModal, setCreateTeamModal] = useState(false);
  const [teamList, setTeamList] = useState([]);
  const [inputType, setInputType] = useState(false);
  const [typeTeam, setTypeTeam] = useState("hide");
  const [collaboratorsList, setCollaboratorsList] = useState([]);
  const [memberScroll, setMemberScroll] = useState("memberScroll1");
  const [form] = useForm();

  useEffect(() => {
    const storageTeams = JSON.parse(localStorage.getItem("teamList"));
    if (storageTeams) {
      setTeamList(storageTeams);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("teamList", JSON.stringify(teamList));
  }, [teamList]);

  //----------------- Selects Dinamic Data ------------------------------------

  const typeTeamData = [
    {
      id: 0,
      name: "Personalizado",
    },
    {
      id: 1,
      name: "Modo Opertaivo Agile",
    },
  ];

  const modallityData = [
    {
      id: 0,
      name: "Funcional",
    },
    {
      id: 1,
      name: "Funcional 2",
    },
  ];

  const frameWorkData = [
    {
      id: 0,
      name: "Marco",
    },
    {
      id: 1,
      name: "Marco 1",
    },
  ];

  const dataSelects = [
    {
      id: 0,
      name: "Select",
    },
    {
      id: 1,
      name: "Select 1",
    },
    {
      id: 2,
      name: "Select 2",
    },
  ];

  //----------------- End Selects Dinamic Data --------------------------------

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row iconGray"
          style={{ fontSize: "16px" }}
          span={1}
        ></Col>
        <Col className="gutter-row rigth" span={1}>
          <Link
            to={
              "/" + t("routes.organigram") + "/" + t("paths_organigram.teams")
            }
          >
            <span style={{ fontSize: "17px" }}>
              <BsFillGrid3X2GapFill className="iconBlue" />
            </span>
          </Link>
        </Col>
        <Col
          className="gutter-row iconGray"
          span={3}
          style={{ textAlign: "left" }}
        >
          <Link
            to={
              "/" + t("routes.organigram") + "/" + t("paths_organigram.teamsv")
            }
          >
            <BsListUl
              className="dividerLeft"
              style={{ paddingLeft: "5px", fontSize: "22px" }}
            />
          </Link>
        </Col>
        <Col className="gutter-row" span={15}>
          <Input
            style={{ width: "200px", marginTop: "-5px" }}
            addonAfter={<SearchOutlined />}
            placeholder={t("organigram.teams.search-positions")}
          />
        </Col>
        <Col className="gutter-row" span={4}>
          <Button
            className="primaryB"
            onClick={() => {
              setCreateTeamModal(true);
            }}
            style={{
              textAlign: "left",
              marginRight: "20px",
              marginTop: "-5px",
              display: "none",
            }}
            icon={<IoMdAdd className="iconAjust2" />}
          >
            <span className="textAjust4">
              {t("organigram.teams.btn-new-team")}
            </span>
          </Button>
        </Col>
      </Row>

      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ textAlign: "center", padding: "90px 40px 92px 40px" }}
      >
        <Col className="gutter-row" span={8}></Col>
        <Col className="gutter-row" span={8}>
          <p>
            <img alt="ico" className="" src={Inicio} />
          </p>
          <br />
          <h1 className="primaryText">{t("organigram.teams.title")}</h1>
          <p>{t("organigram.teams.tex")}</p>
          <br />
          <p>
            <Button
              className="primaryB"
              onClick={() => {
                setCreateTeamModal(true);
              }}
              style={{ textAlign: "left", marginRight: "20px" }}
              icon={<IoMdAdd className="iconAjust2" />}
            >
              {" "}
              <span className="textAjust4">
                {t("organigram.teams.btn-new-team")}
              </span>
            </Button>
          </p>
        </Col>
        <Col className="gutter-row" span={8}></Col>
      </Row>
      <ModalCreateTeam
        collaboratorsList={collaboratorsList}
        setCollaboratorsList={setCollaboratorsList}
        inputType={inputType}
        setInputType={setInputType}
        typeTeam={typeTeam}
        setTypeTeam={setTypeTeam}
        createTeamModal={createTeamModal}
        setCreateTeamModal={setCreateTeamModal}
        setTeamList={setTeamList}
        teamList={teamList}
        form={form}
        memberScroll={memberScroll}
        setMemberScroll={setMemberScroll}
        dataSelects={dataSelects}
        frameWorkData={frameWorkData}
        modallityData={modallityData}
        typeTeamData={typeTeamData}
      />
    </>
  );
}
