import React, { memo } from 'react';
import styles from './TimeSpan.scss';

export const TimeSpan = memo(({ timeSpans, onChange, checkedItem }) => {
  return (
    <div className={styles['time-span-box']}>
      {timeSpans.map(({ value }) => {
        return (
          <div className={styles['time-span-control']} key={value}>
            <input
              id={value}
              type="radio"
              onChange={onChange}
              value={value}
              checked={value === checkedItem}
            />
            <div className={styles['time-span-check']}></div>
            <label htmlFor={value}>{value}</label>
          </div>
        );
      })}
    </div>
  );
});
