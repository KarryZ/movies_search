import React, { Component } from 'react';
import './count-movies.css';

export default class CountMovies extends Component {
    render() {
        return (
          <div className='count-movies'>
            <p className='movies-number'>39
              <span className='counter-text'> movies found</span>
            </p>
          </div>
        )
      }
}
