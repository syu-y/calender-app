import {
  schedulesSetLoading,
  schedulesFetchItem,
} from 'redux/schedules/actions';
import { get } from 'services/api';
import { formatSchedule } from 'services/schedule';

export const asyncScheduleFetchItem = ({ month, year }) => async (dispatch) => {
  dispatch(schedulesSetLoading());
  const result = await get(`schedules/?month=${month}&year=${year}`);

  const formatedSchedule = result.map((r) => formatSchedule(r));
  console.log(formatedSchedule);
  dispatch(schedulesFetchItem(formatedSchedule));
};
