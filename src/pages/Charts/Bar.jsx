import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { ChartsHeader }  from '../../components';

const Bar = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar Chart" title="Olympic Medal Counts"/>
      <div className="w-full">
        <ChartComponent
        id="charts"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        tooltip={{ enable: true }}
        legendSettings={{ background: 'white' }}
        chartArea={{ border: { width: 0 } }}
        >
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) =>
              <SeriesDirective key={index} {...item} />
            )}
          </SeriesCollectionDirective>
          <Inject services={[
            Legend,
            Category,
            Tooltip,
            ColumnSeries,
            DataLabel,
          ]}
          />
        </ChartComponent>
      </div>
    </div>
  )
}

export default Bar