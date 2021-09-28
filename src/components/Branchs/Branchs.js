import React from "react";
import { Col, Dropdown, Menu, Row } from "antd";
import More from "../../assets/img/icons/more_vert-24px.svg";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Branchs({ branchs, edit, deleteBranch }) {
  const [t, i18n] = useTranslation("global");
  return branchs.map((branch, index) => (
    <Row key={uuid()} className="rowbranch">
      <Col className="namesbranch" id="namesbranch" span={8}>
        <span className="primaryText">{branch.name}</span>
      </Col>
      <Col className="directionbranch" id="directionbranch" span={14}>
        <span>{branch.direction}</span>
      </Col>

      <Col style={{ textAlign: "right" }} span={2}>
        <Dropdown
          overlay={
            <Menu
              style={{
                position: "absolute",
                marginLeft: "-90px",
                marginTop: "-20px",
              }}
            >
              <Menu.Item key={uuid()}>
                <Link
                  to="#"
                  onClick={() => {
                    edit(branch, index);
                  }}
                >
                  {t("organigram.add-branch-modal.menu.edit-branch")}
                </Link>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key={uuid()}>
                <Link to="#" onClick={() => deleteBranch(branch.idBranch)}>
                  {t("organigram.add-branch-modal.menu.remove-branch")}
                </Link>
              </Menu.Item>
            </Menu>
          }
          trigger={["click"]}
        >
          <Link
            to="#"
            className="ant-dropdown-link"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <img alt="logo" src={More} width="25" height="25" />
          </Link>
        </Dropdown>
      </Col>
    </Row>
  ));
}
