import React from 'react';
import { BuildCard } from './BuildCard';
import { buildList } from '../../../js/test-backend';

export const BuildList = () => {
  const { data } = buildList;

  return (
    <div>
      { data.map(item => <BuildCard item={item} key={item.buildNumber} />) }
    </div>
  );
};
