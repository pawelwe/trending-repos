import React, { memo } from 'react';
import styles from './Select.scss';

interface Props {
  value: string;
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void;
  render: Function;
  optionsData: Object;
}

export const Select = memo<Props>(
  ({ value, onChange, render, optionsData }) => {
    return (
      <select className={styles['select']} onChange={onChange} value={value}>
        {render(optionsData)}
      </select>
    );
  },
);
