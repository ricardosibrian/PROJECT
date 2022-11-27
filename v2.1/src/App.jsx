import * as React from "react";
import {  BrowserRouter } from "react-router-dom";
import Portal from './Components/Portals/Portal';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Portal />
      </BrowserRouter>
    </div>
  );
}

