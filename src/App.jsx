import * as React from "react";
import RouterApp from "./Components/Router/RouterApp";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <RouterApp />
        <ToastContainer theme="dark" position="bottom-right" />
      </BrowserRouter>
    </div>
  );
}


