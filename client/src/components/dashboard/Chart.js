import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';


function createData(time, amount) {
  return { time, amount };
}

// Mock data has been added for the sake of presentation, in the real app the data here is the data that has been queried in
// Dashboard.js

const mock_data = [
   createData('00:00', 17),
   createData('03:00', 15),
   createData('06:00', 25),
   createData('09:00', 20),
   createData('12:00', 22),
   createData('15:00', 19),
   createData('18:00', 25),
   createData('21:00', 18),
   createData('24:00', undefined),
 ];

export const parse = (arr,element)=>{
  const result = [];
  arr.forEach(e => result.push(createData(e["date"].substr(e["date"].length - 9),e[element])))
  return result
}

export default function Chart(props) {
  const theme = useTheme();
  //const data = parse(mock_data, props.element) ;
  const data = mock_data;
  return (
    <React.Fragment>
      <Title>{props.element+" Monitoring" } </Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={90}
              position="top"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
 
    </React.Fragment>
  );
}
