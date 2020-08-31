import React, { Component } from 'react';
import './item-date.css';

export default class ItemDate extends Component {
    render() {
      var sYear = this.props.year.split("-")[0];
      
        return (
          <div className='item-date'>
            {sYear}
          </div>
        )
      }
}
