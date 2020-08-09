import React, { Component } from 'react';
import './movie-item.css';
import ItemImage from '../item-image';
import ItemOptions from '../item-options';
import ItemTitle from '../item-title';
import ItemDate from '../item-date';
import ItemDescription from '../item-description';
import PropTypes from 'prop-types';

export default class MovieItem extends Component {

  render() {
    const { title, description, year, cover } = this.props;
    
    return (
      <div className='movie-item'>
        <ItemImage cover={cover} />
        <ItemOptions/>
        <div className="wrapper">
          <ItemTitle title={title} />
          <ItemDate year={year} />
        </div>
        <ItemDescription description={description} />
      </div>
    )
  }
}

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}