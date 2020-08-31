import React, { Component } from 'react';
import './main-section.css';
import NavPanel from '../nav-panel';
import CountMovies from '../count-movies';
import MoviesList from '../movies-list';

export default class MainSection extends Component {
    render() {
        return (
          <div className='main-section'>
            <div className='container'>
              <NavPanel/>
              <CountMovies/>
              <MoviesList moviesList={this.props.moviesList}/>
            </div>
          </div>
        )
      }
}
