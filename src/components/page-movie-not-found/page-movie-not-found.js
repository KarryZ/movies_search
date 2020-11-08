import React from 'react';
import './page-movie-not-found.css';


const MovieNotFound = (props) => {
  const movieNotFoundPage = (
    <div className="movieNotFoundPage">
      <h2 className="message">
        No Movie Found
      </h2>
    </div>
  );

  return (
    <>
      {props.isDataReceived ? props.children : movieNotFoundPage}
    </>
  )
  
}

export default MovieNotFound;