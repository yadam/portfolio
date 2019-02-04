import PropTypes from 'prop-types';
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Loader from '../loader';

function Item({ alt, classes, id, isFunny, image, loading, title }) {
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
        <Typography paragraph variant="subtitle2">
          {title}
        </Typography>
        <CardMedia className={classes.media} image={image} title={alt} />
        {(isFunny === undefined || isFunny) && (
          <Typography variant="h3">
            <span role="img" aria-label="That's Funny!">
              😆
            </span>
          </Typography>
        )}
        {!isFunny && (
          <Typography variant="h3">
            <span role="img" aria-label="Meh...">
              😒
            </span>
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

Item.propTypes = {
  alt: PropTypes.string.isRequired,
  classes: PropTypes.shape({ card: PropTypes.string, media: PropTypes.string })
    .isRequired,
  id: PropTypes.string.isRequired,
  isFunny: PropTypes.bool,
  image: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

Item.defaultProps = {
  isFunny: undefined,
};

export default withStyles({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
})(Item);
