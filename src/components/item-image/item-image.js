import React, { Component } from 'react';
import './item-image.css';

export default class ItemImage extends Component {
    render() {
      var cover = this.props.poster_path;
      var styles= {
       backgroundImage: `url('${cover}')`,
      };
        return (
          <div className='item-image' style={styles} onClick={() => {this.props.onOpenMovieDetail(this.props.id)}} ></div>
        )
      }
}
