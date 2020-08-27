import React, { Component } from 'react';
import './search.css';
import SearchInput from '../search-input';
import SearchButton from '../search-button';

export default class Search extends Component {
    render() {
        return (
          <div className='search'>
            <SearchInput/>
            <SearchButton/>
          </div>
        )
      }
}
