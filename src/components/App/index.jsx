import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Reservation } from '../Reservation';

export const App = () => (
  <>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/reservation">
          <Reservation />
        </Route>
      </Switch>
    </Router>

    <Footer />
  </>
);
