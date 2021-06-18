import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

const StartPageMain = () => {
  return (
    <div>
      <div className="start-Page">
        <img src="../../assets/img/logo 3.svg" alt="" />
        <span>Configure repository connection and synchronization settings</span>
        <Link to="/settings" className="button button_start button_yellow">Open Settings</Link>
      </div>
    </div>
  );
};

export const StartPage = withRouter(StartPageMain);
