import React from "react";
import {
  Button,
  Col,
  Input,
  Row,
  Form,
  Modal,
  Select,
  AutoComplete,
} from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { v4 as uuid } from "uuid";
import Member from "./components/Member";

const { Option } = Select;

function ModalCreateTeam({
  collaboratorsList,
  setCollaboratorsList,
  inputType,
  setInputType,
  typeTeam,
  setTypeTeam,
  createTeamModal,
  setCreateTeamModal,
  teamList,
  setTeamList,
  editionMode,
  setEditionMode,
  form,
  item,
}) {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  //----------------- Create And Render Collaborators ------------------------------------------

  const [temp, setTemp] = useState("");

  const addPerson = (name, id, leader, rol) => {
    document.getElementById("text" + id).innerHTML = "";

    document
      .getElementById("collaborator" + id)
      .setAttribute("style", "display: none");

    setCollaboratorsList([
      ...collaboratorsList,
      {
        name: name,
        id: id,
        leader: leader,
        rol: rol,
      },
    ]);
    form.setFieldsValue({ addCollaborators: "" });
  };

  const onchange = (e) => {
    if (temp === 1) {
      form.setFieldsValue({ addCollaborators: "" });
      setTemp(0);
    }
  };

  const renderTitle = (title) => <span key={uuid()}>{title}</span>;
  const renderItem = (title, id, leader, rol) => ({
    value: title,
    id: "collaborator" + id,
    className: "row",
    label: (
      <div
        className="col"
        id={"col" + id}
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        onClick={() => {
          addPerson(title, id, leader, rol);
        }}
      >
        <span id={"text" + id}>{title}</span>
        <span id={"avatar" + id}>
          <UserOutlined />
        </span>
      </div>
    ),
  });

  const Collaborators = [
    {
      label: renderTitle("Lista de colaboradores"),
      options: [
        renderItem("Panchita Lopez", 1, false, ""),
        renderItem("Juan Charrasquiado", 2, false, ""),
        renderItem("Lorenzo Lamas", 3, false, ""),
        renderItem("Tabique", 4, false, ""),
        renderItem("Pepe Pecas", 5, false, ""),
        renderItem("Juan Camaney", 6, false, ""),
        renderItem("Pepe Grillo", 7, false, ""),
        renderItem("Pinocho", 8, false, ""),
      ],
    },
  ];

  //----------------- Create And Render Collaborators ------------------------------------------

  //----------------- FrameWork change ------------------------------------------

  const showInput = (value) => {
    if (value === "0") {
      setTypeTeam("hide");
      setInputType(false);
    } else {
      setTypeTeam("show");
      setInputType(true);
    }
  };
  //----------------- End FrameWork change ------------------------------------------

  //----------------- Filter collaboratos ------------------------------------------
  const filter = () => {
    const input = document.getElementById("filter");
    const filter = input.value.toUpperCase();
    const row = document.getElementsByClassName("row");
    let i;
    for (i = 0; i < row.length; i++) {
      let col = row[i].getElementsByClassName("col")[0];
      if (col) {
        let txtValue = col.textContent || col.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          if (txtValue !== "") {
            row[i].style.display = "";
          }
        } else {
          row[i].style.display = "none";
        }
      }
    }
  };

  //----------------- End Filter collaboratos ------------------------------------------

  //----------------- Create Teams ------------------------------------------
  const createTeam = (values) => {
    collaboratorsList.forEach((collaborator, index) => {
      collaborator.rol = values["rol" + index];
    });

    let d = new Date();
    let months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    setTeamList([
      ...teamList,
      {
        idTeam: uuid(),
        type: values["type"],
        name: values["teamName"],
        modality: values["Modality"],
        frameWork: values["frameWork"],
        collaborators: collaboratorsList,
        date: d.getDate() + "-" + months[d.getMonth()] + "-" + d.getFullYear(),
      },
    ]);
    setCollaboratorsList([]);
    setCreateTeamModal(false);
    sessionStorage.setItem("teamList", JSON.stringify(teamList));
    history.push({ pathname: "/organigrama/teams" });
  };

  //----------------- End Create Teams ------------------------------------------

  //----------------- Edit Teams ------------------------------------------
  const editTeam = (values) => {
    collaboratorsList.forEach((collaborator, index) => {
      if (values["rol" + index] !== undefined) {
        collaborator.rol = values["rol" + index];
      }
    });

    teamList[item].name = values["teamName"];
    teamList[item].type = values["type"];
    teamList[item].modality = values["Modality"];
    teamList[item].frameWork = values["frameWork"];
    teamList[item].collaborators = collaboratorsList;
    setCollaboratorsList([]);
    form.resetFields();
    setEditionMode(false);
    setTypeTeam("hide");
    setInputType(false);
    setCreateTeamModal(false);
    setTeamList(teamList);
    sessionStorage.setItem("teamList", JSON.stringify(teamList));
  };

  //----------------- End Edit Teams ------------------------------------------

  return (
    <>
      <Modal
        title={editionMode ? "Editar Equipo" : "Crear Equipo"}
        className="largeModal"
        visible={createTeamModal}
        onCancel={() => {
          setCreateTeamModal(false);
        }}
        footer={false}
      >
        <Form
          name="form"
          form={form}
          initialValues={{
            teamName: "",
            addCollaborators: "",
          }}
          onFinish={editionMode ? editTeam : createTeam}
          layout="vertical"
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                style={{ textAlign: "left" }}
                name="teamName"
                label="Nombre del equipo"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Input
                  type="text"
                  placeholder="Aqui puedes asignar el nombre de tu equipo"
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item
                style={{ textAlign: "left" }}
                name="type"
                label="Tipo de equipo"
                tooltip="info"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Select
                  placeholder="Selecciona una opción"
                  onChange={showInput}
                >
                  <Option value="0">Personalizado</Option>
                  <Option value="1">Modo Opertaivo Agile</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <Form.Item name="addCollaborators" label="Agregar colaboradores">
                <AutoComplete
                  id="filter"
                  dropdownClassName="certain-category-search-dropdown"
                  dropdownMatchSelectWidth={300}
                  options={Collaborators}
                  onChange={onchange}
                  onKeyUp={filter}
                >
                  <Input.Search placeholder="Buscar colaboradores" />
                </AutoComplete>
              </Form.Item>
            </Col>
            <Col className="gutter-row" style={{ textAlign: "left" }} span={12}>
              <Form.Item
                name="Modality"
                label="Modalidad"
                tooltip="info"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Select placeholder="Selecciona una opción">
                  <Option value="jack">Funcional</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row className={typeTeam}>
            <Col span={12}></Col>
            <Col style={{ paddingLeft: "20px", textAlign: "left" }} span={12}>
              <Form.Item
                name="frameWork"
                label="Marco de trabajo"
                tooltip="info"
              >
                <Select placeholder="Selecciona una opción">
                  <Option value="SCRUM">SCRUM</Option>
                  <Option value="SCRUM2">SCRUM2</Option>
                  <Option value="SCRUM3">SCRUM3</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            <Col className="gutter-row" span={8}>
              Miembros del equipo
            </Col>
            <Col className="gutter-row" span={4}>
              Lider
            </Col>
            <Col className="gutter-row" span={6}>
              Rol en el equipo
            </Col>
            <Col className="gutter-row" span={6}>
              Acciones
            </Col>
          </Row>
          <Member
            collaboratorsList={collaboratorsList}
            setCollaboratorsList={setCollaboratorsList}
            inputType={inputType}
          />

          <Row style={{ marginTop: "30px" }}>
            <Col span={24}>
              <span style={{ marginRight: "120px" }}>
                <Link to="#">Aquí</Link> puedes ver buenas prácticas en equipos
                Agile
              </span>
              <Button
                style={{ marginRight: "20px", width: "100px" }}
                className="secondary"
                onClick={() => {
                  setCreateTeamModal(false);
                }}
              >
                Cancelar
              </Button>
              {editionMode ? (
                <Button
                  htmlType="submit"
                  style={{ marginRight: "20px", width: "100px" }}
                  className="primary"
                >
                  Editar
                </Button>
              ) : (
                <Button
                  htmlType="submit"
                  style={{ marginRight: "20px", width: "100px" }}
                  className="primary"
                >
                  Crear
                </Button>
              )}
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

export default ModalCreateTeam;
