import React, { Component } from 'react';
import './app.css';
import Header from '../header';
import MainSection from '../main-section';
import Footer from '../footer';
import oData from '../../data/movies.json';


export default class App extends Component {

  constructor() {
    super();
    oData.forEach((item) => {
      item.isOpenDropDown = false;
    })
  }

  addNewMovie() {

  }

  render() {
    return (
      <>
        <Header/>
        <MainSection moviesList={oData}/>
        <Footer/>
      </>
    )
  }
}
