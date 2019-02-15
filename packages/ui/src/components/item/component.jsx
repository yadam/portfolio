import PropTypes from 'prop-types';
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Buttons from '../buttons';
import Loader from '../loader';

function Item({ alt, classes, id, image, loading, onChange, reaction, title }) {
  if (loading) {
    return (
      <Card key={id} className={classes.card}>
        <CardContent>
          <Loader />
        </CardContent>
      </Card>
    );
  }
  return (
    <Card key={id} className={classes.card}>
      <CardContent>
        <Typography paragraph variant="h6">
          {title}
        </Typography>
        <CardMedia
          component="img"
          className={classes.media}
          image={image}
          title={alt}
        />
        <Buttons reaction={reaction} onChange={onChange} />
      </CardContent>
    </Card>
  );
}

Item.propTypes = {
  alt: PropTypes.string.isRequired,
  classes: PropTypes.shape({ card: PropTypes.string, media: PropTypes.string })
    .isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  reaction: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles({
  card: {
    maxWidth: 400,
  },
  media: {
    objectFit: 'contain',
    marginBottom: '1rem',
  },
})(Item);
