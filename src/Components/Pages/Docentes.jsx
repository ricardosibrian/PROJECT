import * as React from "react";
import DocenteCards from '../Utils/DocenteCards';
import Title from '../Utils/Title';
import Grid from '@mui/material/Grid';
import axios from 'axios';

const Docentes = () => {
    const [ docentes, setDocentes ] = React.useState([]);

    //Effect para cargar todos los cursos 1 vez
    React.useEffect(()=>{
        fetchDocentes();
    }, []);

    //Fetch para obtener cursos de la base
    const fetchDocentes = async () => {
        try {
              const { data } = await axios.get('/docente');
            setDocentes(data.docentes);

        } catch (error) {
            console.log('Error inesperado!');
        }
    }

    //Mapeo de las cards con base a los cursos obtenidos de la base
    const mappedTarjetas = docentes.map(docente => {
        return(
            <DocenteCards key={docente._id} title={docente.name} text={docente.email}/>
        )
    });

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
                {mappedTarjetas} 
            </Grid>
        </div>  
      );
};

export default Docentes;

