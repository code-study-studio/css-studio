// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import ErrorBoundary from '../containers/ErrorBoundary/ErrorBoundary';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('../Home/Home'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('../About/About'),
  loading: Loading,
});

const Route404 = Loadable({
  loader: () => import('../Route404/Route404'),
  loading: Loading,
});

const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route component={Route404} />
      </Switch>
    </ErrorBoundary>
  </BrowserRouter>
);

export default App;
