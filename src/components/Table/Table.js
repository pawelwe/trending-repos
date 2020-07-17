import React, { useCallback, useState } from 'react';
import styles from './Table.scss';

export const Table = ({ data }) => {
  let [isDescOpen, toggleDesc] = useState(false);

  const handleToggleDescription = useCallback(
    e => {
      e.target.classList.toggle('is-open');
      toggleDesc(!isDescOpen);
    },
    [isDescOpen],
  );

  return (
    <table className={`${styles['table']} fade-in`}>
      <thead className="fade-in" >
        <tr>
          <th width="70px">Author</th>
          <th width="120"></th>
          <th width="150px">Name</th>
          <th width="100px">Language</th>
          <th width="50px">Stars</th>
          <th>Description</th>
          <th width="150px">Link</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({
            name,
            author,
            avatar,
            currentPeriodStars,
            description,
            language,
            stars,
            url,
          }) => {
            return (
              <tr className="fade-in" key={url}>
                <td>
                  <img src={avatar} alt={author} />
                </td>
                <td>{author}</td>
                <td>{name}</td>
                <td>{language}</td>
                <td>{stars}</td>
                <td>
                  <span
                    onClick={handleToggleDescription}
                    className={styles['description']}
                  >
                    {description}
                  </span>
                </td>
                <td>
                  <a href={url} target="_blank" rel="noreferrer">
                    Go To Repo
                  </a>
                </td>
              </tr>
            );
          },
        )}
      </tbody>
    </table>
  );
};
