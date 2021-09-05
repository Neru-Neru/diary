import React, { useState, useCallback, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import allLocales from '@fullcalendar/core/locales-all';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = (props) => {
  const [yearmonth, setYearMonth] = useState('');

  const handleClick = (arg) => {
    // 対象日の動画を取得する
    console.log(arg);
    if (arg.dateStr) {
      props.clickDay(arg.dateStr);
    } else {
      let input = arg.event._instance.range.start;
      //let date = JSON.stringify(input).split('T')[0];
      let today = new Date(JSON.stringify(input).split('T')[0].replace(/\"/g, '""'));
      var year = today.getFullYear();
      var month = ('00' + (today.getMonth() + 1)).slice(-2);
      var date = ('00' + today.getDate()).slice(-2);
      props.clickDay(year + '-' + month + '-' + date);
    }
  };

  const getMonthData = (fetchInfo, successCallback, failureCallback) => {
    // 対象月の動画データを取得する
    const day = new Date(fetchInfo.start);
    const year = day.getFullYear();
    const month = day.getMonth() + 1;
    setYearMonth(year + '-' + month);
    if (year + '-' + month) {
      let url = 'https://terminal-8c860.web.app/load-month?';
      url += 'username=taisei&';
      url += 'month=' + year + '-' + month;
      console.log(url);
      var events = [];
      fetch(url, {
        mode: 'cors',
      })
        .then(function (data) {
          return data.json();
        })
        .then(function (json) {
          for (let i of Object.keys(json)) {
            // 各動画ごとに生成
            let tmp = {
              start: i,
              icon: 'smile',
            };
            events.push(tmp);
          }
          successCallback(events);
        })
        .catch((e) => {
          console.log(e); // エラーをキャッチし表示
        });
    }
  };

  useEffect(() => {
    // 年月が変更された時だけ表示タイルを変更する
    props.clickMonthBtn(yearmonth);
  }, [yearmonth]);

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      locales={allLocales}
      locale="ja"
      height="100%"
      dateClick={handleClick}
      eventClick={handleClick}
      showNonCurrentDates={false}
      events={(fetchInfo, successCallback, failureCallback) =>
        getMonthData(fetchInfo, successCallback, failureCallback)
      }
      eventContent={function (arg, createElement) {
        if (arg.event._def.extendedProps.icon) {
          var classname = 'fa fa-' + arg.event._def.extendedProps.icon;
          const elm = createElement('i', { class: classname });
          return elm;
        }
      }}
      color="red"
      forceEventDuration={true}
      eventTimeFormat={{
        hour: 'numeric',
        minute: 'numeric',
      }}
    />
  );
};

export default Calendar;
