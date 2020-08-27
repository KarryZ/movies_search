import React, { Component } from 'react';
import './item-date.css';

export default class ItemDate extends Component {
    render() {
        return (
          <div className='item-date'>
            {this.props.year}
          </div>
        )
      }
}
