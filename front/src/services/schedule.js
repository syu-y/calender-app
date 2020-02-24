import { isSameDay } from './calendar';

export const setSchedules = (calender, schedules) =>
  calender.map( c => ({
    date: c,
    schedules: schedules.filter(e => isSameDay(e.date, c))
  }));
