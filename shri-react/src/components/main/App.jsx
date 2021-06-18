import React from 'react';
import { Link, Route } from 'react-router-dom';

export const App = () => {
  return <div>
    <button>
      <Link to="/dashboard">Dashboard</Link>
    </button>
    <div>
      {/* <Route path="/dashboard" component={Dashboard} /> */}
    </div>
  </div>
}
