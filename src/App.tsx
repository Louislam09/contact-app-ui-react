import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Route , Switch } from 'react-router-dom';
import ContactPage from './components/pages/ContactPage';
import CreatePage from './components/pages/CreatePage';
import GroupMemberList from './components/pages/GroupMemberList';
import Home from './components/pages/Home'
import { IContact, IGroup } from './interface';
// import { BrowserRouter as Router,Route, Switch } from 'reaac'

export interface IData {
  contacts : IContact[];
  favoriteContacts : IContact[];
  groups : IGroup[];
}


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/create" component={CreatePage} />
        <Route  path="/contact/:id" component={ContactPage} />
        <Route  path="/group/:id" component={GroupMemberList} />
      </Switch>
    </Router>
  );
}

export default App;
