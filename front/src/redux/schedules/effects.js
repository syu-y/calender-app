import {
  schedulesSetLoading,
  schedulesFetchItem,
  schedulesAddItem,
  schedulesDeleteItem,
  schedulesAsyncFailure,
} from 'redux/schedules/actions';
import { get, post, deleteRequest } from 'services/api';
import { formatSchedule } from 'services/schedule';

// 予定取得
export const asyncScheduleFetchItem = ({ month, year }) => async (dispatch) => {
  dispatch(schedulesSetLoading());
  try {
    const result = await get(`schedules`);
    // const result = await get(`schedules/?month=${month}&year=${year}`);
    const formatedSchedule = result.map((r) => formatSchedule(r));
    dispatch(schedulesFetchItem(formatedSchedule));
  } catch (err) {
    console.error(err);
    dispatch(schedulesAsyncFailure(err.message));
  }
};

// 予定追加
export const asyncScheduleAddItem = (schedule) => async (dispatch) => {
  dispatch(schedulesSetLoading());
  const body = { ...schedule, date: schedule.date.toISOString() };

  try {
    const result = await post('schedules', body);
    const newSchedule = formatSchedule(result);
    dispatch(schedulesAddItem(newSchedule));
  } catch (err) {
    console.error(err);
    dispatch(schedulesAsyncFailure(err.message));
  }
};

// 予定削除
export const asyncScheduleDeleteItem = (id) => async (dispatch, getState) => {
  dispatch(schedulesSetLoading());
  const currentSchedule = getState().schedules.items;

  try {
    await deleteRequest(`schedules/${id}`);
    const newSchedule = currentSchedule.filter((s) => s.id !== id);
    dispatch(schedulesDeleteItem(newSchedule));
  } catch (err) {
    console.error(err);
    dispatch(schedulesAsyncFailure(err.message));
  }
};
