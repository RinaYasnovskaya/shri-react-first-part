import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Footer, Header, StartPage, BuildList, BuildDetails } from '../index';

export const App = () => {
  const title = "School CI server";

  return (
    <div>
      <Route exact path="/" component={() => {
        return (
          <div>
            <Header settings={true} runBuild={true} />
            {/* <StartPage /> */}
            <BuildList />
          </div>
        )
      }} />
      <Route path="/build/:buildId" component={() => {
        return (
          <div>
            <Header title={title} settings={true} rebuild={true} />
            <BuildDetails />
          </div>
        )
      }} />
      <Route exact path="/settings" component={() => <Header title={title} settings={false} />} />
      <Footer />
    </div>
  );
}
