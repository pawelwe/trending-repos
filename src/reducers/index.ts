import {
  SET_BUSY,
  SET_ERROR,
  SET_REPOSITORIES,
  SET_LANGUAGE,
  SET_TIME_SPAN,
  SET_SORTING_DIR,
} from '../actions/index';

export interface RepositoryInterface {
  name: string;
  author: string;
  avatar: string;
  currentPeriodStars: number;
  description: string;
  language: string;
  stars: number;
  url: string;
}

export interface InitialStateInterface {
  isBusy: boolean;
  error: string;
  repositories: Array<RepositoryInterface> | null;
  since: string;
  language: string;
  sortDir: string;
}

const initialState: InitialStateInterface = {
  isBusy: false,
  error: '',
  repositories: null,
  since: 'daily',
  language: '',
  sortDir: 'desc',
};

export const mainReducer = (
  state = initialState,
  action: { type: string; payload: any },
) => {
  switch (action.type) {
    case SET_BUSY:
      return { ...state, isBusy: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload, isBusy: false };
    case SET_REPOSITORIES:
      return { ...state, repositories: action.payload, isBusy: false };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    case SET_TIME_SPAN:
      return { ...state, since: action.payload };
    case SET_SORTING_DIR:
      return { ...state, sortDir: action.payload };
    default:
      return state;
  }
};
