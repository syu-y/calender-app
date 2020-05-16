import AddScheduleDialog from 'components/AddScheduleDialog/presentation';
import { connect } from 'react-redux';
import {
  addScheduleSetValue,
  addScheduleCloseDialog,
} from 'redux/addSchedule/actions';
import { asyncScheduleAddItem } from 'redux/schedules/effects';

const mapStateToProps = (state) => ({ schedule: state.addSchedule });

const mapDispatchToProps = (dispatch) => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  setSchedule: (value) => {
    dispatch(addScheduleSetValue(value));
  },
  saveSchedule: (schedule) => {
    dispatch(asyncScheduleAddItem(schedule));
    dispatch(addScheduleCloseDialog());
  },
});

const mergeProps = (stateProps, dispatchPros) => ({
  ...stateProps,
  ...dispatchPros,
  saveSchedule: () => {
    const {
      schedule: { form: schedule },
    } = stateProps;
    dispatchPros.saveSchedule(schedule);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(AddScheduleDialog);
