import React from 'react';
import { AccumulationChartComponent, AccumulationDataLabel, AccumulationLegend,AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PieSeries, AccumulationTooltip } from '@syncfusion/ej2-react-charts'

// Dummy data for demo purposes
import { pieChartData, } from '../../data/dummy';
import { Header } from '../../components';

import { useStateContext } from '../../contexts/ContextProvider';

const Doughnut = () => {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
    // background={currentMode === 'Dark' ? '#33373E': '#fff'}
    id="pie-chart"
    height="420px"
    enableSmartLabels={true}
    tooltip={{
      enable: true,
    }}
    >
      <Inject services={[
        PieSeries,
        AccumulationDataLabel,
        AccumulationLegend,
        AccumulationTooltip
      ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective 
        name="Sale"
        dataSource={pieChartData} 
        xName='x' 
        yName='y' 
        type="Pie" 
        innerRadius='40%' 
        radius='70%'
        explode={true}
        explodeOffset="10%"
        explodeIndex={2}
        dataLabel={{
          visible: true,
          name: 'text',
          position: 'Inside',
          font: {
            fontWeight: '600',
            color: '#fff'
          },
        }}> 
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default Doughnut