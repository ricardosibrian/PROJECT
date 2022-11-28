import * as React from "react";
import Inicio from '../Pages/Inicio';
import Cursos from '../Pages/Cursos';
import MisCursos from '../Pages/MisCursos';
import CursosIndex from '../Pages/CursosIndex';
import Docentes from '../Pages/Docentes';
import Contacto from '../Pages/Contacto';
import CardsDetails from '../Pages/CardsDetails';
import LeccionesDetails from '../Pages/LeccionesDetails';
import {Routes, Route} from 'react-router-dom';
import AuthView from "../../views/AuthView/AuthView";
import ProtectedRoutes from "../AuthForms/ProtectedRoutes";

export default function RouterApp() {
  return (
    <div>
     <Routes>
        <Route exact path="auth/*" element={<AuthView/>} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="cursos" element={<Cursos />} />
          <Route path="miscursos" element={<MisCursos />} />
          <Route path="cursosindex" element={<CursosIndex />} />
          <Route path="docentes" element={<Docentes />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="cardsdetails" element={<CardsDetails />} />
          <Route path="leccionesdetails" element={<LeccionesDetails />} />
        </Route>                 
      </Routes>
    </div>
  );
}