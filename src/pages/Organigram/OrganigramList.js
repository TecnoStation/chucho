import React, { useState } from "react";
import MaterialIcon from "material-icons-react";
import { Col, Input, Row, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import TreeDrop from "./components/TreeDrop/TreeDrop";
import { Link } from "react-router-dom";
import ModalErasersList from "../../components/Modals/ModalErasersList/ModalErasersList";
import { useTranslation } from "react-i18next";
import { FaUsers } from "react-icons/fa";
import { IoBusinessSharp } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import { AiOutlineHistory } from "react-icons/ai";

function OrganigramList() {
  const [t, i18n] = useTranslation("global");
  const menu = (
    <>
      <div className="menuToltip">
        <Link to="/areasandpositions-general">
          <span>{t("organigram.organigramlist.menu-1.load-massive")}</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link to="/areasandpositions-general">
          <span>{t("organigram.organigramlist.menu-1.areas-positions")}</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link to="/areasandpositions-general">
          <span>{t("organigram.organigramlist.menu-1.profile-positions")}</span>
        </Link>
      </div>
      <div className="menuToltip">
        <Link to="/areasandpositions-general">
          <span>{t("organigram.organigramlist.menu-1.Collaborators")}</span>
        </Link>
      </div>
    </>
  );

  const [historial, setHistorial] = useState(false);

  return (
    <>
      <Row style={{ textAlign: "center" }}>
        <Col style={{ marginTop: "5px" }} span={1}>
          <MaterialIcon icon="filter_alt" />
        </Col>
        <Col
          style={{ marginTop: "5px", height: "25px" }}
          className="dividerLeft"
          span={1}
        >
          <Tooltip title={t("organigram.organigramlist.menu-1.create-team")} placement="bottom" color="#2cccd3">
            <Link to="/organigrama/teams">
              <FaUsers className="iconGray iconsize2" />
            </Link>
          </Tooltip>
        </Col>
        <Col
          style={{ marginTop: "5px", height: "25px" }}
          className="dividerLeft"
          span={1}
        >
          <Tooltip title={t("organigram.organigramlist.menu-1.me-business")} placement="bottom" color="#2cccd3">
            <Link to="/organigrama/mybisiness">
              <IoBusinessSharp className="iconGray iconsize2" />
            </Link>
          </Tooltip>
        </Col>
        <Col
          style={{ marginTop: "5px", height: "25px" }}
          className="dividerLeft"
          span={1}
        >
          <Tooltip title={menu} placement="bottom" color="#2cccd3">
            <Link to="#">
              <FiUpload className="iconGray iconsize2" />
            </Link>
          </Tooltip>
        </Col>
        <Col
          style={{
            marginTop: "5px",
            height: "25px",
            paddingLeft: "8px",
            textAlign: "left",
          }}
          className="dividerLeft"
          span={15}
        >
          <Tooltip
            title={t("organigram.organigramlist.menu-1.record-changes")}
            placement="bottom"
            color="#2cccd3"
          >
            <Link
              to="#"
              onClick={() => {
                setHistorial(true);
              }}
            >
              <AiOutlineHistory className="iconGray iconsize2" />
            </Link>
          </Tooltip>
        </Col>
        <Col span={5}>
          <Input addonAfter={<SearchOutlined />} placeholder={t("organigram.organigramlist.search-position-placeholder")} />
        </Col>
      </Row>
      <div id="organigramList">
        <br />
        <TreeDrop name={"Panchita Lopez"} />
        <br />
        <TreeDrop name={"Juan Camaney"} />
      </div>

      <ModalErasersList historial={historial} setHistorial={setHistorial} />
    </>
  );
}

export default OrganigramList;
