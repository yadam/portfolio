import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';

function Buttons({ classes, reaction, onChange }) {
  return (
    <ToggleButtonGroup
      className={classes.buttonGroup}
      exclusive
      onChange={onChange}
      selected
      value={reaction}
    >
      <ToggleButton value="funny" className={classes.button}>
        <Typography className={classes.faces} variant="h3">
          <span role="img" aria-label="That's Funny!">
            😆
          </span>
        </Typography>
      </ToggleButton>
      <ToggleButton value="meh" className={classes.button}>
        <Typography className={classes.faces} variant="h3">
          <span role="img" aria-label="Meh...">
            😒
          </span>
        </Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

Buttons.propTypes = {
  classes: PropTypes.shape({
    button: PropTypes.string,
    buttonGroup: PropTypes.string,
    faces: PropTypes.string,
  }).isRequired,
  reaction: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Buttons.defaultProps = {
  reaction: undefined,
};

export default withStyles({
  button: {
    height: '9rem',
    padding: '3rem',
  },
  buttonGroup: {
    height: '9rem',
    width: '18.8rem',
    margin: '0 auto',
  },
  faces: {
    height: '3rem',
    padding: '0.2rem',
    textAlign: 'center',
  },
})(Buttons);
