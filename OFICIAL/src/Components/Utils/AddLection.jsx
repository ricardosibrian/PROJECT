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
    if (videoLink.value === '') {
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
  const videoLink = useFormInput('');

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
        'videoLink':videoLink.value,
        'course':props.courseid
      }

      axios.post('/leccion',dataSubmit, {
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
    <DialogTitle>Crear una lección</DialogTitle>
    <DialogContent>
      
      <TextField
        autoFocus
        margin="dense"
        required
        id="nombre"
        label="Nombre de la lección"
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
      <TextField
        autoFocus
        margin="dense"
        required
        id="url"
        label="URL de la lección"
        type="text"
        fullWidth
        error = {validateField && videoLink.value==='' ? true : false}
        helperText = {validateField && videoLink.value==='' ? 'URL de la lección es requerida' : ''}
        {...videoLink}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancelar</Button>
      <Button onClick={handleCrear}>Crear</Button>
    </DialogActions>

    </Dialog>
      {apierror=== true ? <Snackbar severity="error" msg="Error al crear la leccion."/> : ''}
      {apiSuccess=== true ? <Snackbar severity="success" msg="Lección creada exitosamente."/> : ''}
    </div>

  );
}



