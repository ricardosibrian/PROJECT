import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea,CardActions } from '@mui/material';
import {Link} from 'react-router-dom';
import ButtonS from '../Utils/ButtonS';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DialogContentText from '@mui/material/DialogContentText';

export default function ActionAreaCard(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    alert('DELETE');
    setOpen(false);
  };

  const { title, image_l } = props;
  return (
    <Card sx={{ maxWidth: 345 }} style={{marginLeft: "30px", marginTop:"30px"}}>
      <Link to="/cardsdetails">
      <CardActionArea style={{width: "325px"}}>
      <img src={image_l} alt="calculo" width="100%" height="170px"></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>
      <Grid
      container
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"     
      justifyContent="center"  
      gap="105px"
      style={{marginTop:"8px"}}
      >
        <div style={{marginLeft:"15px"}}>
          <ButtonS text="Inscribirme"/>
        </div>
        <div > {/* <div style={{visibility:"hidden"}}> */}
          <div style={{display:"inline", marginRight:"0px"}}>
          <IconButton aria-label="edit" style={{marginLeft:"0px", marginRight:"0px"}} >
          <EditIcon style={{color:'#5b5b5b', cursor: 'pointer'}}/>
          </IconButton>
          </div>
          <div style={{display:"inline"}}>
          <IconButton aria-label="delete" style={{marginLeft:"0px", marginRight:"0px"}}
          onClick={handleClickOpen}>
          <DeleteIcon style={{color:'#e54d32', cursor: 'pointer'}}/>
          </IconButton>
          </div>  
        </div>
      </Grid>
      </CardActions>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmación"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Está seguro que desea eliminar este curso?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleDelete}>Eliminar</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}


