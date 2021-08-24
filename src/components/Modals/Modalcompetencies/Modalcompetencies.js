import React from "react";
import { Form, Input, Button, Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
//import { useTranslation } from "react-i18next";
import CompetenciesList from "./components/CompetenciesList";

export default function Modalcompetencies({
  modalComp,
  setModalComp,
  competenciesList,
  setCompetencies,
  competencies,
  setCompetenciesList,
  setCompetenceName,
  competenceName,
  setSlider,
  slider,
  setEditionModeSlider,
  editionModeSlider,
  component,
}) {
  //const [t, i18n] = useTranslation("global");
  console.log("componet: " + component);
  return (
    <>
      <Modal
        className="middleModal"
        title="Agregar competencias institucionales"
        visible={modalComp}
        closable={false}
        footer={
          <Button
            onClick={() => {
              setModalComp(false);
            }}
          >
            Cancelar
          </Button>
        }
      >
        <p>
          Agrega las competencias institucionales que deben tener todos los
          colaboradores de tu organización, puedes elegir hasta un máximo de
          tres.
        </p>
        <Form name="seacrhCompetence" layout="vertical">
          <Form.Item name="empresa">
            <Input
              addonAfter={<SearchOutlined />}
              placeholder="Buscar Competencia"
            />
          </Form.Item>
        </Form>
        <div className="tagList">
          <CompetenciesList
            component={component}
            setModalComp={setModalComp}
            competenciesList={competenciesList}
            setCompetencies={setCompetencies}
            competencies={competencies}
            setCompetenciesList={setCompetenciesList}
            setCompetenceName={setCompetenceName}
            competenceName={competenceName}
            setSlider={setSlider}
            slider={slider}
            setEditionModeSlider={setEditionModeSlider}
            editionModeSlider={editionModeSlider}
          />
        </div>
      </Modal>
    </>
  );
}
