import React from 'react';
import styles from './SortButton.scss';

export const SortButton = ({ onClick, children, sortDir }) => {
  return (
    <button className={styles['button']} onClick={onClick}>
      {children}
      {sortDir === 'desc' ? ' +' : ' -'}
    </button>
  );
};
