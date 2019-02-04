import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';
import Item from './item';

export default function Root() {
  return (
    <>
      <CssBaseline />
      <Grid container justify="space-around" spacing={24}>
        <Item />
      </Grid>
    </>
  );
}
