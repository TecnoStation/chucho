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
import RecoveryPassword from "./Login/RecoveryPassword";
import Organigramstarted from "./Organigram/Organigramstarted";
import Organigram from "./Organigram/Organigram";
import OrganigramList from "./Organigram/OrganigramList";
import Eraser from "./Organigram/Eraser";
import Login from "./Login/Login";
import Mybusiness from "./Mybusiness/Mybusiness";
import MybusinessEdit from "./Mybusiness/MybusinessEdit";
import AreasAndPositions from "./AreasAndPositions/AreasAndPositions";
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

export default function Home() {
  return (
    <Router>
      <Switch>
        <LayoutSecondary
          exact
          path="/organigrama/mybusiness-edit"
          title="Mi Empresa"
          component={MybusinessEdit}
        />
        <LayoutSecondary
          exact
          path="/organigrama/areasandpositions"
          title="Áreas y puestos"
          component={AreasAndPositions}
        />
        <LayoutSecondary
          exact
          path="/organigrama/organigramstarted"
          title="Organigrama"
          component={Organigramstarted}
        />
        <LayoutSecondaryCardGlass
          exact
          path="/organigrama/organigram"
          title="Organigrama"
          component={Organigram}
        />
        <LayoutSecondaryCardGlass
          exact
          path="/organigrama/eraser"
          title="Organigrama"
          component={Eraser}
        />
        <LayoutSecondaryCardWhite
          exact
          path="/organigrama/organigramlist"
          title="Organigrama"
          component={OrganigramList}
        />
        <LayoutSecondaryCard
          exact
          path="/organigrama/teams"
          title="Equipos"
          component={Teams}
        />
        <LayoutSecondaryCard
          exact
          path="/organigrama/teamsv"
          title="Equipos"
          component={Teamv}
        />
        <LayoutSecondaryCard
          exact
          path="/organigrama/mybusiness"
          title="Mi Empresa"
          component={Mybusiness}
        />
        <LayoutSecondaryCard
          exact
          path="/organigrama/teamstarted"
          title="Equipos"
          component={TeamStarted}
        />
        <LayoutSecondaryCard
          exact
          path="/organigrama/areasandpositions-collaborator"
          title="Colaborador"
          component={Collaborator}
        />
        <LayoutSecondaryCardBack
          exact
          path="/organigrama/areasandpositions-general"
          title="Áreas y puestos"
          component={AreasAndPositionsMassiveGeneral}
        />
        <LayoutSecondaryCardBackGlass
          exact
          path="/organigrama/mensajes"
          title="Bandeja de entrada"
          component={Messages}
        />
        <LayoutSecondaryCardBack
          exact
          path="/organigrama/areasandpositions-addjob"
          title="Áreas y puestos"
          component={AreasAndPositionsJob}
        />
        <LayoutSecondaryCardBack
          exact
          path="/organigrama/areasandpositions-detailerror"
          title="Áreas y puestos"
          component={DetailError}
        />
        <LayoutSecondaryCardBack
          exact
          path="/organigrama/areasandpositions-detailsuccess"
          title="Áreas y puestos"
          component={DetailSuccess}
        />
        <LayoutSecondaryCardBack
          exact
          path="/organigrama/areasandpositions-massivee"
          title="Áreas y puestos"
          component={AreasAndPositionsMassiveE}
        />
        <LayoutSecondaryCardBack
          exact
          path="/organigrama/areasandpositions-massivep"
          title="Áreas y puestos"
          component={AreasAndPositionsMassiveP}
        />
        <LayoutSecondaryCardBack
          exact
          path="/organigrama/areasandpositions-masivac"
          title="Áreas y puestos"
          component={AreasAndPositionsMassiveC}
        />
        <LayoutSecondaryCardBackSmall
          exact
          path="/organigrama/areasandpositions-perfil"
          title="Perfil"
          component={AreasAndPositionsPerfil}
        />
        <LayoutPrimary
          exact
          path="/recoverypassword"
          component={RecoveryPassword}
        />
        <LayoutPrimary exact path="/login" component={Login} />
        <LayoutPrimary exact path="/" component={Login} />
        <LayoutPrimary path="*" component={Nofound} />
      </Switch>
    </Router>
  );
}
