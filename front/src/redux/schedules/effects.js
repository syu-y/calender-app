import {
  schedulesSetLoading,
  schedulesFetchItem,
  schedulesAddItem,
  schedulesDeleteItem,
} from 'redux/schedules/actions';
import { get, post, deleteRequest } from 'services/api';
import { formatSchedule } from 'services/schedule';

export const asyncScheduleFetchItem = ({ month, year }) => async (dispatch) => {
  dispatch(schedulesSetLoading());
  const result = await get(`schedules/?month=${month}&year=${year}`);

  const formatedSchedule = result.map((r) => formatSchedule(r));
  console.log(formatedSchedule);
  dispatch(schedulesFetchItem(formatedSchedule));
};

export const asyncScheduleAddItem = (schedule) => async (dispatch) => {
  dispatch(schedulesSetLoading());
  const body = { ...schedule, date: schedule.date.toISOString() };
  const result = await post('schedules', body);

  const newSchedule = formatSchedule(result);
  dispatch(schedulesAddItem(newSchedule));
};

export const asyncScheduleDeleteItem = (id) => async (dispatch, getState) => {
  dispatch(schedulesSetLoading());
  const currentSchedule = getState().schedules.items;
  await deleteRequest(`schedules/${id}`);

  const newSchedule = currentSchedule.filter((s) => s.id !== id);
  dispatch(schedulesDeleteItem(newSchedule));
};
