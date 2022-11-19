import * as React from 'react';
import Grid from '@mui/material/Grid';
import Title from '../Utils/Title';
import FormContact from '../Utils/FormContact';
import CorreoImg from '../Utils/CorreoImg';

const Contacto = () => {
   
    return (
        <div>      
          <Title text="Contáctanos"/>
          <Grid 
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"     
                justifyContent="center"  
                style={{marginBottom:"55px"}}         
            >
                <CorreoImg/>
                <FormContact/>
            </Grid>
        </div>  
      );
};

export default Contacto;