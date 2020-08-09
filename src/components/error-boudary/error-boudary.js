import React, { Component } from 'react';
import './error-boudary.css';

export default class ErrorBoudary extends Component {
    render() {
      const errorMessage = (
        <h2 className='error-message'>
          Oops, something went wrong...
        </h2>
      );
      let isDataReceived = this.props.isDataReceived;
        return (
          <>
            {isDataReceived? this.props.children : errorMessage}
          </>
        )
      }
}
