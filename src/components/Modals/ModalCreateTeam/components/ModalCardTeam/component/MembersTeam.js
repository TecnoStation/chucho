import React from "react";
import { Col, Form, Row, Checkbox } from "antd";
import Avatar from "../../../../../../assets/img/avatar.png";

function MembersTeam({ collaborators }) {
  console.log(collaborators);
  return (
    <>
      {collaborators.map((collaborator, index) =>
        collaborator.leader ? (
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            <Col className="gutter-row" span={11}>
              <Row>
                <Col span={6}>
                  <p>
                    <img alt="ico" width="45" src={Avatar} />
                  </p>
                </Col>
                <Col style={{ textAlign: "left" }} span={18}>
                  <span className="primaryText">
                    <b>{collaborator.name}</b>
                  </span>
                  <br />
                  <span className="primaryText">Programador JR</span>
                </Col>
              </Row>
            </Col>
            <Col className="gutter-row" span={4}>
              <Form.Item style={{ textAlign: "center" }}>
                <Checkbox defaultChecked disabled />
              </Form.Item>
            </Col>

            <Col
              style={{
                textAlign: "center",
                paddingLeft: "40px",
              }}
              className="gutter-row"
              span={8}
            >
              <p className="iconSureGray">{collaborator.rol}</p>
            </Col>
          </Row>
        ) : (
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            <Col className="gutter-row" span={11}>
              <Row>
                <Col span={6}>
                  <p>
                    <img alt="ico" width="45" src={Avatar} />
                  </p>
                </Col>
                <Col style={{ textAlign: "left" }} span={18}>
                  <span>
                    <b className="primaryText">{collaborator.name}</b>
                  </span>
                  <br />
                  <span className="primaryText">Programador JR</span>
                </Col>
              </Row>
            </Col>
            <Col className="gutter-row" span={4}></Col>

            <Col
              style={{
                textAlign: "center",
                paddingLeft: "40px",
              }}
              className="gutter-row"
              span={8}
            >
              <p className="iconSureGray">{collaborator.rol}</p>
            </Col>
          </Row>
        )
      )}
    </>
  );
}

export default MembersTeam;
