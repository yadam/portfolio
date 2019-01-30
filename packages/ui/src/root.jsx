import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Paper, Typography } from '@material-ui/core';

export default function Root() {
  return (
    <>
      <CssBaseline />
      <Typography variant="body1">
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Paper>Hello World!</Paper>
          </Grid>
        </Grid>
      </Typography>
    </>
  );
}
