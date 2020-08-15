import React, { memo, ReactNode } from 'react';
import styles from './SortButton.scss';

interface Props {
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  sortDir: String;
  children: ReactNode;
}

export const SortButton = memo<Props>(({ onClick, children, sortDir }) => {
  return (
    <button className={styles['button']} onClick={onClick}>
      {children}
      {sortDir === 'desc' ? ' +' : ' -'}
    </button>
  );
});
