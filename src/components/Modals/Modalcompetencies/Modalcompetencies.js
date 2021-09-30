import React from "react";
import { Form, Input, Button, Modal } from "antd";
import { useTranslation } from "react-i18next";
import CompetenciesList from "./components/CompetenciesList";
import { useForm } from "antd/lib/form/Form";
const { Search } = Input;

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
  const [t, i18n] = useTranslation("global");

  //----------------- Filter Competencies ------------------------------------------
  const filterCompetencies = () => {
    const input = document.getElementById("filterComp");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("tagList");
    const row = div.getElementsByClassName("rowC");
    let i;
    for (i = 0; i < row.length; i++) {
      let col = row[i].getElementsByClassName("tag")[0];
      if (col) {
        let txtValue = col.textContent || col.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          row[i].style.display = "";
        } else {
          row[i].style.display = "none";
        }
      }
    }
  };
  const [form] = useForm();
  //----------------- End Filter Competencies ------------------------------------------

  return (
    <>
      <Modal
        className="competenciesModal"
        title={t("organigram.add-competencies-modal.title")}
        visible={modalComp}
        closable={false}
        footer={
          <Button
            onClick={() => {
              setModalComp(false);
            }}
          >
            {t("organigram.add-competencies-modal.btn-cancel")}
          </Button>
        }
      >
        <p className="secondaryText" style={{ textAlign: "justify" }}>
        {t("organigram.add-competencies-modal.text")}
        </p>
        <Form form={form} name="seacrhCompetence" layout="vertical">
          <Form.Item name="competence">
            <Search
              id="filterComp"
              onChange={filterCompetencies}
              placeholder={t("organigram.add-competencies-modal.search-competencies-placeholder")}
            />
          </Form.Item>
        </Form>
        <div id="tagList" className="tagList">
          <CompetenciesList
            form={form}
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
