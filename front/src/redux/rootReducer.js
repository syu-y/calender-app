import { combineReducers } from 'redux';
import calendarReducer from 'redux/calendar/reducer';
import addScheduleReducer from 'redux/addSchedule/reducer';
import schedulesReducer from 'redux/schedules/reducer';
import currentScheduleReducer from 'redux/currentSchedule/reducer';

const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer,
  schedules: schedulesReducer,
  currentSchedule: currentScheduleReducer,
});

export default rootReducer;
