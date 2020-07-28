import React, { useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeTimeSpan,
  sortRepositories,
  changeLanguage,
} from '../../actions';
import styles from './Header.scss';
import languages from '../../config/languages';
import timeSpans from '../../config/timeSpans';
import { Select } from '../Select/Select';
import { SortButton } from '../SortButton/SortButton';
import { TimeSpan } from '../TimeSpan/TimeSpan';

export const Header = memo(() => {
  const { since, sortDir, language } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChangeLanguage = useCallback(
    e => {
      dispatch(changeLanguage(e.target.value));
    },
    [dispatch],
  );

  const handleChangeTimeSpan = useCallback(
    e => {
      dispatch(changeTimeSpan(e.target.value));
    },
    [dispatch],
  );

  const sortData = useCallback(() => {
    dispatch(sortRepositories());
  }, [dispatch]);

  const renderOptions = useCallback(options => {
    return options.map(({ name, urlParam }) => {
      return <option key={urlParam}>{name}</option>;
    });
  }, []);

  console.log('Header rendered');

  return (
    <header className={styles['header']}>
      <div className={`container ${styles['header-content']}`}>
        <Select
          value={language}
          onChange={handleChangeLanguage}
          optionsData={languages}
          render={renderOptions}
        />
        <TimeSpan
          timeSpans={timeSpans}
          onChange={handleChangeTimeSpan}
          checkedItem={since}
        />
        <SortButton sortDir={sortDir} onClick={sortData}>
          Sort by stars
        </SortButton>
      </div>
    </header>
  );
});
