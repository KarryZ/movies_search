import React from 'react';
import './main-section.css';
import NavPanel from '../nav-panel';
import CountMovies from '../count-movies';
import MoviesList from '../movies-list';
import { useLocation} from "react-router-dom";
import MovieNotFound from '../page-movie-not-found';


 const MainSection = (props) => { 
  const location = useLocation();
  const sPathname = location.pathname;

        return (
          <div className='main-section'>
            <div className='container'>
              <NavPanel/>
              {sPathname === "/notFound" ? 
                <MovieNotFound /> :
                <>
              <CountMovies/>
              <MoviesList                
                onSubmitForm={props.onSubmitForm}               
                onOpenMovieDetail={props.onOpenMovieDetail}
              />
              </>}
            </div>
          </div>
        )      
}

export default MainSection;