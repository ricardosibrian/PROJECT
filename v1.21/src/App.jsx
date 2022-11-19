import * as React from "react";
import Portal from "./Components/Portals/Portal";
import {  BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Portal />
      </BrowserRouter>
    </div>
  );
}

