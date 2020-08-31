import React, { Component } from 'react';
import './add-movie-btn.css';
import ModalDialog from '../modal-dialog';


export default class AddMovieBtn extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModalEdit: false
    };
  }
  
  handleOpenModal = () => {
    this.setState({ showModalEdit: true });
  }
  
  handleCloseModal = () => {
    this.setState({ showModalEdit: false });
  }
  onResetForm = (e) => {
    console.log('Reset');
  }
  onSubmitForm = () => {
    console.log('Submit');
  }
    
    render() {
      let isVisibleModalEdit = this.state.showModalEdit;
        return (
        <>
          <button className='add-movie' onClick={() => {this.handleOpenModal()}}>+ Add Movie</button>
          
          <ModalDialog 
          isOpen={isVisibleModalEdit} 
          title='Add Movie'
          handleCloseModal={this.handleCloseModal} 
          onResetAction={this.onResetForm} 
          onSubmitAction={this.onSubmitForm}
        />
              
              
        </>
        )
      }
}
