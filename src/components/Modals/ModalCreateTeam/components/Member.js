import React from "react";
import ReactDOM from "react-dom";
import { Col, Row, Select, Form, Checkbox, Input } from "antd";
import Avatar from "../../../../assets/img/avatar.png";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import SelectDinamic from "../../../SelectDinamic/SelectDinamic";
import { useTranslation } from "react-i18next";

const { Option } = Select;

export default function Member({
  collaboratorsList,
  setCollaboratorsList,
  inputType,
  dataSelects,
}) {
  const [t, i18n] = useTranslation("global");
  const leader = (e, id) => {
    collaboratorsList[id].leader = e.target.checked;
  };

  return collaboratorsList.map((collaborator, item) => (
    <Row
      key={item}
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      style={{
        textAlign: "left",
        marginTop: "10px",
        marginLeft: "10px",
        width: "100%",
      }}
    >
      <Col key={collaborator.id} className="gutter-row" span={8}>
        <Row>
          <Col style={{ textAlign: "left" }} span={5}>
            <p>
              <img alt="ico" width="45" src={Avatar} />
            </p>
          </Col>
          <Col style={{ paddingLeft: "5px" }} span={19}>
            <span>
              <b>{collaborator.name}</b>
            </span>
            <br />
            <span>Programador JR</span>
          </Col>
        </Row>
      </Col>
      <Col
        className="gutter-row"
        style={{ textAlign: "right", paddingLeft: "45px" }}
        span={2}
      >
        <Form.Item name={"leader" + item}>
          <Checkbox
            defaultChecked={collaborator.leader}
            onChange={(e) => {
              leader(e, item);
            }}
          />
        </Form.Item>
      </Col>
      <Col className="gutter-row" span={10}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={4}></Col>
          <Col className="gutter-row" span={20}>
            {inputType ? (
              <Form.Item
                name={"rol" + item}
                key={1}
                placeholder="Product Owner"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <SelectDinamic
                  placeholder={t(
                    "organigram.teams-modal.placeholder-imput-optiona"
                  )}
                  data={dataSelects}
                />
              </Form.Item>
            ) : (
              <Form.Item
                name={"rol" + item}
                key={1}
                placeholder="Product Owner"
                rules={[
                  {
                    required: true,
                    message: "*Campo requerido",
                  },
                ]}
              >
                <Input placeholder="Product Owner" />
              </Form.Item>
            )}
          </Col>
        </Row>
      </Col>
      <Col className="gutter-row" style={{ textAlign: "center" }} span={3}>
        <Link
          to="#"
          className="link"
          onClick={() => {
            const arrayFilter = collaboratorsList.filter(
              (item) => item.id !== collaborator.id
            );
            setCollaboratorsList(arrayFilter);
            console.log(collaborator.id);
            if (
              document.getElementById("collaborator" + collaborator.id) !== null
            ) {
              document
                .getElementById("collaborator" + collaborator.id)
                .setAttribute("style", "display: ");

              const rootElement = document.getElementById(
                "col" + collaborator.id
              );
              const element = (
                <>
                  <span id={"text" + collaborator.id}>{collaborator.name}</span>
                  <span id={"avatar" + collaborator.id}>
                    <UserOutlined />
                  </span>
                </>
              );
              ReactDOM.render(element, rootElement);
              document.getElementById("text" + collaborator.id).innerHTML =
                collaborator.name;
            }
          }}
        >
          Eliminar
        </Link>
      </Col>
    </Row>
  ));
}
