import React, { Component } from 'react';
import './search-button.css';

export default class SearchButton extends Component {
    render() {
        return (
          <button className='search-button' onClick={e => this.props.onMovieSearch()}>Search</button>
        )
      }
}
