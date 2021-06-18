import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({title, repoName, settings, runBuild, rebuild}) => {

  return (
    <div className="header">
      <div className="header__title">
        {title ? title : repoName}
      </div>
      <div className="header__buttons">
        { settings ? <button className="button button__settings"><Link to="/settings"></Link></button> : ''}
        { runBuild ? <button className="button button__run"></button> : ''}
        { rebuild ? <button className="button button__rebuild"></button> : ''}
      </div>
    </div>
  );
};
