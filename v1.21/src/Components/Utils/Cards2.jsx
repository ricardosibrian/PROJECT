import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import img1 from '../../assets/images/calculo.jpg';
import img2 from '../../assets/images/bd.png';
import img3 from '../../assets/images/fisica.png';
import img4 from '../../assets/images/prow.png';
import Inscrito from './Inscrito';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{marginLeft: "30px", marginTop:"30px"}}>
      <CardActionArea style={{width: "325px"}}>
      <img src={props.img === 'img1'? img1 : props.img === 'img2'? img2 : props.img === 'img3'? img3 : img4} alt="calculo" width="100%" height="170px"></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.title}
          </Typography>
          <Inscrito />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}