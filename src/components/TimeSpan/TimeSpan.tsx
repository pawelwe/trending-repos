import React, { memo } from 'react';
import styles from './TimeSpan.scss';

interface Props {
  timeSpans: Array<{ value: string }>;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  checkedItem: String;
}

export const TimeSpan = memo(({ timeSpans, onChange, checkedItem }: Props) => {
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
