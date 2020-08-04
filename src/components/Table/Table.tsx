import React, { useCallback, useState } from 'react';
import styles from './Table.scss';

export interface Props {
  data: Array<{
    name: string;
    author: string;
    avatar: string;
    currentPeriodStars: number;
    description: string;
    language: string;
    stars: number;
    url: string;
  }>;
}

export const Table: React.FC<Props> = ({ data }) => {
  let [isDescOpen, toggleDesc] = useState(false);

  const handleToggleDescription = useCallback(
    e => {
      e.target.classList.toggle('is-open');
      toggleDesc(!isDescOpen);
    },
    [isDescOpen],
  );

  if (!data) {
    return null;
  }

  return (
    <table className={styles['table']}>
      <thead>
        <tr>
          <th style={{ width: '190px' }} colSpan={2}>
            Author
          </th>
          <th style={{ width: '150px' }}>Name</th>
          <th style={{ width: '100px' }}>Language</th>
          <th style={{ width: '60px' }}>Stars</th>
          <th>Description</th>
          <th style={{ width: '150px' }}>Link</th>
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
