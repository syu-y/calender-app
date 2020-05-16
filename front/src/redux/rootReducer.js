import { combineReducers } from "redux";
import calendarReducer from "redux/calendar/reducer";
import addScheduleReducer from "redux/addSchedule/reducer";
import schedulesReducer from "redux/schedules/reducer";

const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer,
  schedules: schedulesReducer
});

export default rootReducer;
