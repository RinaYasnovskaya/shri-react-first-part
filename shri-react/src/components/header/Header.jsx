import React from 'react';
import { Link } from 'react-router-dom';
import { buildSettings } from '../../js/test-backend';
import './header.scss';

export const Header = ({title, settings, runBuild, rebuild}) => {
  const { data: { repoName } } = buildSettings;
  const textClassSettings = ((runBuild || rebuild) && settings) ? ['little', ''] : ['long', 'Settings'];

  return (
    <div className="header">
      <div className="header__title">
        {title ? <span className="header__title-main">{title}</span>
              : <span className="header__title-repo">{repoName}</span>}
      </div>
      <div className="header__buttons">
        { runBuild ? <button className="button button_light button__run">Run Build</button> : ''}
        { rebuild ? <button className="button button_light button__rebuild">Rebuild</button> : ''}
        { settings ? <Link  to="/settings"
            className={
              `button button_light button__settings button__settings_${textClassSettings[0]}`
            }>{textClassSettings[1]}</Link> : ''}
      </div>
    </div>
  );
};
