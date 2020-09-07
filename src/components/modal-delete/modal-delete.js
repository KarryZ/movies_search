import React, { Component } from 'react';
import './modal-delete.css';
import ReactModal from 'react-modal';
import CloseModalBtn from '../close-modal-btn';


ReactModal.setAppElement('#root');

export default class ModalDelete extends Component {
   
  render() {  
    return(
          <ReactModal className='modal-delete'
            isOpen={this.props.isOpen}
            contentLabel="Minimal Modal Example">
              <CloseModalBtn handleCloseModal={this.props.handleCloseModal}/>
              <div className='modal-header'>
                <h2>DELETE MOVIE</h2>
              </div>
              <div className='modal-content'>
                <h3>Are you sure you want to delete this movie?</h3>
              </div>
              <div className='modal-footer'>
                <button className='confirm-modal-btn' 
                  onClick={(e) => { this.props.onDeleteMovie(this.props.id)}}>
                    Confirm
                </button>    
              </div>
          </ReactModal>       
    );
  }
}

