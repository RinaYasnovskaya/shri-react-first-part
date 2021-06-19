import React from 'react';
import { withRouter } from 'react-router';
import { BuildCard } from '../build-list/BuildCard';

const BuildDetail = (props) => {
  const { location: { item } } = props;

  return (
    <div>
      <BuildCard item={item} />
      <div className="log">long text</div>
    </div>
  );
};

export const BuildDetails = withRouter(BuildDetail);
