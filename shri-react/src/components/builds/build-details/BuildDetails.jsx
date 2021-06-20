import React from 'react';
import { withRouter } from 'react-router';
import { BuildCard } from '../build-list/BuildCard';
import './buildDetails.scss';
import '../build-list/buildCard.scss';

const BuildDetail = (props) => {
  const { location: { item } } = props;

  return (
    <div className="build-details">
      <BuildCard item={item} />
      <div className="log">long text</div>
    </div>
  );
};

export const BuildDetails = withRouter(BuildDetail);
