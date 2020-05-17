import AddScheduleDialog from 'components/AddScheduleDialog/presentation';
import { connect } from 'react-redux';
import {
  addScheduleSetValue,
  addScheduleCloseDialog,
  addScheduleStartEdit,
} from 'redux/addSchedule/actions';
import { asyncScheduleAddItem } from 'redux/schedules/effects';
import { isCloseDialog } from 'services/schedule';

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
  setIsEditStart: () => {
    dispatch(addScheduleStartEdit());
  },
});

const mergeProps = (stateProps, dispatchPros) => {
  const {
    schedule: { form: schedule },
  } = stateProps;
  const { saveSchedule, closeDialog } = dispatchPros;

  return {
    ...stateProps,
    ...dispatchPros,
    saveSchedule: () => {
      saveSchedule(schedule);
    },
    closeDialog: () => {
      if (isCloseDialog(schedule)) {
        closeDialog();
      }
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(AddScheduleDialog);
