import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import avatar from '../../assets/images/avatar.jpg';
import ButtonS from '../Utils/ButtonS';

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 200 }} style={{marginLeft: "30px", marginTop:"30px"}}>
      <CardActionArea style={{width: "200px"}}>
      <img src={avatar} alt="avatar" width="100%" height="170px"></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <ButtonS text="CONTACTAR"/>
      </CardActions>
    </Card>
  );
}

