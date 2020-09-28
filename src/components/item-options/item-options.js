import React, { Component } from 'react';
import './item-options.css';


export default class ItemOptions extends Component {
  onOpenHandler = ()=> {this.props.onOptionHandler(this.props.id)}

  render() {
    return (
      <div className='item-options' onClick={this.onOpenHandler} ></div>
    )
  }
}
