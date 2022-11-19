import * as React from "react";
import Divider from '@mui/material/Divider';

export default function SecondaryTitle(props) {
  return (
    <div>
      <h2> {props.text} </h2>
      <Divider style={{marginBottom:"30px"}}/>
    </div>
  );
}