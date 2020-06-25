import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import moment from "moment";

function preventDefault(event) {
  event.preventDefault();
}



export default function Card(props) {
  return (
    <React.Fragment>
      <Title>Measure of {props.element}</Title>
      <Typography component="p" variant="h1">
        {props.data}
      </Typography>
      
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          on {moment().format("DD-MM-YYYY hh:mm:ss")}
        </Link>
      </div>
    </React.Fragment>
  );
}
