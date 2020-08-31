import React, { Component } from 'react';
import './submit-modal-form.css';


export default class SubmitModalBtn extends Component {
     render() {
        return (
        <button className='submit-modal-btn' onClick={() => {this.props.onSubmitAction()}}>{this.props.label}</button>
        )
      }
}
