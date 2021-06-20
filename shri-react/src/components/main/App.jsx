import React from 'react';
import { Route } from 'react-router-dom';
import { Footer, Header, StartPage, BuildList, BuildDetails, Settings } from '../index';
import '../../assets/scss/main.scss';

export const App = () => {
  const title = "School CI server";

  return (
    <div id="main-block">
      <Route exact path="/" component={() => {
        return (
          <div className="header-content">
            <Header settings={true} runBuild={false} />
            <StartPage />
            {/* <BuildList /> */}
          </div>
        )
      }} />
      <Route path="/build/:buildId" component={() => {
        return (
          <div className="header-content">
            <Header settings={true} rebuild={true} />
            <BuildDetails />
          </div>
        )
      }} />
      <Route exact path="/settings" component={() => {
        return (
          <div className="header-content">
            <Header title={title} settings={false} />
            <Settings />
          </div>
        )
      }} />
      <Footer />
    </div>
  );
}
