import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, time, measure1, measure2, measure3, grade) {
  return { id, date, time, measure1, measure2, measure3, grade };
}

const rows = [
  createData(0, '16 Mar, 2019','18:06:54', '***', '***', '****', 16.43),
  createData(1, '16 Mar, 2019', '18:06:54','***', '***', '****', 26.99),
  createData(2, '16 Mar, 2019', '18:06:54','***', '***', '****', 20.81),
  createData(3, '16 Mar, 2019',  '18:06:54','***', '***', '****', 24.39),
  createData(4, '15 Mar, 2019', '18:06:54', '***', '***', '****', 19.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Measures() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Measures</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Element 1</TableCell>
            <TableCell>Element 2</TableCell>
            <TableCell>Element 3</TableCell>
            <TableCell align="right">Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.measure1}</TableCell>
              <TableCell>{row.measure2}</TableCell>
              <TableCell>{row.measure3}</TableCell>
              <TableCell align="right">{row.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more measures
        </Link>
      </div>
    </React.Fragment>
  );
}
