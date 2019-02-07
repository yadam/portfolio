import PropTypes from 'prop-types';
import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

function Loader({ classes }) {
  return <CircularProgress className={classes.root} />;
}

Loader.propTypes = {
  classes: PropTypes.shape({ root: PropTypes.string }).isRequired,
};

export default withStyles({
  root: {
    height: '8rem !important',
    width: '8rem !important',
  },
})(Loader);
