import React from 'react';
import './page-movie-not-found.css';


const MovieNotFound = (props) => {
  let isDataReceived = props.isDataReceived;

  const movieNotFoundPage = (
    <div className="movieNotFoundPage">
      <h2 className="message">
        No Movie Found
      </h2>
    </div>
  );

  return (
    <>
      {isDataReceived ? props.children : movieNotFoundPage}
    </>
  )

}

export default MovieNotFound;