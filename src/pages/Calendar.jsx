import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

import { scheduleData } from "../data/dummy";
import { Header, Footer } from "../components";

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-whtie rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{
          dataSource: scheduleData,
        }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Agenda, Month, DragAndDrop, Resize]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
