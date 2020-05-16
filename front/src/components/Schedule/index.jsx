import React from 'react';
import * as styles from 'components/Schedule/style.css';

const Schedule = ({ schedule }) => {
  return <div className={styles.schedule}>{schedule.title}</div>;
}

export default Schedule;
