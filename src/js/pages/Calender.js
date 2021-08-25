import React, { useState, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import allLocales from '@fullcalendar/core/locales-all';
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () =>{
    const handleDateClick = useCallback((arg) => {
        alert(arg.dateStr);
      }, []);

    return(
        <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locales={allLocales}
          locale="ja"
          contentHeight='auto'
          dateClick={handleDateClick}/>
        </div>
    );
}

export default Calendar;