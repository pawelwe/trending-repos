import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRepositories,
  setLanguage,
  setTimeSpan,
} from '../../actions/index';
import { saveData, loadData } from '../../utils/utils';
import { Messages } from '../Messages/Messages';
import { Header } from '../Header/Header';
import { Table } from '../Table/Table';
import { InitialStateInterface } from '../../reducers/index';

interface StateProps {
  isBusy: boolean;
  error: string;
  repositories: any;
  since: string;
  language: string;
}

export const TrendingRepos: React.FC = () => {
  const { repositories, isBusy, error, since, language } = useSelector<
    InitialStateInterface,
    StateProps
  >((state: InitialStateInterface) => state);
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
    <>
      <Header />
      <Messages isBusy={isBusy} error={error} noResults={noResults} />
      <main className="container">
        {!noResults && !isBusy && <Table data={repositories} />}
      </main>
    </>
  );
};
