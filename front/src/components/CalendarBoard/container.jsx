import { connect } from 'react-redux';
import CalenderBoard from './presentation';
import { createCalender } from '../../services/calendar';
import { addScheduleOpenDialog } from '../../redux/addSchedule/actions';

const mapStateToProps = (state) => ({ calendar: state.calendar });

const mapDispatchToProps = (dispatch) => ({
  openAddScheduleDialog: () => {
    dispatch(addScheduleOpenDialog());
  }
});

const mergeProps = (stateProps, dispatchPros) => ({
  ...stateProps,
  ...dispatchPros,
  month: stateProps.calendar,
  calendar: createCalender(stateProps.calendar)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalenderBoard);
