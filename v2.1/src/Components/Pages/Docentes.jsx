import * as React from "react";
import DocenteCards from '../Utils/DocenteCards';
import Title from '../Utils/Title';
import Grid from '@mui/material/Grid';

const Docentes = () => {
   
    return (
        <div>      
          <Title text="Docentes"/>
          <Grid 
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"     
                justifyContent="center"  
                style={{marginBottom:"55px"}}         
            >
                <DocenteCards title="José Quintanilla" text="Departamento de Matemática"/>
                <DocenteCards title="José Quintanilla" text="Departamento de Matemática"/>
                <DocenteCards title="José Quintanilla" text="Departamento de Matemática"/>
                <DocenteCards title="José Quintanilla" text="Departamento de Matemática"/> 
                <DocenteCards title="José Quintanilla" text="Departamento de Matemática"/>
            </Grid>
        </div>  
      );
};

export default Docentes;

