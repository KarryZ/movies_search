import React, { Component } from 'react';
import './item-description.css';

export default class ItemDescription  extends Component {
    render() {
        return (
          <div className='item-description'>
            {this.props.description}
          </div>
        )
      }
}