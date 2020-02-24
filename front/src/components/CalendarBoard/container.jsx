import { connect } from 'react-redux';
import CalenderBoard from './presentation';
import { createCalendar } from '../../services/calendar';
import { setSchedules } from '../../services/schedule';
import { addScheduleSetValue, addScheduleOpenDialog } from '../../redux/addSchedule/actions';

const mapStateToProps = (state) => ({
  calendar: state.calendar,
  schedules: state.schedules
});

const mapDispatchToProps = (dispatch) => ({
  openAddScheduleDialog: (d) => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({ date: d }));
  }
});

const mergeProps = (stateProps, dispatchPros) => {
  const {
    calendar: month,
    schedules: { items: schedules }
  } = stateProps;

  const calendar = setSchedules(createCalendar(month), schedules)

  return {
    ...stateProps,
    ...dispatchPros,
    month,
    calendar,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalenderBoard);
