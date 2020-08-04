import React from 'react';
import loader from './assets/loader.svg';
import styles from './Loader.scss';

export const Loader = () => {
  return (
    <div className={`${styles['loader']} fade-in`}>
      <img src={loader} alt="loader" />
    </div>
  );
};
