import React, { memo } from 'react';
import { Loader } from '../Loader/Loader';
import styles from './Messages.scss';

export interface Props {
  isBusy: boolean;
  error: string | null;
  noResults: boolean;
}

export const Messages = memo(({ isBusy, error, noResults }: Props) => {
  return (
    <div className="container">
      {isBusy && <Loader />}
      {error && (
        <span className={styles['error']}>Something went wrong 😔</span>
      )}
      {noResults && !isBusy && <span>No results 😔</span>}
    </div>
  );
});
