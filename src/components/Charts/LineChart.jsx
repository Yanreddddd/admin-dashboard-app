import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts'

// Dummy data for demo purposes
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis} from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {
  const { currentMode } = useStateContext();
  
  return (
    <ChartComponent
    // background={currentMode === 'Dark' ? '#33373E': '#fff'}
    id="line-chart"
    height="420px"
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{
      border: {
        width: 0
      }
    }}
    tooltip={{
      enable: true
    }}
    >
      <Inject services={[
        DateTime,
        Legend, 
        Tooltip,
        LineSeries
      ]}
      />
      <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) =>
          <SeriesDirective 
          key={index}
          {...item}
          />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart