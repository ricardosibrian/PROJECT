import * as React from 'react';
import ReactPlayer from 'react-player';
import Grid from '@mui/material/Grid';

export default function YTplayer(props) {
  return (
        <ReactPlayer url={props.url} controls={true} />
  );
}