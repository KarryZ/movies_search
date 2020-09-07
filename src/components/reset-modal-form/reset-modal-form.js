import React, { Component } from 'react';
import './reset-modal-form.css';


export default class ResetModalBtn extends Component {
     render() {
        return (
        <button className='reset-modal-btn' onClick={() => {this.props.onResetAction()}}>{this.props.label}</button>
        )
      }
}
