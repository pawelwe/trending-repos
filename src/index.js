import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { TrendingRepos } from './components/TrendingRepos/TrendingRepos';
import './styles/index.scss';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <TrendingRepos />
      </ErrorBoundary>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
