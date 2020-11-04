import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import MovieStoreService from './store/services';
import { MoviesServiceProvider } from './components/movies-service-context';
import store from './store/store';
import PageError from './components/page-error';

import {
  BrowserRouter as Router,
  Route,  
  Switch
} from "react-router-dom";

const movieStoreService = new MovieStoreService();

ReactDOM.render(
  <Provider store={store}>
    <MoviesServiceProvider value={movieStoreService}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} /> 
          <Route exact path="/Home" component={App} />     
          <Route exact path="/search/:searchValue" component={App} />
          <Route exact path="/film/:filmID" component={App} />
          <Route path="/notFound" component={App} />         
          <Route path="*" component={PageError} />          
        </Switch>
      </Router>
    </MoviesServiceProvider>
  </Provider>,
  document.getElementById('root'));
