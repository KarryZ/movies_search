import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import MovieStoreService from './store/services';
import { MoviesServiceProvider } from './components/movies-service-context';
import store from './store/store';

const movieStoreService = new MovieStoreService();

ReactDOM.render(
  <Provider store={store}>
    <MoviesServiceProvider value={movieStoreService}>
        <App/>
    </MoviesServiceProvider>    
  </Provider>,
  document.getElementById('root'));
