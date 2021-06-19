import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const BuildCardStuct = ({ item }) => {
  const { id,
          buildNumber,
          commitMessage,
          commitHash,
          branchName,
          authorName,
          status,
          start,
          duration } = item;

  const shortCommitHash = commitHash.split('-')[0];
  const date = Date(start).split(' ');
  const readyDate = `${date[2]} ${date[1]}, ${date[4].substr(0, 5)}`;

  return (
    <Link to={{pathname: `/build/buildId=${id}`, item: item}} className="card">
      <div className="card__left-part">
        <span className="card__title">№{buildNumber}</span>
        <span className="card__description">{commitMessage}</span>
        <span className="card__branch">{branchName}</span><span className="card__hash">{shortCommitHash}</span>
        <span className="card__author">{authorName}</span>
      </div>
      <div className="card__right-part">
        <span className="card__date">{readyDate}</span>
        <span className="card__time">{duration}</span>
      </div>
    </Link>
  );
};

export const BuildCard = withRouter(BuildCardStuct);
