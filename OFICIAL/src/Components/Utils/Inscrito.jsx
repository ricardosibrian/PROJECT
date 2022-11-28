import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';

export default function CustomDeleteIconChips() {

    const handleClick = () => {
    console.log('aaaaa');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Inscrito"
        onClick={handleClick}
        onDelete={handleDelete}
        
        deleteIcon={<DoneIcon />}
        
      />
      
    </Stack>
  );
}

