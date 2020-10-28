import React, { Component } from 'react';
import './app.css';
import Header from '../header';
import MainSection from '../main-section';
import Footer from '../footer';
import { withMovieStoreService } from '../hoc';


 class App extends Component {

  constructor(props) {
    super();     
    this.state = {
      moviesList: [],
      movieDetailData: null
    }
  } 

  onOpenMovieDetail = (id) => {
    
    this.setState(( {moviesList}) => {
      return {
      movieDetailData: (() =>{
        const idx = moviesList.findIndex( (el) => el.id === id );
        return moviesList[idx];
      })()
      }
    })
   
  }
  

  render() {
    return (
      <>
        <Header />
        <MainSection onOpenMovieDetail={this.onOpenMovieDetail} />
        <Footer/>
      </>
    )
  }
}

export default withMovieStoreService()(App);
