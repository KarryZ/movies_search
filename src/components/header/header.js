import React from 'react';
import './header.css';
import Logo from '../logo';
import AddMovieBtn from '../add-movie-btn';
import Search from '../search';
import HeaderMovieDetail from '../header-movie-detail'; 
import { withMovieStoreService } from '../hoc';
import { currentMovieIDReceived, deleteCurrentMovieID } from '../../store/actions';
import { compose } from '../../utils';
import { connect } from 'react-redux';

const Header = (props) => {
  const movieData = {
    id: '',
    title: '',
    genres: '',
    release_date: '',
    poster_path: '',
    overview: '',
    runtime: '',
    isOpenDropDown: false
  };


  const isVisibleMainHeader = !props.movieDetailID;

  const onCloseMovieDetail = () => {
    props.deleteCurrentMovieID();
  }

  return (
    <div className='header'>
      {isVisibleMainHeader && <div className='container main-container'>
              <div className='wrapper'>
                  <Logo/>
                  <AddMovieBtn movieData={movieData} onSubmitForm={props.onSubmitForm}/>
              </div>
              <div className='header-content'>
                <h1 className='title'>FIND YOUR MOVIE</h1>
                <Search/>
              </div>
              
          </div>}

          {!isVisibleMainHeader && 
            <HeaderMovieDetail movieDetailData={props.movieDetailData} onCloseMovieDetail={onCloseMovieDetail} />}
  
    </div>
  )

}

const mapStateToProps = ({ moviesList,  movieDetailID}) => {
  const idx = moviesList.findIndex( (el) => el.id === movieDetailID );
  const movieDetailData =  moviesList[idx];
  return { moviesList, movieDetailID, movieDetailData}; 
}

const mapDispatchToProps =  {   
  currentMovieIDReceived,
  deleteCurrentMovieID 
};

export default compose(
  withMovieStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)( Header );