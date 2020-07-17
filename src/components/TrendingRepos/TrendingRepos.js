import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepositories, setLanguage, setTimeSpan } from '../../actions';
import { saveData, loadData } from '../../utils/utils';
import { Messages } from '../Messages/Messages';
import { Header } from '../Header/Header';
import { Table } from '../Table/Table';

export const TrendingRepos = () => {
  const { repositories, isBusy, error, since, language } = useSelector(
    state => state,
  );
  const dispatch = useDispatch();
  const noResults = repositories && repositories.length === 0;

  useEffect(() => {
    const savedFilters = loadData('filters');

    if (!savedFilters) return;

    const { language, since } = savedFilters;

    dispatch(setLanguage(language));
    dispatch(setTimeSpan(since));
  }, []);

  useEffect(() => {
    saveData('filters', {
      language,
      since,
    });
  }, [language, since]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchRepositories());
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Messages isBusy={isBusy} error={error} noResults={noResults} />
      <main className={'container fade-in'}>
        {!noResults && !isBusy && <Table data={repositories} />}
      </main>
    </div>
  );
};
