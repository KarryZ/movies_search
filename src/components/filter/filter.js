import React, { Component } from 'react';
import './filter.css';

export default class Filter extends Component {
    render() {
        return (
          <div className='filter'>
            <ul className='filter-list'>
              <li className='filter-list-item active'>all</li>
              <li className='filter-list-item'>documentary</li>
              <li className='filter-list-item'>comedy</li>
              <li className='filter-list-item'>horror</li>
              <li className='filter-list-item'>crime</li>
            </ul>
          </div>
        )
      }
}
