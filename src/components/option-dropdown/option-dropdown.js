import React, { Component } from 'react';
import './option-dropdown.css';
import ModalDialog from '../modal-dialog';


export default class OptionDropDown extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModalEdit: false,
      showModalFalse: false
    };
  }

  onOptionHandler = () => {
    console.log('ItemOptions');
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
    let isVisible = this.props.isOpenDropDown;
    let isVisibleModalEdit = this.state.showModalEdit;
    
    return isVisible ? (
      <div className='dropdown-option'>
        <button className='dropdown-option-close' onClick={() => { this.props.onCloseDropDown(this.props.id)}} />
        <ul className='dropdown-option-items'>
          <li className='dropdown-option-item'  onClick={() => {this.handleOpenModal()}} >Edit</li>
          <li className='dropdown-option-item'>Delete</li>
        </ul>
        
        <ModalDialog 
          isOpen={isVisibleModalEdit} 
          title='Edit Movie'
          handleCloseModal={this.handleCloseModal} 
          onResetAction={this.onResetForm} 
          onSubmitAction={this.onSubmitForm}
        />
        
        
      </div>
    ) : '';
  }
}

