import React, { Component } from 'react';
import './modal-dialog.css';
import ReactModal from 'react-modal';
import CloseModalBtn from '../close-modal-btn';
import ResetModalBtn from '../reset-modal-form';
import SubmitModalBtn from '../submit-modal-form';

ReactModal.setAppElement('#root');

export default class ModalDialog extends Component {
  render() {         
    return(
          <ReactModal 
            isOpen={this.props.isOpen}
            contentLabel="Minimal Modal Example">
              <CloseModalBtn handleCloseModal={this.props.handleCloseModal}/>
              <div className='modal-header'>
                <h2>{this.props.title}</h2>
              </div>
              
              <div className='modal-content'>
                <div className='field-input'>
                  <label>Title</label>
                  <input />
                </div>
                <div className='field-input'>
                  <label>Release Date</label>
                  <input type='date' placeholder='Select Date'/>
                </div>
                <div className='field-input'>
                  <label>Movie URL</label>
                  <input />
                </div>
                <div className='field-input' id='genre'>
                  <label>Genre</label>
                  <input placeholder='Select Genre' />
                </div>
                <div className='field-input'>
                  <label>Overview</label>
                  <input  placeholder='Overview Here' />
                </div>
                <div className='field-input'>
                  <label>Runtime</label>
                  <input placeholder='Runtime Here' />
                </div>                
              </div>
              <div className='modal-footer'>
                <ResetModalBtn label='Reset' onResetAction={this.props.onResetAction}/>
                <SubmitModalBtn label='Submit' onSubmitAction={this.props.onSubmitAction}/>      
              </div>
            
          </ReactModal>       
    );
  }
}

