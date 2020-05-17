import dayjs from 'dayjs';
import { isSameDay } from 'services/calendar';

// スケジュールをセットする
export const setSchedules = (calender, schedules) =>
  calender.map((c) => ({
    date: c,
    schedules: schedules.filter((e) => isSameDay(e.date, c)),
  }));

// スケジュールにフォーマットをかける
export const formatSchedule = (schedule) => ({
  ...schedule,
  date: dayjs(schedule.date),
});

// ダイアログを閉じる際にconfrimを表示
export const isCloseDialog = (schedule) => {
  const message = '予定が保存されていませんが、閉じますか？';
  return isScheduleEmpty(schedule) || window.confirm(message);
};

// スケジュールの全項目が空か確認
const isScheduleEmpty = (schedule) => {
  return !schedule.title && !schedule.description && !schedule.location;
};
