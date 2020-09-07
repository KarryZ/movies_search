import React, { Component } from 'react';
import './item-options.css';


export default class ItemOptions extends Component {

  render() {
    return (
      <div className='item-options' onClick={()=> {this.props.onOptionHandler(this.props.id)}} ></div>
    )
  }
}
