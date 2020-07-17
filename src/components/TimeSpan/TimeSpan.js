import React from 'react';
import styles from './TimeSpan.scss';

export const TimeSpan = ({ timeSpans, onChange, checkedItem }) => {
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
            <div className="check"></div>
            <label htmlFor={value}>{value}</label>
          </div>
        );
      })}
    </div>
  );
};
