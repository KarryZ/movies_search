import React, { Component } from 'react';
import './item-image.css';

export default class ItemImage extends Component {
    render() {
      var cover = this.props.cover;
      var styles= {
       backgroundImage: `url('${cover}')`,
      };
        return (
          <div className='item-image' style={styles}></div>
        )
      }
}
