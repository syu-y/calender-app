import { connect } from 'react-redux';
import Navigation from 'components/Navigation/presentation';
import { calrendarSetMonth } from 'redux/calendar/actions';
import {
  getNextMonth,
  getPreviousMonth,
  getMonth,
  formatMonth,
} from 'services/calendar';
import { asyncScheduleFetchItem } from 'redux/schedules/effects';

const mapStateToProps = (state) => ({ calendar: state.calendar });

const mapDispathToProps = (dispatch) => ({
  setMonth: (month) => {
    dispatch(calrendarSetMonth(month));
  },
  fetchItem: (month) => {
    dispatch(asyncScheduleFetchItem(month));
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  month: getMonth(stateProps.calendar),

  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calendar);
    // dispatch(calrenderSetMonth(nextMonth));
    dispatchProps.setMonth(nextMonth);
    dispatchProps.fetchItem(nextMonth);
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calendar);
    // dispatch(calrenderSetMonth(previousMonth));
    dispatchProps.setMonth(previousMonth);
    dispatchProps.fetchItem(previousMonth);
  },
  setMonth: (dayObj) => {
    const month = formatMonth(dayObj);
    dispatchProps.setMonth(month);
    dispatchProps.fetchItem(month);
  },
});

export default connect(
  mapStateToProps,
  mapDispathToProps,
  mergeProps,
)(Navigation);
