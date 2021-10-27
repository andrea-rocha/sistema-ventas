import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import './vibe/scss/styles.scss';
import Login from './views/pages/login';
import { Auth0Provider } from "@auth0/auth0-react";
export default function App() {
  return (
    <Auth0Provider
        domain="fenix-misiontic.us.auth0.com"
        clientId="8yfNK7OxpxvHLU71bqVXVc1w6mEJZlwm"
        redirectUri="http://localhost:3000/home"
    >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route component={DashboardLayout} exact/>
        </Switch>
      </BrowserRouter>
    </Auth0Provider>
  );
}
