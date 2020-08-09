import React, { Component } from 'react';
import './movies-list.css';
import MovieItem from '../movie-item';
import ErrorBoudary from '../error-boudary';

export default class MoviesList extends Component {
  constructor() {
    super();
    this.data = [{
      key: "m1",
      title: "Bohemian Rhapsody",
      description: "Drama Biography Music",
      year: "2019",
      img: "../../images/movie-cover.jpeg"
    }, {
      key: "m2",
      title: "Bohemian Rhapsody1",
      description: "Drama Biography Music",
      year: "2019",
      img: "../../images/movie-cover.jpeg"
    }, {
      key: "m3",
      title: "Bohemian Rhapsody2",
      description: "Drama Biography Music",
      year: "2019",
      img: "../../images/movie-cover.jpeg"
    }, {
      key: "m4",
      title: "Bohemian Rhapsody3",
      description: "Drama Biography Music",
      year: "2019",
      img: "../../images/movie-cover.jpeg"
    }, {
      key: "m5",
      title: "Bohemian Rhapsody4",
      description: "Drama Biography Music",
      year: "2019",
      img: "../../images/movie-cover.jpeg"
    }];
  }

  render() {
    let movieItems = this.data.map((item) => 
      <MovieItem key={item.key} title={item.title} description={item.description} year={item.year} cover={item.img} />
    );
    let isDataReceived = this.data.length;
    return (
      <ErrorBoudary isDataReceived={isDataReceived} >
        <div className='movies-list'>
          {movieItems}
        </div>
      </ErrorBoudary>
      
    )
  }
}
