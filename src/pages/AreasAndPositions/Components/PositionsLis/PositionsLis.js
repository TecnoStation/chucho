import { Col, Row } from "antd";
import React from "react";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";

function PositionsLis({ Positions, SetPositions }) {
  return (
    <>
      {Positions.map((position, index) => (
        <Row
          key={index}
          className="dividerBottom"
          style={{ paddingBottom: "5px", marginTop: "10px" }}
        >
          <Col span={14} style={{ marginLeft: "30px" }}>
            <span>{position.name}</span>{" "}
            <span id={"item" + index} style={{ display: "none" }}>
              (<span id={"number" + index}>1</span>)
            </span>
          </Col>
          <Col span={8} className="iconGreen" style={{ fontSize: "18px" }}>
            <BiPlusCircle
              className="iconsize"
              onClick={() => {
                let numberPositions = document.getElementById("item" + index);
                let more = document.getElementById("number" + index);
                let fact = parseInt(more.innerHTML);
                let newMore = fact + 1;
                if (newMore === 2) {
                  numberPositions.setAttribute("style", "display: ");
                }
                more.innerHTML = newMore;
              }}
              style={{ marginRight: "20px" }}
            />{" "}
            <BiMinusCircle
              onClick={() => {
                let numberPositions = document.getElementById("item" + index);
                let more = document.getElementById("number" + index);
                let fact = parseInt(more.innerHTML);
                let newMore = fact - 1;
                if (newMore === 1) {
                  numberPositions.setAttribute("style", "display: none");
                } else if (newMore === 0) {
                  const arrayFilter = Positions.filter(
                    (item) => item.idPosition !== position.idPosition
                  );
                  SetPositions(arrayFilter);
                }
                more.innerHTML = newMore;
              }}
              className="iconsize"
            />
          </Col>
        </Row>
      ))}
    </>
  );
}

export default PositionsLis;
