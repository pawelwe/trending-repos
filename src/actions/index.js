import { batch } from 'react-redux';
import ghapi from '../apis/ghapi';
import { compareValues, cloneObject } from '../utils/utils';

export const SET_BUSY = 'SET_BUSY';
export const SET_ERROR = 'SET_ERROR';
export const SET_REPOSITORIES = 'SET_REPOSITORIES';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_TIME_SPAN = 'SET_TIME_SPAN';
export const SET_SORTING_DIR = 'SET_SORTING_DIR';

export const setBusy = isBusy => {
  return {
    type: SET_BUSY,
    payload: isBusy,
  };
};

export const setError = error => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};

export const setRepositories = data => {
  return {
    type: SET_REPOSITORIES,
    payload: data,
  };
};

export const setTimeSpan = timeSpan => {
  return {
    type: SET_TIME_SPAN,
    payload: timeSpan,
  };
};

export const setLanguage = language => {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};

export const setSoringDir = dir => {
  return {
    type: SET_SORTING_DIR,
    payload: dir,
  };
};

export const sortRepositories = (sortBy = 'stars') => (dispatch, getState) => {
  const { repositories, sortDir } = getState();

  batch(() => {
    dispatch(setSoringDir(sortDir === 'asc' ? 'desc' : 'asc'));
    dispatch(
      setRepositories(
        cloneObject(repositories).sort(compareValues(sortBy, sortDir)),
      ),
    );
  });
};

export const changeLanguage = language => dispatch => {
  batch(() => {
    dispatch(setLanguage(language));
    dispatch(fetchRepositories());
  });
};

export const changeTimeSpan = timeSpan => dispatch => {
  batch(() => {
    dispatch(setTimeSpan(timeSpan));
    dispatch(fetchRepositories());
  });
};

export const fetchRepositories = () => async (dispatch, getState) => {
  console.log('Fetching data');

  batch(() => {
    dispatch(setError(null));
    dispatch(setBusy(true));
  });

  try {
    const { since, language } = getState();
    const { data } = await ghapi.get('/repositories', {
      params: {
        since: since,
        language: language,
      },
    });

    dispatch(setRepositories(data));
  } catch ({ message }) {
    dispatch(setError(message));
  }
};
