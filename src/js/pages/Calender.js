import React, { useState, useCallback, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import allLocales from '@fullcalendar/core/locales-all';
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = (props) =>{
    const [yearmonth, setYearMonth] = useState("");

    const handleClick = (arg) => {
      // 対象日の動画を取得する
        props.clickDay(arg.dateStr);
      };

    const getMonthData = (fetchInfo, successCallback, failureCallback) =>{
      // 対象月の動画データを取得する
      const day = new Date(fetchInfo.start);
      const year = day.getFullYear();
      const month = day.getMonth()+1;
      setYearMonth(year+'-'+month);
    };

    useEffect(() => {
      // 年月が変更された時だけ表示タイルを変更する
      props.clickMonthBtn(yearmonth);
    }, [yearmonth])

    return(
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locales={allLocales}
          locale="ja"
          height="100%"
          dateClick={handleClick}
          showNonCurrentDates={false}
          events={
            (fetchInfo, successCallback, failureCallback) => getMonthData(fetchInfo, successCallback, failureCallback)
          }
          forceEventDuration={true}
          eventTimeFormat={{
            hour: 'numeric',
            minute: 'numeric'
          }}
          />
    );
}

export default Calendar;