import * as React from 'react';
import Cards from '../Utils/Cards';
import Cards3 from '../Utils/Cards3';
import Grid from '@mui/material/Grid';
import Title from '../Utils/Title';
import SecondaryTitle from '../Utils/SecondaryTitle';
import CursosIndex from './CursosIndex';

function Cursos() {
    return(
        <div> 
            <CursosIndex mark="1"/>
            
            <Grid 
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"     
                justifyContent="center"  
                style={{marginBottom:"55px"}}         
            >
                <Cards key={1} title="Precálculo" img="img1"/>
                <Cards key={2} title="Bases de datos" img="img2"/>
                <Cards key={3} title="Física I" img="img3" active="true"/>
                <Cards key={4} title="Programación web" img="img4"/>  
            </Grid>

            <SecondaryTitle text="Próximamente disponible"/>
            <Grid 
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"     
                justifyContent="center" 
                style={{marginBottom:"55px"}}          
            >
                <Cards3 key={1} title="Bases de datos" img="img2"/>
                <Cards3 key={2} title="Física I" img="img3"/>
                <Cards3 key={3} title="Programación web" img="img4"/>                
            </Grid>
        </div> 
    );
}
  
export default Cursos;