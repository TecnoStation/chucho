import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LayoutPrimary from "./Layouts/LayoutPrimary";
import LayoutSecondary from "./Layouts/LayoutSecondary";
import LayoutSecondaryCard from "./Layouts/LayoutSecondaryCard";
import LayoutSecondaryCardBack from "./Layouts/LayoutSecondaryCardBack";
import LayoutSecondaryCardBackSmall from "./Layouts/LayoutSecondaryCardBackSmall";
import LayoutSecondaryCardGlass from "./Layouts/LayoutSecondaryCardGlass";
import LayoutSecondaryCardWhite from "./Layouts/LayoutSecondaryCardWhite";
import LayoutSecondaryCardBackGlass from "./Layouts/LayoutSecondaryCardBackGlass";
import LayoutSecondaryMenu from "./Layouts/LayoutSecondaryMenu";
import RecoveryPassword from "./Login/RecoveryPassword";
import NewPassword from "./Login/NewPassword";
import Organigramstarted from "./Organigram/Organigramstarted";
import Organigram from "./Organigram/Organigram";
import OrganigramList from "./Organigram/OrganigramList";
import OrganigramMain from "./Organigram/OrganigramMain";
import Eraser from "./Organigram/Eraser";
import Login from "./Login/Login";
import Mybusiness from "./Mybusiness/Mybusiness";
import MybusinessEdit from "./Mybusiness/MybusinessEdit";
import AreasAndPositions from "./AreasAndPositions/AreasAndPosition";
import AreasAndPositionsJob from "./AreasAndPositions/AreasAndPositionsAddJob";
import AreasAndPositionsPerfil from "./AreasAndPositions/Perfil";
import AreasAndPositionsMassiveE from "./AreasAndPositions/AreasAndPositionsMassiveE";
import AreasAndPositionsMassiveP from "./AreasAndPositions/AreasAndPositionsMassiveP";
import AreasAndPositionsMassiveC from "./AreasAndPositions/AreasAndPositionsMassiveC";
import AreasAndPositionsMassiveGeneral from "./AreasAndPositions/AreasAndPositionsMassiveGeneral";
import DetailError from "./AreasAndPositions/DetailError";
import DetailSuccess from "./AreasAndPositions/DetailSuccess";
import Nofound from "./Nofound";
import Messages from "../pages/Messages/Messages";
import Teams from "./Teams/Teams";
import Teamv from "./Teams/Teamv";
import TeamStarted from "./Teams/TeamStarted";
import Collaborator from "./AreasAndPositions/Collaborator";
import { useTranslation } from "react-i18next";
import Indicators from "./Indicators/Indicators";

export default function Home() {
  const [t, i18n] = useTranslation("global");
  return (
    <Router>
      <Switch>
        <LayoutSecondaryMenu
          exact
          path={"/" + t("routes.indicators") + "/" + t("path_indicator")}
          component={Indicators}
        />

        <LayoutSecondary
          exact
          path={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.mybusiness-edit")
          }
          title="Mi Empresa"
          component={MybusinessEdit}
        />
        <LayoutSecondary
          exact
          path={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions")
          }
          title="Áreas y puestos"
          component={AreasAndPositions}
        />
        <LayoutSecondary
          exact
          path={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.organigramstarted")
          }
          title="Organigrama"
          component={Organigramstarted}
        />
        <LayoutSecondaryCardGlass
          exact
          path={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.organigram")
          }
          title="Organigrama"
          component={Organigram}
        />
        <LayoutSecondaryCardGlass
          exact
          path={
            "/" + t("routes.organigram") + "/" + t("paths_organigram.eraser")
          }
          title="Organigrama"
          component={Eraser}
        />
        <LayoutSecondaryCardGlass
          exact
          path={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.organigrammain")
          }
          title="Organigrama"
          component={OrganigramMain}
        />
        <LayoutSecondaryCardWhite
          exact
          path={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.organigramlist")
          }
          title="Organigrama"
          component={OrganigramList}
        />
        <LayoutSecondaryCard
          exact
          path={
            "/" + t("routes.organigram") + "/" + t("paths_organigram.teams")
          }
          title="Equipos"
          component={Teams}
        />
        <LayoutSecondaryCard
          exact
          path={
            "/" + t("routes.organigram") + "/" + t("paths_organigram.teamsv")
          }
          title="Equipos"
          component={Teamv}
        />
        <LayoutSecondaryCard
          exact
          path={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.mybusiness")
          }
          title="Mi Empresa"
          component={Mybusiness}
        />
        <LayoutSecondaryCard
          exact
          path={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.teamstarted")
          }
          title="Equipos"
          component={TeamStarted}
        />
        <LayoutSecondaryCard
          exact
          path={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-collaborator")
          }
          title="Colaborador"
          component={Collaborator}
        />
        <LayoutSecondaryCardBack
          exact
          path={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-general")
          }
          title="Áreas y puestos"
          component={AreasAndPositionsMassiveGeneral}
        />
        <LayoutSecondaryCardBackGlass
          exact
          path={"/" + t("routes.messages")}
          title="Bandeja de entrada"
          component={Messages}
        />
        <LayoutSecondaryCardBack
          exact
          path={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-addjob")
          }
          title="Áreas y puestos"
          component={AreasAndPositionsJob}
        />
        <LayoutSecondaryCardBack
          exact
          path={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-detailerror")
          }
          title="Áreas y puestos"
          component={DetailError}
        />
        <LayoutSecondaryCardBack
          exact
          path={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-detailsuccess")
          }
          title="Áreas y puestos"
          component={DetailSuccess}
        />
        <LayoutSecondaryCardBack
          exact
          path={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-massivee")
          }
          title="Áreas y puestos"
          component={AreasAndPositionsMassiveE}
        />
        <LayoutSecondaryCardBack
          exact
          path={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-massivep")
          }
          title="Áreas y puestos"
          component={AreasAndPositionsMassiveP}
        />
        <LayoutSecondaryCardBack
          exact
          path={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-massivec")
          }
          title="Áreas y puestos"
          component={AreasAndPositionsMassiveC}
        />
        <LayoutSecondaryCardBackSmall
          exact
          path={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-perfil")
          }
          title="Perfil"
          component={AreasAndPositionsPerfil}
        />
        <LayoutPrimary
          exact
          path={"/" + t("routes.recoverypassword")}
          component={RecoveryPassword}
        />
        <LayoutPrimary
          exact
          path={"/" + t("routes.newpassword")}
          component={NewPassword}
        />
        <LayoutPrimary exact path={"/" + t("routes.login")} component={Login} />
        <LayoutPrimary exact path="/" component={Login} />
        <LayoutPrimary path="*" component={Nofound} />
      </Switch>
    </Router>
  );
}
