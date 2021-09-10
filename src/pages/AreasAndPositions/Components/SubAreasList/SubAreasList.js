import React, { useState } from "react";
import { Col, Row } from "antd";

import { IoMdSquare, IoMdTrash } from "react-icons/io";
import { PlusCircleOutlined } from "@ant-design/icons";
import { RiPencilFill } from "react-icons/ri";
import { BiGridVertical } from "react-icons/bi";
import ModalMoveArea from "../../../../components/Modals/ModalMoveArea/ModalMoveArea";

function SubAreasList2({
  subArea,
  setModalMove,
  setSubArea,
  subAreas,
  setPassword,
  setSubAreas,
  form,
  setEditionModeSub,
  setinputSubArea,
  showInput,
  index,
  setAreaPosition,
  item,
  setviewPositions,
}) {
  const [modalMoveSub, setModalMoveSub] = useState(false);
  const editS = (e, subArea) => {
    e.preventDefault();
    setEditionModeSub(true);
    setSubArea(subArea);
    form.setFieldsValue({
      ["area" + index]: subArea.subareaName,
    });

    showInput(index);
    setinputSubArea("show");
  };

  const [colorIcon, setColorIcon] = useState("iconGray");

  return (
    <>
      <Row
        onMouseOver={() => {
          document
            .getElementById("IoMdSquareS" + item)
            .setAttribute("style", "color: #2cccd3");
        }}
        onMouseOut={() => {
          document
            .getElementById("IoMdSquareS" + item)
            .setAttribute("style", "color: #5e6d88");
        }}
        style={{
          marginTop: "20px",
          paddingLeft: "20px",
          textAlign: "right",
        }}
      >
        <Col span={24}>
          <Row className="subareasdiv">
            <Col
              span={18}
              onClick={() => {
                setAreaPosition(subArea.subareaName);
                setviewPositions("showBlock");
              }}
              style={{ textAlign: "left" }}
            >
              <IoMdSquare id={"IoMdSquareS" + item} className={colorIcon} />{" "}
              {subArea.subareaName}
            </Col>
            <Col
              style={{
                textAlign: "right",
                paddingRight: "10px",
              }}
              span={2}
            >
              <PlusCircleOutlined className="iconGreen iconsize" />
            </Col>
            <Col
              style={{
                textAlign: "right",
                paddingRight: "25px",
                fontSize: "14px",
              }}
              span={1}
            >
              <RiPencilFill
                onClick={(e) => {
                  editS(e, subArea);
                }}
                className="iconGreen iconsize"
              />
            </Col>
            <Col
              style={{
                textAlign: "right",
                paddingRight: "25px",
              }}
              span={1}
            >
              <BiGridVertical className="iconGreen iconsize" />
            </Col>
            <Col
              style={{
                textAlign: "right",
                paddingRight: "5px",
              }}
              span={1}
            >
              <IoMdTrash
                onClick={() => {
                  setModalMoveSub({
                    visible: true,
                    idSubArea: subArea.idSubArea,
                    mode: 1,
                    subAreas: subAreas,
                    modalTitle:
                      "¿Qué deseas hacer con los colaboradores que pertenecen a esta subárea?",
                  });
                }}
                className="iconGreen iconsize"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <ModalMoveArea
        modalMove={modalMoveSub}
        setModalMove={setModalMoveSub}
        setSubAreas={setSubAreas}
        setPassword={setPassword}
      />
    </>
  );
}

export default SubAreasList2;
