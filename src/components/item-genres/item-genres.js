import React, { Component } from 'react';
import './item-genres.css';

export default class ItemGenres  extends Component {
    render() {
      this.aGenres = this.props.genres ? this.props.genres.join(" ") : '';
        return (
          <div className='item-genres'>
            {this.aGenres}
          </div>
        )
      }
}
