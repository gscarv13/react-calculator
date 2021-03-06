import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Quote from './Quote';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calculator" component={App} />
      <Route exact path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Router;
