import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie-item.css';
import ItemImage from '../item-image';
import ItemOptions from '../item-options';
import ItemTitle from '../item-title';
import ItemDate from '../item-date';
import ItemGenres from '../item-genres';
import OptionDropDown from '../option-dropdown';

export default class MovieItem extends Component {
   

  render() {
    const { title, genres, release_date, cover } = this.props;
      
    return (
      <div className='movie-item'>
        <ItemImage cover={cover} />
        <ItemOptions onOptionHandler={this.props.onOptionHandler} movieData={this.props} id={this.props.id} />
        <OptionDropDown isOpenDropDown={this.props.isOpenDropDown} id={this.props.id} onCloseDropDown={this.props.onCloseDropDown} />
        
        <div className="wrapper">
          <ItemTitle title={title} />
          <ItemDate year={release_date} />
        </div>
        <ItemGenres genres={genres} />
      </div>
    )
  }
}

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired
}