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
    const { title, genres, release_date, poster_path } = this.props;
    const movieData = {
      id: this.props.id,
      title: this.props.title,
      genres: this.props.genres,
      release_date: this.props.release_date,
      poster_path: this.props.poster_path,
      overview: this.props.overview,
      runtime: this.props.runtime,
      isOpenDropDown: this.props.isOpenDropDown
    };
      
    return (
      <div className='movie-item'>
        <ItemImage poster_path={poster_path} />
        <ItemOptions onOptionHandler={this.props.onOptionHandler} id={this.props.id} />
        <OptionDropDown 
          isOpenDropDown={this.props.isOpenDropDown} 
          id={this.props.id} 
          onCloseDropDown={this.props.onCloseDropDown}
          movieData={movieData}
          onSubmitForm={this.props.onSubmitForm} />
        
        <div className="wrapper">
          <ItemTitle title={title} />
          <ItemDate release_date={release_date} />
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