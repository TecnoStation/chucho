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
import Organigramainicio from "./Organigrama/Organigramainicio";
import Organigrama from "./Organigrama/Organigrama";
import Organigram from "./Organigrama/Organigram";
import Eraser from "./Organigrama/Eraser";
import Login from "./Login/Login";
import Miempresa from "./Miempresa/Miempresa";
import MiempresaEdit from "./Miempresa/MiempresaEdit";
import Areasypuestos from "./Areasypuestos/Areasypuestos";
import AreasypuestosJob from "./Areasypuestos/AreasypuestosAddJob";
import AreasypuestosPerfil from "./Areasypuestos/Perfil";
import AreasypuestosMasivaE from "./Areasypuestos/AreasypuestosMasivaE";
import AreasypuestosMasivaP from "./Areasypuestos/AreasypuestosMasivaP";
import AreasypuestosMasivaC from "./Areasypuestos/AreasypuestosMasivaC";
import AreasypuestosMasivaGeneral from "./Areasypuestos/AreasypuestosMasivaGeneral";
import Detalleerror from "./Areasypuestos/Detalleerror";
import Detalleexito from "./Areasypuestos/Detalleexito";
import Nofound from "./Nofound";
import Messages from "../pages/Messages/Messages";
import Equipos from "./Equipos/Equipos";
import Equiposv from "./Equipos/Equiposv";
import Equipoinicio from "./Equipos/Equipoinicio";
import Colaborador from "./Areasypuestos/Colaborador";

export default function Home() {
  return (
    <Router>
      <Switch>
        <LayoutSecondary
          exact
          path="/miempresa-edit"
          title="Mi Empresa"
          component={MiempresaEdit}
        />
        <LayoutSecondary
          exact
          path="/areasypuestos"
          title="Áreas y puestos"
          component={Areasypuestos}
        />
        <LayoutSecondary
          exact
          path="/organigramainicio"
          title="Organigrama"
          component={Organigramainicio}
        />
        <LayoutSecondaryCardGlass
          exact
          path="/organigrama"
          title="Organigrama"
          component={Organigrama}
        />
        <LayoutSecondaryCardGlass
          exact
          path="/eraser"
          title="Organigrama"
          component={Eraser}
        />
        <LayoutSecondaryCardWhite
          exact
          path="/organigram"
          title="Organigrama"
          component={Organigram}
        />
        <LayoutSecondaryCard
          exact
          path="/equipos"
          title="Equipos"
          component={Equipos}
        />
        <LayoutSecondaryCard
          exact
          path="/equiposv"
          title="Equipos"
          component={Equiposv}
        />
        <LayoutSecondaryCard
          exact
          path="/miempresa"
          title="Mi Empresa"
          component={Miempresa}
        />
        <LayoutSecondaryCard
          exact
          path="/equipoinicio"
          title="Equipos"
          component={Equipoinicio}
        />
        <LayoutSecondaryCard
          exact
          path="/areasypuestos-colaborador"
          title="Colaborador"
          component={Colaborador}
        />
        <LayoutSecondaryCardBack
          exact
          path="/areasypuestos-general"
          title="Áreas y puestos"
          component={AreasypuestosMasivaGeneral}
        />
        <LayoutSecondaryCardBackGlass
          exact
          path="/mensajes"
          title="Bandeja de entrada"
          component={Messages}
        />
        <LayoutSecondaryCardBack
          exact
          path="/areasypuestos-addjob"
          title="Áreas y puestos"
          component={AreasypuestosJob}
        />
        <LayoutSecondaryCardBack
          exact
          path="/areasypuestos-Detalleerror"
          title="Áreas y puestos"
          component={Detalleerror}
        />
        <LayoutSecondaryCardBack
          exact
          path="/areasypuestos-Detalleexito"
          title="Áreas y puestos"
          component={Detalleexito}
        />
        <LayoutSecondaryCardBack
          exact
          path="/areasypuestos-masivae"
          title="Áreas y puestos"
          component={AreasypuestosMasivaE}
        />
        <LayoutSecondaryCardBack
          exact
          path="/areasypuestos-masivap"
          title="Áreas y puestos"
          component={AreasypuestosMasivaP}
        />
        <LayoutSecondaryCardBack
          exact
          path="/areasypuestos-masivac"
          title="Áreas y puestos"
          component={AreasypuestosMasivaC}
        />
        <LayoutSecondaryCardBackSmall
          exact
          path="/areasypuestos-perfil"
          title="Perfil"
          component={AreasypuestosPerfil}
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
