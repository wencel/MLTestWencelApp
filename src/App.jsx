import 'index.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SearchPage from 'pages/SearchPage';
import NotFoundPage from 'pages/NotFoundPage';
import SearchResults from 'pages/SearchResults';
import ItemDetail from 'pages/ItemDetail';

const App = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <SearchPage />
        </Route>
        <Route path='/items' exact>
          <SearchResults />
        </Route>
        <Route path='/items/:id' exact>
          <ItemDetail />
        </Route>
        <Route path='/'>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
