import React from 'react'
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  PieSeries,
  Legend
  

} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

function MostOrderdByProducents({mostOrderdByProducents}) {
  return (
    <div style={{width:'50%'}}>
      <Paper>
        <Chart
          data={mostOrderdByProducents}
        >
          <PieSeries
            valueField="liczba"
            argumentField="producent"
          />
          <Title
            text="Area of Countries"
          />
          <Legend />
          <Animation />
        </Chart>
      </Paper>

    </div>
  )
}

export default MostOrderdByProducents