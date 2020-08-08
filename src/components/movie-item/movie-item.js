import React, { Component } from 'react';
import './movie-item.css';
import ItemImage from '../item-image';
import ItemOptions from '../item-options';
import ItemTitle from '../item-title';
import ItemDate from '../item-date';
import ItemDescription from '../item-description';

export default class MovieItem extends Component {

  render() {
    return (
      <div className='movie-item'>
        <ItemImage/>
        <ItemOptions/>
        <div className="wrapper">
          <ItemTitle/>
          <ItemDate/>
        </div>
        <ItemDescription/>
      </div>
    )
  }
}
