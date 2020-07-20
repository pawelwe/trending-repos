import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRepositories,
  setLanguage,
  setTimeSpan,
  setRepositories,
  setSoringDir,
} from '../../actions';
import styles from './Header.scss';
import languages from '../../config/languages';
import timeSpans from '../../config/timeSpans';
import { compareValues } from '../../utils/utils';
import { Select } from '../Select/Select';
import { SortButton } from '../SortButton/SortButton';
import { TimeSpan } from '../TimeSpan/TimeSpan';

export const Header = () => {
  const { repositories, since, sortDir, language } = useSelector(
    state => state,
  );
  const dispatch = useDispatch();

  const handleChangeLanguage = useCallback(
    e => {
      dispatch(setLanguage(e.target.value));
      dispatch(fetchRepositories());
    },
    [language],
  );

  const handleChangeTimeSpan = useCallback(
    e => {
      dispatch(setTimeSpan(e.target.value));
      dispatch(fetchRepositories());
    },
    [since],
  );

  const sortData = useCallback(() => {
    dispatch(setSoringDir(sortDir === 'asc' ? 'desc' : 'asc'));
    dispatch(
      setRepositories([...repositories.sort(compareValues('stars', sortDir))]),
    );
  }, [repositories, sortDir]);

  return (
    <header className={styles['header']}>
      <div className={`container ${styles['header-content']}`}>
        <Select
          value={language}
          onChange={handleChangeLanguage}
          optionsData={languages}
          render={options => {
            return options.map(({ name, urlParam }) => {
              return <option key={urlParam}>{name}</option>;
            });
          }}
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
};
