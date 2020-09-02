import React, { Component } from 'react';
import './add-movie-btn.css';
import ModalDialog from '../modal-dialog';


export default class AddMovieBtn extends Component {
  constructor (props) {
    super(props);
    this.oSavedMovieData = Object.assign(this.props.movieData);
    this.state = {
      showModalEdit: false,
      oSavedMovieData: this.oSavedMovieData
    };
  }
  
  handleOpenModal = () => {
    this.setState({
      showModalEdit: true,
     });
  }
  
  handleCloseModal = () => {
    this.setState({ showModalEdit: false,
      oSavedMovieData: this.oSavedMovieData });
  }

  _updatePropertyValue(aData, property, newValue, id) {
    const idx = aData.findIndex( (el) => el.id === id );
    const oldItem = aData[idx];
    const newItem = {
        ...oldItem,
        [property]: newValue
    }

    const newArr = [
        ...aData.slice(0, idx),
        newItem,
        ...aData.slice(idx+1)
    ];
    
    return newArr;
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
  onSubmit = (data, isNewMovie) => {
    this.handleCloseModal();
    return this.props.onSubmitForm(data, isNewMovie);
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
            onResetForm={this.onResetForm}
            onSubmitForm={this.onSubmit}
            movieData={this.state.oSavedMovieData}
            updatePropertyValue={this.updatePropertyValue}         
            isNewMovie={true}
          />     
        </>
        )
      }
}
