import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '../Utils/Button';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import axios from 'axios';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions(props) {
  const [ lecciones, setLecciones ] = React.useState([]);
  const [expanded, setExpanded] = React.useState('panel1');

  //Effect para cargar todos las lecciones 1 vez
  React.useEffect(()=>{
    fetchLecciones();
}, []);

//Fetch para obtener cursos de la base
const fetchLecciones = async () => {
  try {

    console.log('/leccion/lecturaByCourse/' + props.courseid);
    

      const { data } = await axios.get('/leccion/lecturaByCourse/' + props.courseid);
      setLecciones(data);

  } catch (error) {
      console.log('Error inesperado!');
  }
}

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  //Mapeo de las lecciones con base a los cursos obtenidos de la base
  const mappedLecciones = lecciones.map(leccion => {
    return(
      <Accordion expanded={expanded === leccion._id} onChange={handleChange(leccion._id)}>
        <AccordionSummary aria-controls={leccion._id} id={leccion._id}>
          <Typography style={{display:'inline'}}>{leccion.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {leccion.description}
          </Typography>
        </AccordionDetails>
        <Link to="/leccionesdetails" state={{ videoLink: leccion.videoLink }}>
          <Button text="ACCEDER" />
        </Link>
      </Accordion>
    )  
});

  return (
    <div>
      {mappedLecciones}
     </div>
  );
}
