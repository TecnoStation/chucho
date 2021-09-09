import React from "react";
import { Col, Dropdown, Menu, Row } from "antd";
import More from "../../assets/img/icons/more_vert-24px.svg";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Branchs({ branchs, edit, deleteBranch }) {
  const [t, i18n] = useTranslation("global");
  return branchs.map((branch, index) => (
    
    <Row
      key={uuid()}
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      className="rowbranch"
    >
      <Col className="gutter-row namesbranch" id="namesbranch" span={8}>
        <span>{branch.name}</span>
      </Col>
      <Col
        className="gutter-row directionbranch"
        id="directionbranch"
        span={12}
      >
        <span>{branch.direction}</span>
      </Col>

      <Col className="gutter-row" span={4}>
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
