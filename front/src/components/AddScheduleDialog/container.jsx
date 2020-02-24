import AddScheduleDialog from './presentation';
import { connect } from 'react-redux';
import { addScheduleSetValue, addScheduleCloseDialog } from '../../redux/addSchedule/actions';

const mapStateToProps = (state) => ({ schedule: state.addSchedule });

const  mapDispatchToProps = (dispatch) => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  setSchedule: (value) => {
    dispatch(addScheduleSetValue(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog);
