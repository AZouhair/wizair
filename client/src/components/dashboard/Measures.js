import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';


function createData(id, time, pm25, O3, NO2, score) {
  return { id, time, pm25, O3, NO2, score };
}

function createRows(data){
  let result = [];
  let i = 0
  data.forEach(e => {
    result.push(createData(i, e["time"], e["pm25"], e["O3"], e["NO2"], 
      // score function can be way more complex
      ((2*parseFloat(e["pm25"])+parseFloat(e["O3"])+parseFloat(e["NO2"]))/3).toFixed(2))
    ); 
    i++
    })
  return result
}

export default function Measures(props) {
  const rows = createRows(props.data);
  return (
    <React.Fragment>
      <Title>Recent Measures</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>pm25</TableCell>
            <TableCell>O3</TableCell>
            <TableCell>NO2</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.pm25}</TableCell>
              <TableCell>{row.O3}</TableCell>
              <TableCell>{row.NO2}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
