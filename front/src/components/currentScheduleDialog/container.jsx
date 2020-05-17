import { connect } from 'react-redux';
import CurrentScheduleDialog from 'components/CurrentScheduleDialog/presentation';
import { currentScheduleCloseDialog } from 'redux/currentSchedule/actions';
import { asyncScheduleDeleteItem } from 'redux/schedules/effects';

const mapStateToProps = (state) => ({
  schedule: state.currentSchedule,
});

const mapDispatchToProps = (dispatch) => ({
  closeDialog: () => {
    dispatch(currentScheduleCloseDialog());
  },
  deleteItem: (id) => {
    dispatch(asyncScheduleDeleteItem(id));
    dispatch(currentScheduleCloseDialog());
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  deleteItem: () => {
    const { id } = stateProps.schedule.item;
    dispatchProps.deleteItem(id);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(CurrentScheduleDialog);
