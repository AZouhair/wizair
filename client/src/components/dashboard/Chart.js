import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import Link from '@material-ui/core/Link';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

function preventDefault(event) {
  event.preventDefault();
}

const data = [
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

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Air Quality Monitoring</Title>
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
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Details 
        </Link>
      </div>
    </React.Fragment>
  );
}
