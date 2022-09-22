import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "/src/view/inicio.jsx";
import { Dashinicio } from "/src/view/inicio.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Dashinicio />
  </StrictMode>
);
