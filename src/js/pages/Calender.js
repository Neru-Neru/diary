import React, { useState, useCallback, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import allLocales from '@fullcalendar/core/locales-all';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = (props) => {
  const [yearmonth, setYearMonth] = useState('');

  const handleClick = (arg) => {
    // 対象日の動画を取得する
    if (arg.dateStr) {
      props.clickDay(arg.dateStr);
    } else {
      let input = arg.event._instance.range.start;
      let today = new Date(JSON.stringify(input).split('T')[0].replace(/\"/g, '""'));
      var year = today.getFullYear();
      var month = ('00' + (today.getMonth() + 1)).slice(-2);
      var date = ('00' + today.getDate()).slice(-2);
      props.clickDay(year + '-' + month + '-' + date);
    }
  };

  const getMonthData = async (fetchInfo, successCallback, failureCallback) => {
    // 対象月の動画データを取得する
    const day = new Date(fetchInfo.start);
    const year = day.getFullYear();
    const month = day.getMonth() + 1;
    const pre = year + '-' + month;
    setYearMonth(pre);
    if (yearmonth === year + '-' + month && props.username !== '') {
      let url = 'https://terminal-8c860.web.app/load-month?';
      url += 'username=' + props.username + '&';
      url += 'month=' + year + '-' + month;
      console.log(url);
      return fetch(url, {
        mode: 'cors',
      })
        .then(function (data) {
          return data.json();
        })
        .then(function (json) {
          return json;
        })
        .catch(function (e) {
          console.log(e); // エラーをキャッチし表示
        });
    }
    return new Promise((success, fault) => {});
  };

  const handleJson = (json) => {
    // jsonの処理（moveMonthで使用）
    let data = [];
    for (let i of Object.keys(json)) {
      // 各動画ごとに生成
      let tmp = {
        username: props.username,
        date: i,
        title: json[i].title,
        desc: json[i].desc,
        query: json[i].query,
      };
      data.push(tmp);
    }
    return data;
  };

  const getEvents = (json) => {
    const events = [];
    for (let i of Object.keys(json)) {
      // 各動画ごとに生成
      let tmp = {
        start: i,
        icon: 'smile',
      };
      events.push(tmp);
    }
    return events;
  };

  useEffect(() => {}, [yearmonth]);

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
      events={async (fetchInfo, successCallback, failureCallback) => {
        if (props.flg) {
          const data = await getMonthData(fetchInfo, successCallback, failureCallback);
          const newEvent = getEvents(data);
          if (newEvent) {
            successCallback(newEvent);
            const newList = handleJson(data);
            if (props.imageList.length == 0 || newList[0].date != props.imageList[0].date) {
              props.setImagelist(newList);
            }
          }
        } else {
          successCallback({});
        }
      }}
      eventContent={function (arg, createElement) {
        if (arg.event._def.extendedProps.icon) {
          var classname = 'fa fa-' + arg.event._def.extendedProps.icon;
          const elm = createElement('i', { class: classname });
          return elm;
        }
      }}
      forceEventDuration={true}
      eventTimeFormat={{
        hour: 'numeric',
        minute: 'numeric',
      }}
    />
  );
};

export default Calendar;
