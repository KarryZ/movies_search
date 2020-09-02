import React, { Component } from 'react';
import './movies-list.css';
import MovieItem from '../movie-item';
import ErrorBoudary from '../error-boudary';


export default class MoviesList extends Component {
  render() {
    this.aData = this.props.moviesList;
    let movieItems = this.props.moviesList.map((item) => {
      return (<MovieItem 
        key={item.id} 
        id={item.id}
        title={item.title} 
        genres={item.genres} 
        release_date={item.release_date} 
        poster_path={item.poster_path} 
        overview={item.overview}
        runtime={item.runtime}
        isOpenDropDown={item.isOpenDropDown} 
        onOptionHandler={this.props.onOptionHandler}
        onCloseDropDown={this.props.onCloseDropDown}
        onSubmitForm={this.props.onSubmitForm}
        />);
    });
    let isDataReceived = this.aData.length;
    return (
      <ErrorBoudary isDataReceived={isDataReceived} >
        <div className='movies-list'>
          {movieItems}
        </div>
      </ErrorBoudary>
      
    )
  }
}
