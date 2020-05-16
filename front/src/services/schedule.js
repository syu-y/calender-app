import { isSameDay } from 'services/calendar';

export const setSchedules = (calender, schedules) =>
  calender.map((c) => ({
    date: c,
    schedules: schedules.filter((e) => isSameDay(e.date, c)),
  }));
