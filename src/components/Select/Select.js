import React from 'react';
import styles from './Select.scss';

export const Select = ({ value, onChange, render, optionsData }) => {
  return (
    <select className={styles['select']} onChange={onChange} value={value}>
      {render(optionsData)}
    </select>
  );
};
