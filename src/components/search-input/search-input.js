import React, { Component } from 'react';
import './search-input.css';

export default class SearchInput extends Component {
    render() {
        return (
          <input className='search-input' value={this.props.searchValue} onChange={e => this.props.onSearchTextChanged(e)}/>
        )
      }
}
