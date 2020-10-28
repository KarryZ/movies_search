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
              <MoviesList                
                onSubmitForm={this.props.onSubmitForm}               
                onOpenMovieDetail={this.props.onOpenMovieDetail}
              />
            </div>
          </div>
        )
      }
}
