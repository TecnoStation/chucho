import React, { useEffect, useState } from "react";
import { AutoComplete, Button, Col, Input, Row } from "antd";
import { IoMdAdd } from "react-icons/io";
import { BsFillGrid3X2GapFill, BsListUl } from "react-icons/bs";
import { RiFilterFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ModalCreateTeam from "../../components/Modals/ModalCreateTeam/ModalCreateTeam";
import { useForm } from "antd/lib/form/Form";
import Teamlist from "../../components/Cards/Teamlist";
import "./Teams.scss";

const { Search } = Input;

export default function Teamsv() {
  const [t, i18n] = useTranslation("global");
  const [memberScroll, setMemberScroll] = useState("memberScroll1");
  const [createTeamModal, setCreateTeamModal] = useState(false);

  //-------------------- Set - Get teamlist ------------------

  const [teamList, setTeamList] = useState([]);
  const [listTeamName, setListTeamName] = useState([
    { value: "Array desde backend" },
    { value: "Burns Bay Road" },
    { value: "Downing Street" },
    { value: "Wall Street" },
  ]);

  useEffect(() => {
    const storageTeams = JSON.parse(localStorage.getItem("teamList"));
    if (storageTeams) {
      setTeamList(storageTeams);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("teamList", JSON.stringify(teamList));
  }, [teamList]);

  //-------------------- End  Set - Get teamlist ------------------

  //-------------------- Edit teamlist ------------------

  const [editionMode, setEditionMode] = useState(false);
  const [inputType, setInputType] = useState(false);
  const [typeTeam, setTypeTeam] = useState("hide");
  const [collaboratorsList, setCollaboratorsList] = useState([]);
  const [item, setItem] = useState();
  const [form] = useForm();

  const edit = (team, item) => {
    setEditionMode(true);

    setItem(item);
    setCollaboratorsList(team.collaborators);
    const collaborators = team.collaborators;

    collaborators.forEach((collaborator, index) => {
      form.setFieldsValue({
        ["rol" + index]: collaborator.rol,
      });
    });

    setCreateTeamModal(true);
    form.setFieldsValue({
      teamName: team.name,
      type: team.type,
      Modality: team.modality,
      frameWork: team.frameWork,
    });

    if (team.type === "Personalizado") {
      setTypeTeam("hide");
      setInputType(false);
      setMemberScroll("memberScroll1");
    } else {
      setTypeTeam("show");
      setInputType(true);
      setMemberScroll("memberScroll2");
    }
  };

  //--------------------End Edit teamlist ------------------

  //----------------- Filter Teams ------------------------------------------
  const filterTeams = () => {
    const input = document.getElementById("filter");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("teamList");
    const row = div.getElementsByClassName("rowTeam");
    let i;
    for (i = 0; i < row.length; i++) {
      let col = row[i].getElementsByClassName("TeamNames")[0];
      if (col) {
        let txtValue = col.textContent || col.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          row[i].style.display = "";
        } else {
          row[i].style.display = "none";
        }
      }
    }
  };

  //----------------- End Filter Teams ------------------------------------------

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row iconGray"
          style={{ fontSize: "16px" }}
          span={1}
        >
          <RiFilterFill />
        </Col>
        <Col className="gutter-row rigth" span={1}>
          <Link
            to={
              "/" + t("routes.organigram") + "/" + t("paths_organigram.teams")
            }
          >
            <span className="iconGray" style={{ fontSize: "17px" }}>
              <BsFillGrid3X2GapFill />
            </span>
          </Link>
        </Col>
        <Col className="gutter-row " span={3} style={{ textAlign: "left" }}>
          <Link
            to={
              "/" + t("routes.organigram") + "/" + t("paths_organigram.teamsv")
            }
          >
            <BsListUl
              className="dividerLeft iconBlue"
              style={{ paddingLeft: "5px", fontSize: "22px" }}
            />
          </Link>
        </Col>
        <Col className="gutter-row" span={6}>
          <AutoComplete
            id="filter"
            options={listTeamName}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
            onChange={filterTeams}
          >
            <Input.Search
              placeholder={t("organigram.teams2.search-position")}
            />
          </AutoComplete>
        </Col>
        <Col span={9}></Col>
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
            }}
            icon={<IoMdAdd className="iconAjust2" />}
          >
            {" "}
            <span className="textAjust4">
              {t("organigram.teams2.new-team")}
            </span>
          </Button>
        </Col>
      </Row>

      <Row className="secondaryText" style={{ marginTop: "50px" }}>
        <Col span={2}></Col>
        <Col span={6}>
          <p>{t("organigram.teams2.tex")}</p>
        </Col>
        <Col style={{ paddingLeft: "15px" }} span={9}>
          <p>{t("organigram.teams2.tex2")} </p>
        </Col>
        <Col style={{ paddingLeft: "15px" }} span={2}>
          <p>{t("organigram.teams2.tex3")}</p>
        </Col>
      </Row>

      <div className="teamList" id="teamList">
        <Teamlist setTeamList={setTeamList} teamList={teamList} edit={edit} />
      </div>

      <div style={{ height: "50px" }}></div>

      <ModalCreateTeam
        collaboratorsList={collaboratorsList}
        setCollaboratorsList={setCollaboratorsList}
        inputType={inputType}
        setInputType={setInputType}
        typeTeam={typeTeam}
        setTypeTeam={setTypeTeam}
        editionMode={editionMode}
        setEditionMode={setEditionMode}
        createTeamModal={createTeamModal}
        setCreateTeamModal={setCreateTeamModal}
        setTeamList={setTeamList}
        teamList={teamList}
        form={form}
        item={item}
        setItem={setItem}
      />
    </>
  );
}
