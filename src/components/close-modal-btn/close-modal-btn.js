import React, { Component } from 'react';
import './close-modal-btn.css';

export default class CloseModalBtn extends Component {
     render() {
        return (
        <button className='close-modal-btn' onClick={() => {this.props.handleCloseModal()}}></button>
        )
      }
}
