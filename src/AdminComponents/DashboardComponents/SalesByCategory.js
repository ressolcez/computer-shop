import React from 'react'
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

function SalesByCategory({salesByCategory}) {

  const data = [
    { year: '1950', population: 2.525 },
    { year: '1960', population: 3.018 },
    { year: '1970', population: 3.682 },
    { year: '1980', population: 4.440 },
    { year: '1990', population: 5.310 },
    { year: '2000', population: 6.127 },
    { year: '2010', population: 6.930 },
  ];

  console.log(salesByCategory)
  console.log(data)


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