import * as React from 'react';
import Title from '../Utils/Title';
import YTplayer from '../Utils/YTplayer';
import Grid from '@mui/material/Grid';
import { useLocation } from 'react-router-dom';

function LeccionesDetails(props) {
    const location = useLocation();
    const { videoLink } = location.state;
    return(
        <div>
            <Title text="Detalle de lección"/>
            <Grid 
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"     
        justifyContent="center" >
            <YTplayer url={videoLink}/>
            </Grid>
            </div>
    );
}
  
export default LeccionesDetails;