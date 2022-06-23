import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

// Import dummy data for demo purposes
import { ordersData, ordersGrid } from "../data/dummy";
import { Header } from "../components";

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging={true}
        allowSorting={true}
      >
        {/* Map through the dummy data's orders information and spread through the display */}
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/* Injecting services or should I say.. F E A T U R E S ! */}
        <Inject
          services={[
            Resize,
            ContextMenu,
            Sort,
            ExcelExport,
            PdfExport,
            Edit,
            Page,
            Filter,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
