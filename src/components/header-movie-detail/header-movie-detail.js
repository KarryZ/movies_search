import React, { useState } from 'react';
import './header-movie-detail.css';
import Logo from '../logo';
import BackButton from '../back-button';
import ItemImage from '../item-image'; 


const HeaderMovieDetail = ({movieDetailData, onCloseMovieDetail} ) => {

  const [releaseDate] = useState(movieDetailData.release_date);

    return (    
       <div className='container detail-container'>
              <div className='wrapper'>
                  <Logo/>
                  <BackButton onCloseMovieDetail={onCloseMovieDetail}/>
              </div>
              <div  className='detail-content'>
                <ItemImage poster_path={movieDetailData.poster_path} />
                <div className='detail-info'>
                  <div className='detail-info_title'>
                    <h1>{movieDetailData.title}</h1>
                    <div className='movie-rating'>{movieDetailData.vote_average}</div>
                  </div>                  
                  <div className='movie-tagline'>{movieDetailData.tagline}</div>
                  <div className='detail-info__wrap'>
                    <div className='movie-year'>{releaseDate.slice(0, 4)}</div>
                    <div className='movie-runtime'>{`${movieDetailData.runtime} min`}</div>
                  </div>                  
                  <div className='movie-overview'>{movieDetailData.overview}</div>
                </div>
              </div>
          </div> 
    
  )
  
}

export default HeaderMovieDetail;
