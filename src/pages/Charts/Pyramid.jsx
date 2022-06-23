import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";

// Dummy data for demo purposes
import { PyramidData } from "../../data/dummy";
import { ChartsHeader } from "../../components";

const Pyramid = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Foodie Pyramid" title="Food Comparison" />
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          legendSettings={{
            background: "white",
          }}
          tooltip={{
            enable: true,
          }}
        >
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={PyramidData}
              name="Food"
              xName="x"
              yName="y"
              type="Pyramid"
              width="50%"
              neckWidth="15%"
              explode={true}
              explodeOffset="50"
              gapRatio={0.1}
              emptyPointSettings={{
                mode: "Drop",
                fill: "red",
              }}
              dataLabel={{
                visible: true,
                position: "Inside",
                name: "text",
              }}
            />
          </AccumulationSeriesCollectionDirective>
          <Inject
            services={[
              AccumulationLegend,
              AccumulationDataLabel,
              PyramidSeries,
              AccumulationTooltip,
              AccumulationSelection,
            ]}
          />
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
