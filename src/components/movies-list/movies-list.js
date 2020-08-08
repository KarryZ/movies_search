import React, { Component } from 'react';
import './movies-list.css';
import MovieItem from '../movie-item';

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
      title: "Bohemian Rhapsody",
      description: "Drama Biography Music",
      year: "2019",
      img: "../../images/movie-cover.jpeg"
    }, {
      key: "m3",
      title: "Bohemian Rhapsody",
      description: "Drama Biography Music",
      year: "2019",
      img: "../../images/movie-cover.jpeg"
    }, {
      key: "m4",
      title: "Bohemian Rhapsody",
      description: "Drama Biography Music",
      year: "2019",
      img: "../../images/movie-cover.jpeg"
    }, {
      key: "m5",
      title: "Bohemian Rhapsody",
      description: "Drama Biography Music",
      year: "2019",
      img: "../../images/movie-cover.jpeg"
    }];
  }

  render() {
    let movieItems = this.data.map((item) => 
      <MovieItem key={item.key} title={item.title} description={item.description} year={item.year}/>
    );
    return (
      <div className='movies-list'>
        {movieItems}
      </div>
    )
  }
}
