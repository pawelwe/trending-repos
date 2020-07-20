import React, { memo } from 'react';
import styles from './SortButton.scss';

export const SortButton = memo(({ onClick, children, sortDir }) => {
  return (
    <button className={styles['button']} onClick={onClick}>
      {children}
      {sortDir === 'desc' ? ' +' : ' -'}
    </button>
  );
});
