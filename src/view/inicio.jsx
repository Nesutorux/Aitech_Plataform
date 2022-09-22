import React from "react";
import Grid from "@mui/material/Grid";
import { Input, Icon } from "atomize";

import "/src/view/css/styles.css";
import { Button } from "@mui/material";

export function Dashinicio() {
  return <Inicio />;
}

function Inicio() {
  return (
    <div className="container-center-horizontal">
      <div className="dashboard-graphics screen" className="fondo">
        <div className="barmenu" className="barmenu">
          <button variant="contained" url="/src/view/pruebas.jsx">
            Inicio
          </button>
        </div>
        <ul>
          <Seccion />
          <div className="areatrabajo"></div>
        </ul>
      </div>
    </div>
  );
}

function Perfil() {
  return (
    <div className="imagenPerfil">
      <div className="estadoConexion"></div>
    </div>
  );
}
function Seccion() {
  return (
    <Grid container spacing={0} columns={5}>
      <Grid>
        <Buscador />
      </Grid>
      <Grid>
        <Notificacion />
      </Grid>
      <Grid>
        <div className="mensajes" className="mensajes"></div>
      </Grid>
      <Grid>
        <div className="configuracion" className="configuracion"></div>
      </Grid>
      <Grid>
        <Perfil />
      </Grid>
    </Grid>
  );
}

function Buscador() {
  return <Input className="buscador" placeholder="Buscador" />;
}

function Notificacion() {
  return (
    <Button className="notificacion">
      <Icon name="Notification" height="25px" />
    </Button>
  );
}
