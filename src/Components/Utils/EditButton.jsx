import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import axios from 'axios';
import Snackbar from './Snackbar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useNavigate} from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';

export default function SpeedDialTooltipOpen(props) {
  const { token } = useUserContext();
  const [open, setOpen] = React.useState(false);
  const [apierror, setApiError] = React.useState(false);
  const [apiSuccess, setApiSuccess] = React.useState(false);
  const [validateField, setvalidateField] = React.useState(false);
  const navigate = useNavigate();

  const validateFields = () => {
    var validationError = 0;

    setvalidateField(true);
    if (title.value === '') {
      validationError++;
    }
    if (description.value === '') {
      validationError++;
    }
    if (image.value === '') {
      validationError++;
    }
    return validationError;
  }

  const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
      setValue(e.target.value);
    }

    return{
      value,
      onChange:handleChange
    }
  }

  const title = useFormInput('');
  const description = useFormInput('');
  const image = useFormInput('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
   // reload();
  };

  //const reload =()=>window.location.reaload();

  const handleCrear = () => {
    if (validateFields()!==0) {
      // no hace el submit por errores de validacion
    } else {
      const dataSubmit = {
        'title':title.value,
        'description':description.value,
        'image':image.value
      }

      axios.post('/curso',dataSubmit, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'Authorization':`Bearer ${token}` 
        }}
      ).then((res) => {
        const RespStr = JSON.stringify(res.data);
        const RespJSON = JSON.parse(RespStr)
        setApiSuccess(true);
        setOpen(false);
        //reload();
        //props.history.push('/cursos');
        //navigate('/cursos',{replace:true});
        navigate(0);
      },
        (error) => {
          setApiError(true);
        }
      );
  }
    
    
  };

  return (
    <div>
    <Box sx={{ height: 0, flexGrow: 1 }} >
      <Backdrop open={open}/>
      <SpeedDial 
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'fixed', bottom: 16, right: 10 }}
        icon={<AddIcon />}
        onClick={handleClickOpen}
      >
      </SpeedDial>


    </Box>

    <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Crear un curso</DialogTitle>
    <DialogContent>
      
      <TextField
        autoFocus
        margin="dense"
        required
        id="nombre"
        label="Nombre del curso"
        type="text"
        fullWidth
        error = {validateField && title.value==='' ? true : false}
        helperText = {validateField && title.value==='' ? 'Nombre del curso es requerido' : ''}
        {...title}
      />
      <TextField
      id="outlined-multiline-static"
      label="Descripción"
      required
      multiline rows={4}
        autoFocus
        margin="dense"
        fullWidth
        error = {validateField && description.value==='' ? true : false}
        helperText = {validateField && description.value==='' ? 'Descripción del curso es requerido' : ''}
        {...description}
      />
      <InputLabel id="demo-simple-select-label">Área del curso</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          fullWidth
          required
          error = {validateField && image.value==='' ? true : false}
          helperText = {validateField && image.value==='' ? 'Área del curso es requerida' : ''}
          {...image}
        >
          <MenuItem value="https://fotografias.flooxernow.com/clipping/cmsimages01/2019/06/04/0D7B8C97-218D-4CA1-8B2D-85AEC56F8D95/98.jpg?crop=871,490,x45,y0&width=1900&height=1069&optimize=high&format=webply">
            Matemáticas</MenuItem>
          <MenuItem value="https://img.freepik.com/premium-vector/vintage-science-background_23-2148527049.jpg">
            Ciencias</MenuItem>
          <MenuItem value="https://p4.wallpaperbetter.com/wallpaper/744/804/845/computer-engineering-science-tech-wallpaper-thumb.jpg">
            Informática</MenuItem>
          <MenuItem value="https://media.cdn.republica.gt/042022/1649792170381.webp?cw=698&ch=500&extw=jpg">
            Humanidades</MenuItem>
        </Select>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancelar</Button>
      <Button onClick={handleCrear}>Crear</Button>
    </DialogActions>

    
    </Dialog>
      {apierror=== true ? <Snackbar severity="error" msg="Error al crear el curso."/> : ''}
      {apiSuccess=== true ? <Snackbar severity="success" msg="Curso creado exitosamente."/> : ''}
    </div>

  );
}



