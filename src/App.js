import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import './vibe/scss/styles.scss';
import BlankPage from './views/pages/BlankPage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <BlankPage />
        </Route>
        <Route component={DashboardLayout} exact/>
      </Switch>
    </BrowserRouter>
  );
}
