import React from 'react';
import './app.css';
import Header from '../header';
import MainSection from '../main-section';
import Footer from '../footer';
import { withMovieStoreService } from '../hoc';


let App = () => {
    return (
      <>
        <Header />
          <MainSection  />       
        <Footer/>
      </>
    )  
}

export default withMovieStoreService()(App);
