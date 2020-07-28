import React, { memo } from 'react';
import styles from './SortButton.scss';

export const SortButton = memo(({ onClick, children, sortDir }) => {
  console.log('Sort Button rendered');
  return (
    <button className={styles['button']} onClick={onClick}>
      {children}
      {sortDir === 'desc' ? ' +' : ' -'}
    </button>
  );
});
