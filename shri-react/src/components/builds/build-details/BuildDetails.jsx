import React from 'react';
import { withRouter } from 'react-router';
import { BuildCard } from '../build-list/BuildCard';

const BuildDetail = (props) => {
  // const { location: { item } } = props;

  if (!location) console.log(props);
  return (
    <div>
      {/* <BuildCard item={item} /> */}
      <div className="log">a lot of text</div>
    </div>
  );
};

export const BuildDetails = withRouter(BuildDetail);
