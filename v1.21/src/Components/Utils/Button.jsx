import * as React from 'react';
import Button from '@mui/material/Button';

export default function DisableElevation(props) {
  return (
    <Button variant="contained" disableElevation style={{margin: "13px"}}>
      {props.text}
    </Button>
  );
}
