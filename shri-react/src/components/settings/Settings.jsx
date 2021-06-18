import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

const SettingsMain = () => {


  return (
    <form action="">
      <p className="form__title">
        <span className="form__title-main" id="title_settings">Settings</span>
        <span className="form__title-description" id="description_settings">
          Configure repository connection and synchronization settings.
        </span>
      </p>
      <div>
        <label id="repo_name">
          GitHub repository <span className="red-start">*</span>
          <input required type="text" value="" onChange="" />
        </label>
        <label id="build_command">
          Build Command <span className="red-start">*</span>
          <input required type="text" value="" onChange="" />
        </label>
        <label id="build_command">
          Main Branch
          <input type="text" value="" onChange="" />
        </label>
        <label id="build_command">
          Synchronize every <input type="number" value="" onChange="" /> minutes
        </label>
        <input type="submit" value="Submit" />
        <input type="button" value="Cancel" />
      </div>
    </form>
  );
};

export const Settings = withRouter(SettingsMain);
