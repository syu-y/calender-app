import React from 'react';
import * as styles from './style.css';
import { Typography } from '@material-ui/core';
import dayjs from 'dayjs';
import { isFisrtDay, isSameMonth, isSameDay, getMonth } from '../../services/calendar';

const CalenderElement = ({ day, month }) => {

  const currentMonth = getMonth(month)
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  const today = dayjs();
  const isToday = isSameDay(day, today);
  const textVariant = isFisrtDay(day, today) ? "subtitle1" : "caption";

  const format = isFisrtDay(day, today) ? "M/D" : "D";

  return(
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant={textVariant}
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  )
}

export default CalenderElement;
