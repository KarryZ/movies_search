import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory, useLocation, Redirect } from "react-router-dom";
import './movies-list.css';
import MovieItem from '../movie-item';
import MovieNotFound from '../page-movie-not-found';
import { withMovieStoreService } from '../hoc';
import { getMovies, setSearch } from '../../store/actions';
import { compose } from '../../utils';
import Spinner from '../spinner';

let MoviesList = ({ moviesList, loading, error, sorter, filter, moviestoreService, getMovies, setSearch, onOpenMovieDetail }) => {
  let params = useParams();
  let history = useHistory();
  let location = useLocation();
  let searchValue = params.searchValue;
  let historyLocation = history.location.pathname;


  useEffect(() => {
    if (searchValue) {
      setSearch(searchValue, moviestoreService);
    }
    else if (historyLocation === "/Home") {
      getMovies(sorter, filter, moviestoreService);
    }

  }, [searchValue, historyLocation, sorter, filter, moviestoreService,setSearch, getMovies ])




  if (loading) {
    return <Spinner />
  }
  if (error === 'Error: Something bad happened') {
    return <div>Oopps...Something did wrong</div>
  }
  if (error === 'notFound' && historyLocation !== "/Home") {
    return (
      <Redirect to={{
        pathname: "/notFound",
        state: { from: location }
      }} />
    )
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
      onOpenMovieDetail={onOpenMovieDetail}
      movieData={item}
    />);
  });
  let isDataReceived = !!moviesList.length;
  return (
    <MovieNotFound isDataReceived={isDataReceived} >
      <div className='movies-list'>
        {movieItems}
      </div>
    </MovieNotFound>
  )

}

const mapStateToProps = ({ moviesList, movieDetailData, loading, error, sorter, filter }) => {
  return { moviesList, movieDetailData, loading, error, sorter, filter };
}

const mapDispatchToProps = (dispatch) => ({
  getMovies: (sorter, filter, moviestoreService, searchValue) => {
    return dispatch(getMovies(sorter, filter, moviestoreService, searchValue))
  },
  setSearch: (val, moviestoreService) => {
    return dispatch(setSearch(val, moviestoreService))
  },
});

export default compose(
  withMovieStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(MoviesList);