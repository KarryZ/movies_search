import React, { Component } from 'react';
import { connect } from 'react-redux';
import './movies-list.css';
import MovieItem from '../movie-item';
import ErrorBoudary from '../error-boudary';
import { withMovieStoreService } from '../hoc';
import { moviesLoaded, moviesError } from '../../store/actions';
import { compose } from '../../utils';
import Spinner from '../spinner';

class MoviesList extends Component {

  componentDidMount() {
    const { moviestoreService, moviesLoaded, moviesError, sorter, filter } = this.props;
    moviestoreService.getAllMovies(sorter, filter)
    .then((data) => { moviesLoaded(data)})
    .catch((error) => {moviesError(error)})  
  }

  render() {
    const {moviesList, loading, error} = this.props;
    if( loading ){
      return <Spinner />
    }
    if( error === 'Error: Something bad happened') {
      return <div>Oopps...Something did wrong</div>
    }

    let movieItems = moviesList.map((item) => {
      return (<MovieItem 
        key={item.id} 
        id={item.id}
        title={item.title} 
        genres={item.genres} 
        release_date={item.release_date} 
        poster_path={item.poster_path} 
        overview={item.overview}
        runtime={item.runtime}           
        onOpenMovieDetail={this.props.onOpenMovieDetail}
        movieData={item}
        />);
    });
    let isDataReceived = !!moviesList.length;
    return (
      <ErrorBoudary isDataReceived={isDataReceived} >
        <div className='movies-list'>
          {movieItems}
        </div>
      </ErrorBoudary>
      
    )
  }
}

const mapStateToProps = ({ moviesList, movieDetailData, loading, error, sorter, filter}) => {
  return { moviesList, movieDetailData, loading, error, sorter, filter}; 
}

const mapDispatchToProps =  {   
  moviesLoaded,
  moviesError
};

export default compose(
  withMovieStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(MoviesList);