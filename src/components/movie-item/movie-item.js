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
  constructor(props) {
    super(props);
    this.state = {isOpenDropDown: false};
  }   
  onOptionHandler = (id) => {
    this.setState({isOpenDropDown: true});
  }
  onCloseDropDown = (id) => {
    this.setState({isOpenDropDown: false});
  }

  render() {
    const { title, genres, release_date, poster_path, movieData } = this.props;
    
      
    return (
      <div className='movie-item' >
        <ItemImage poster_path={this.props.poster_path} onOpenMovieDetail={this.props.onOpenMovieDetail} id={this.props.id} />
        <ItemOptions onOptionHandler={this.onOptionHandler} id={this.props.id} />
        <OptionDropDown 
          isOpenDropDown={this.state.isOpenDropDown} 
          id={this.props.id} 
          onCloseDropDown={this.onCloseDropDown}
          movieData={movieData}         
          onDeleteMovie={this.props.onDeleteMovie} />
        
        <div className="wrapper">
          <ItemTitle title={this.props.title} />
          <ItemDate release_date={this.props.release_date} />
        </div>
        <ItemGenres genres={this.props.genres} />
      </div>
    )
  }
}

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired
}