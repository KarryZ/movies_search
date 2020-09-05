import React, { useState } from 'react';
import './header.css';
import Logo from '../logo';
import AddMovieBtn from '../add-movie-btn';
import Search from '../search';
import HeaderMovieDetail from '../header-movie-detail';

const Header = ({moviesList, onSubmitForm, movieDetailData,  onCloseMovieDetail}) => {
  const [movieData] = useState({
    id: '',
    title: '',
    genres: '',
    release_date: '',
    poster_path: '',
    overview: '',
    runtime: '',
    isOpenDropDown: ''
  });

  const isVisibleMainHeader = !movieDetailData;

  return (
    <div className='header'>
      {isVisibleMainHeader && <div className='container main-container'>
              <div className='wrapper'>
                  <Logo/>
                  <AddMovieBtn movieData={movieData} onSubmitForm={onSubmitForm}/>
              </div>
              <div className='header-content'>
                <h1 className='title'>FIND YOUR MOVIE</h1>
                <Search/>
              </div>
              
          </div>}

          {!isVisibleMainHeader && 
            <HeaderMovieDetail movieDetailData={movieDetailData} onCloseMovieDetail={onCloseMovieDetail} />}
  
    </div>
  )

}

export default Header;