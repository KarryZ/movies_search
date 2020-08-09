import React, { Component } from 'react';
import './item-title.css';

export default class ItemTitle extends Component {
    render() {
        return (
          <div className='item-title'>
            {this.props.title}
          </div>
        )
      }
}
