import React, { memo } from 'react';
import styles from './Select.scss';

export interface Props {
  value: string;
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void;
  render: Function;
  optionsData: Object;
}

export const Select = memo(
  ({ value, onChange, render, optionsData }: Props) => {
    return (
      <select className={styles['select']} onChange={onChange} value={value}>
        {render(optionsData)}
      </select>
    );
  },
);
