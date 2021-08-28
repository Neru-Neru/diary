import React, { useState, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import allLocales from '@fullcalendar/core/locales-all';
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = (props) =>{
    const handleClick = useCallback((arg) => {
        props.onClick(arg.dateStr);
      }, []);

    return(
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locales={allLocales}
          locale="ja"
          height="100%"
          dateClick={handleClick}/>
    );
}

export default Calendar;