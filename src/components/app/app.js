import React, { Component } from 'react';
import './app.css';
import Header from '../header';
import MainSection from '../main-section';
import Footer from '../footer';



export default class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <MainSection/>
        <Footer/>
      </>
    )
  }
}
