import React, { Component } from 'react';
import './sorting.css';

export default class Sorting extends Component {
    render() {
        return (
          <div className='sorting'>
            <div className='sorting-label'>sort by:</div>
            <div className='sorting-dropdown'>release date</div>
          </div>
        )
      }
}
