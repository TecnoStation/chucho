import React, { useState } from "react";
import ModalPermissions from "../../components/Modals/ModalPermissions/ModalPermissions";
import Zoom from "./components/Zoom/Zoom";

export default function Organigrama() {
  const [Permisos, setPermisos] = useState(false);
  return (
    <>
      <Zoom />

      <div style={{ marginTop: "30vh" }}></div>
    </>
  );
}
