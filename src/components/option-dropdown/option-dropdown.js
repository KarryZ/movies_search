import React, { Component } from 'react';
import './option-dropdown.css';
import ModalDialog from '../modal-dialog';
import ModalDelete from '../modal-delete';


export default class OptionDropDown extends Component {
  constructor (props) {
    super(props);
    this.oSavedMovieData = Object.assign(this.props.movieData);
    this.state = {
      showModalEdit: false,
      showModalDelete: false,
      oSavedMovieData: this.oSavedMovieData
    };
    
  }
  
  handleOpenModal = () => {
    this.setState({ showModalEdit: true });        
  }
  
  handleCloseModal = () => {
    this.setState({ showModalEdit: false });
    this.props.onCloseDropDown(this.props.id);
  }
  
  updatePropertyValue = (data, property,id ) => {
    let newValue = data.target.value;
    if(property === 'genres')  newValue = data.target.value.split(',');
    this.setState(({oSavedMovieData}) => {
      return {
        oSavedMovieData: {...oSavedMovieData, [property]: newValue}
      }
      
    })
  }

  onResetForm = (oldData) => {
    this.setState(({oSavedMovieData}) => {
      return {
        oSavedMovieData: {...oldData}
      }
      
    })
  } 

  handleOpenDeleteModal = () => {
    this.setState({ showModalDelete: true });       
  }

  handleCloseDeleteModal = () => {
    this.setState({ showModalDelete: false });
    this.props.onCloseDropDown(this.props.id);
  }

  render() {    
    let isVisible = this.props.isOpenDropDown;
    let isVisibleModalEdit = this.state.showModalEdit;
    let isVisibleModalDelete = this.state.showModalDelete;
    
    return isVisible ? (
      <div className='dropdown-option'>
        <button className='dropdown-option-close' onClick={() => { this.props.onCloseDropDown(this.props.id)}} />
        <ul className='dropdown-option-items'>
          <li className='dropdown-option-item' onClick={() => {this.handleOpenModal(this.props.id)}} >Edit</li>
          <li className='dropdown-option-item' onClick={() => {this.handleOpenDeleteModal(this.props.id)}}  >Delete</li>
        </ul>
        
        <ModalDialog 
          isOpen={isVisibleModalEdit} 
          title='Edit Movie'
          handleCloseModal={this.handleCloseModal} 
          onResetForm={this.onResetForm}
          onSubmitForm={this.props.onSubmitForm}
          movieData={this.state.oSavedMovieData}
          updatePropertyValue={this.updatePropertyValue}
          isNewMovie={false} />
        
        <ModalDelete 
          isOpen={isVisibleModalDelete} 
          handleCloseModal={this.handleCloseDeleteModal}
          onDeleteMovie={this.props.onDeleteMovie}
          id={this.state.oSavedMovieData.id} />
        
        
      </div>
    ) : '';
  }
}

