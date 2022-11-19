import * as React from 'react';
import Cards2 from '../Utils/Cards2';
import Grid from '@mui/material/Grid';
import Title from '../Utils/Title';
import CursosIndex from './CursosIndex';
import {Link} from 'react-router-dom';

function MisCursos() {
    return(
        <div> 
            <CursosIndex mark="0"/>
            
            <Grid 
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"     
                justifyContent="center"  
                style={{marginBottom:"55px"}}         
            >
                <Link to="/cardsdetails">
                <Cards2 key={1} title="Precálculo" img="img1"/>
                </Link>
                <Link to="/cardsdetails">
                <Cards2 key={2} title="Bases de datos" img="img2"/>
                </Link>
                <Link to="/cardsdetails">
                <Cards2 key={3} title="Física I" img="img3"/>
                </Link>
                <Link to="/cardsdetails">
                <Cards2 key={4} title="Programación web" img="img4"/> 
                </Link>                
            </Grid>
        </div> 
    );
}
  
export default MisCursos;