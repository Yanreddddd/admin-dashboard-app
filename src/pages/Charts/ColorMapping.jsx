import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective, Category } from '@syncfusion/ej2-react-charts';

import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

// Dummy Data for demo purposes
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';


const ColorMapping = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Heat Map" title="USA CLIMATE CHANGE - MONTHLY WEATHER"/>
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{
            border: { width: 0}
          }}
          tooltip={{
            enable: true
          }}
          legendSettings={{ 
            mode: 'Range', 
            background: 'white'
          }}
        >
          <Inject services={[
            ColumnSeries,
            Tooltip,
            Legend,
            Category
          ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
            dataSource={colorMappingData[0]}
            name="USA"
            xName="x"
            yName="y"
            type="Column"
            cornerRadius={{
              topLeft: 10,
              topRight: 10,
            }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) =>
            <RangeColorSettingDirective key={index} {...item}/>
            )}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default ColorMapping