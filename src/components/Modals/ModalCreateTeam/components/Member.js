import React from "react";
import ReactDOM from "react-dom";
import { Col, Row, Select, Form, Checkbox, Input } from "antd";
import Avatar from "../../../../assets/img/avatar.png";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const { Option } = Select;

export default function Member({
  collaboratorsList,
  setCollaboratorsList,
  inputType,
}) {
  const leader = (e, id) => {
    collaboratorsList[id].leader = e.target.checked;
  };
  console.log(collaboratorsList);
  return collaboratorsList.map((collaborator, item) => (
    <Row
      key={item}
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      style={{ textAlign: "left", marginTop: "10px", marginLeft: "10px" }}
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
        style={{ textAlign: "right", marginLeft: "10px" }}
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
      <Col className="gutter-row" span={8}>
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
                <Select
                  defaultValue={collaborator.rol}
                  placeholder="Product Owner"
                >
                  <Option value="SCRUM1">SCRUM1</Option>
                  <Option value="SCRUM2">SCRUM2</Option>
                  <Option value="SCRUM3">SCRUM3</Option>
                </Select>
              </Form.Item>
            ) : (
              <Form.Item
                name={"rol" + item}
                defaultValue={collaborator.rol}
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
      <Col className="gutter-row" style={{ textAlign: "center" }} span={5}>
        <Link
          to="#"
          className="link"
          onClick={() => {
            const arrayFilter = collaboratorsList.filter(
              (item) => item.id !== collaborator.id
            );
            setCollaboratorsList(arrayFilter);
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
          }}
          href="#"
        >
          Eliminar
        </Link>
      </Col>
    </Row>
  ));
}
