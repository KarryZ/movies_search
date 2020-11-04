import React from 'react';
import './page-error.css';
import Logo from '../logo';
import Footer from '../footer';
import pageNotFoundImage from "../../images/pageNotFound.png";
import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";

const PageError = (props) => {
  const history = useHistory();

  return (
    <Router>
      <>
      <div className='error-page'>

        <div className='error-header'>
          <div className='container'>
            <Logo />
          </div>          
        </div>
        <div className='error-section'>
        <div className='container'>
          <h2>Page Not Found</h2>
            <img className="image" alt="page Not Found" src={pageNotFoundImage} />
            <button className="navHomeButton" onClick={() => { history.push('/Home') }}>
              Go Back To Home
            </button>
        </div>          
        </div>
        <Footer />
        </div>
      </>



    </Router>

  )

}

export default PageError;