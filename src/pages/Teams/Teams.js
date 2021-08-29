import React, { useEffect, useState } from "react";
import { Button, Col, Input, Row } from "antd";
import { IoMdAdd } from "react-icons/io";
import { BsFillGrid3X2GapFill, BsListUl } from "react-icons/bs";
import { RiFilterFill } from "react-icons/ri";
import Simplecard from "../../components/Cards/Simplecard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ModalCreateTeam from "../../components/Modals/ModalCreateTeam/ModalCreateTeam";
import { useForm } from "antd/lib/form/Form";
import "./Teams.scss";

const { Search } = Input;

export default function Teams() {
  const [t, i18n] = useTranslation("global");
  const [createTeamModal, setCreateTeamModal] = useState(false);

  //-------------------- Set - Get teamlist ------------------

  const [teamList, setTeamList] = useState([]);

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
    //console.log(team);
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

    if (team.type === "0") {
      setTypeTeam("hide");
      setInputType(false);
    } else {
      setTypeTeam("show");
      setInputType(true);
    }

    document.getElementById("collaborator4");
    // .setAttribute("style", "display: none");

    console.log(document.getElementById("collaborator4"));
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
          <span className="iconBlue" style={{ fontSize: "17px" }}>
            <BsFillGrid3X2GapFill />
          </span>
        </Col>
        <Col className="gutter-row " span={3} style={{ textAlign: "left" }}>
          <Link to="/organigrama/teamsv">
            <BsListUl
              className="dividerLeft iconGray"
              style={{ paddingLeft: "5px", fontSize: "22px" }}
            />
          </Link>
        </Col>
        <Col className="gutter-row" span={6}>
          <Search
            size="small"
            id="filter"
            onChange={filterTeams}
            placeholder="Buscar puesto"
          />
        </Col>
        <Col span={9}></Col>
        <Col className="gutter-row" span={4}>
          <Button
            className="primaryB"
            onClick={() => {
              setCreateTeamModal(true);
              setCollaboratorsList([]);
              form.resetFields();
              setEditionMode(false);
            }}
            style={{
              textAlign: "left",
              marginRight: "20px",
              marginTop: "-5px",
            }}
            icon={<IoMdAdd className="iconAjust2" />}
          >
            {" "}
            <span className="textAjust4">Nuevo Equipo</span>
          </Button>
        </Col>
      </Row>

      <Row id="teamList" style={{ marginTop: "10px", paddingLeft: "15px" }}>
        <Simplecard setTeamList={setTeamList} teamList={teamList} edit={edit} />
      </Row>
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
