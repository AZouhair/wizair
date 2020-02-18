import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function ImportantCard() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Something Important</Title>
      <Typography component="p" variant="h4">
        blablabla
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 10 December, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Details 
        </Link>
      </div>
    </React.Fragment>
  );
}
