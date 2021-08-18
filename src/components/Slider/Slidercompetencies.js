import React from "react";
import { Button, Col, InputNumber, Row, Slider } from "antd";
import { useTranslation } from "react-i18next";

export default function Slidercompetencies(props) {
  const [t, i18n] = useTranslation("global");
  console.log(props);
  return (
    <>
      <div className="cefective" id="cefective" style={{ display: "none" }}>
        <Row>
          <Col
            style={{ textAlign: "left" }}
            className="dividerBottom"
            span={24}
          >
            <h4 id="titulo">{props.Competence}</h4>
          </Col>
          <Col style={{ textAlign: "left" }} span={24}>
            <br />
            <p>
              Los colaboradores que tienen un alto dominio de esta competencia,
              por lo general tienen la capacidad de:
            </p>
          </Col>
          <Col style={{ textAlign: "left" }} span={24}>
            <ul>
              <li>Escuchar y dispuesto a hacerlo.</li>
              <li>Entiende los mensajes verbales.</li>
              <li>Comprende los aspectos no verbales de la comunicación.</li>
              <li>Expresa sus ideas con claridad y coherencia.</li>
              <li>Genera el impacto deseado en sus interlocutores.</li>
            </ul>
          </Col>
          <Col span={24} style={{ textAlign: "left" }}>
            Aquí puedes consultar el significado de cada nivel
          </Col>
          <Col span={24}>
            <br />
            <span>
              <b>Dominio de competencia</b>
            </span>
            <br />
            <InputNumber
              id="nivel"
              className="tag-cefective"
              min={0}
              max={4}
              value={props.slider / 25}
              onChange={props.onChangeInput}
            />
            <input type="hidden" id="competencia" value=""></input>
            <span style={{ display: "none" }} id="idcompe"></span>
            <br />
            <span>
              Competente: <b>2.6 - 3.4</b>
            </span>
          </Col>
          <Col span={4}></Col>
          <Col span={16} id="colSlider">
            <Slider
              id="Slider"
              marks={props.marks}
              onChange={props.onChange}
              step={null}
              value={props.slider}
              defaultValue={props.slider}
            />
          </Col>
          <Col span={4}></Col>
          <Col span={24} style={{ textAlign: "right" }}>
            <br />
            <Button
              onClick={props.closecefective}
              className="secondary"
              style={{ marginRight: "15px" }}
            >
              Cancelar
            </Button>
            <Button id="save" onClick={props.closeInfo} className="primary">
              Guardar
            </Button>
            <Button
              id="edit"
              style={{ display: "none" }}
              onClick={props.editInfo}
              className="primary"
            >
              Editar
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}
