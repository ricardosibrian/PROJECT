import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonSizes(props) {
  return (
    <Button variant="contained" size="small">
        {props.text}
    </Button>
  );
}
