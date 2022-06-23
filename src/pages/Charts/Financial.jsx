import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts';

import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { ChartsHeader } from '../../components';


const filterValue = value => {
  const date1 = new Date('2017, 1, 1');

  if (value.x >= date1 ) {
    // eslint-disable-next-line no-sequences
    return value.x, value.low, value.high;
  }
}

const returnFilteredValue = financialChartData.filter(filterValue);

const Financial = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Financial Chart" title="Market Share" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{
            enable: true,
            lineType: 'Horizontal',
            line: {
              width: 0
            }
          }}
        >
          <SeriesCollectionDirective>
            <SeriesDirective 
            dataSource={returnFilteredValue}
            xName="x"
            yName="low"
            name="Apple Inc"
            type="Hilo"
            low="low"
            high="high"
            />
          </SeriesCollectionDirective>
          <Inject services={[
            HiloSeries,
            Tooltip,
            DateTime,
            Zoom,
            Logarithmic,
            Crosshair
          ]}/>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Financial