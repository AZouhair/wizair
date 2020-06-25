import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';


function createData(id, time, pm25, O3, NO2, average) {
  return { id, time, pm25, O3, NO2, average };
}

function createRows(data){
  let result = [];
  let i = 0
  data.forEach(e => {
    result.push(createData(i, e["date"], e["pm25"], e["O3"], e["NO2"], 
                          (parseFloat(e["pm25"])+parseFloat(e["O3"])+parseFloat(e["NO2"]))/3)
    ); 
    i++
    })
  return result
}

// const mockRows = [
//   createData(0, '16 Mar, 2019','18:06:54', '***', '***', '****', 16.43),
//   createData(1, '16 Mar, 2019', '18:06:54','***', '***', '****', 26.99),
//   createData(2, '16 Mar, 2019', '18:06:54','***', '***', '****', 20.81),
//   createData(3, '16 Mar, 2019',  '18:06:54','***', '***', '****', 24.39),
//   createData(4, '15 Mar, 2019', '18:06:54', '***', '***', '****', 19.79),
// ];




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
            <TableCell align="right">Average</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.pm25}</TableCell>
              <TableCell>{row.O3}</TableCell>
              <TableCell>{row.NO2}</TableCell>
              <TableCell align="right">{row.average}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
