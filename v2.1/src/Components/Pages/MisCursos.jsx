import * as React from 'react';
import Cards2 from '../Utils/Cards2';
import Grid from '@mui/material/Grid';
import CursosIndex from './CursosIndex';
import EditButton from '../Utils/EditButton';

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
                <Cards2 key={1} title="Precálculo" img="img1"/>
                <Cards2 key={2} title="Bases de datos" img="img2"/>
                <Cards2 key={3} title="Física I" img="img3"/>
                <Cards2 key={4} title="Precálculo" img="img1"/>      
            </Grid>
            
            <EditButton />
            
        </div> 
    );
}
  
export default MisCursos;