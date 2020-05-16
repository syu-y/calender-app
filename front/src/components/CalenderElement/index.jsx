import React from 'react';
import { Typography } from '@material-ui/core';
import dayjs from 'dayjs';
import * as styles from 'components/CalenderElement/style.css';
import {
  isFisrtDay,
  isSameMonth,
  isSameDay,
  getMonth,
} from 'services/calendar';
import Schedule from 'components/Schedule';

const CalenderElement = ({ day, month, schedules }) => {
  const currentMonth = getMonth(month);
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const textColor = isCurrentMonth ? 'textPrimary' : 'textSecondary';

  const today = dayjs();
  const isToday = isSameDay(day, today);
  const textVariant = isFisrtDay(day, today) ? 'subtitle1' : 'caption';

  const format = isFisrtDay(day, today) ? 'M/D' : 'D';

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant={textVariant}
        component="div"
      >
        <span className={isToday ? styles.today : ''}>
          {day.format(format)}
        </span>
      </Typography>
      <div className={styles.schedules}>
        {schedules.map((e) => (
          <Schedule key={e.id} schedule={e} />
        ))}
      </div>
    </div>
  );
};

export default CalenderElement;
