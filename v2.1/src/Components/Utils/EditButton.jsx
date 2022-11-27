import * as React from 'react';
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


export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCrear = () => {
    alert('CURSO SUBIDO');
    setOpen(false);
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
        id="nombre"
        label="Nombre del curso"
        type="text"
        fullWidth
        
      />
      <TextField
      id="outlined-multiline-static"
      label="Descripcion"
      multiline rows={4}
        autoFocus
        margin="dense"
        fullWidth
      />
      <TextField
        autoFocus
        margin="dense"
        id="imagen"
        label="URL de la imagen"
        type="text"
        fullWidth
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancelar</Button>
      <Button onClick={handleCrear}>Crear</Button>
    </DialogActions>
    </Dialog>

    </div>

  );
}



