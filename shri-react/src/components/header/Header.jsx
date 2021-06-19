import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({title, settings, runBuild, rebuild}) => {
  return (
    <div className="header">
      <div className="header__title">
        {title ? <span className="header__title-main">{title}</span>
              : <span className="header__title-repo">{repoName}</span>}
      </div>
      <div className="header__buttons">
        { settings ? <Link  to="/settings" className="button button__settings"></Link> : ''}
        { runBuild ? <button className="button button__run"></button> : ''}
        { rebuild ? <button className="button button__rebuild"></button> : ''}
      </div>
    </div>
  );
};
