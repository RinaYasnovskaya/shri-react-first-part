import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Footer, Header } from '../index';

export const App = () => {
  const title = "School CI server";

  return (
    <div>

      <Route exact path="/" component={() => <Header title={title} settings={true} />} />
      <Route exact path="/settings" component={() => <Header title={title} settings={false} />} />
      <Footer />
    </div>
  );
}
