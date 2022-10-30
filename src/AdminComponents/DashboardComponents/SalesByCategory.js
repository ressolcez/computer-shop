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

function SalesByCategory({salesByCategory}) {



  return (
    <div style = {{marginTop:'50px',width:'50%'}}>
    <Paper>
    <Chart
    data={salesByCategory}
    >
          <ArgumentAxis />
          <ValueAxis max={7} />
          <BarSeries
            valueField="liczba"
            argumentField="category_name"
          />
          <Title text="Liczba sprzedanych przedmiotów z każdej kategorii" />
          <Animation />
        </Chart>
      </Paper>
    </div>
  )
}

export default SalesByCategory