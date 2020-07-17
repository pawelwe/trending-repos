import React from 'react';
import { Loader } from '../Loader/Loader';

export const Messages = ({ isBusy, error, noResults }) => {
  return (
    <div className="container">
      {isBusy && <Loader />}
      {error && <span>Something went wrong :(</span>}
      {noResults && !isBusy && <span>No results</span>}
    </div>
  );
};
