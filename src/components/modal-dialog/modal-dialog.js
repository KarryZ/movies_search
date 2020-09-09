import React, { Component } from 'react';
import './modal-dialog.css';
import ReactModal from 'react-modal';
import CloseModalBtn from '../close-modal-btn';
import ResetModalBtn from '../reset-modal-form';

ReactModal.setAppElement('#root');

export default class ModalDialog extends Component {
  constructor(props) {
    super(props);
    let oEditMovieData = props.movieData; 
    this.savedData = {
      id:  oEditMovieData.id || '',
      title: oEditMovieData.title || '',
      release_date: oEditMovieData.release_date || '',
      poster_path: oEditMovieData.poster_path || '',
      genres: oEditMovieData.genres || '',
      overview: oEditMovieData.overview || '',
      runtime: oEditMovieData.runtime || ''
    }
  }

  updatePropertyValue = (evt, property) =>{
    this.props.updatePropertyValue(evt, property, this.props.movieData.id);
  }
 
  render() {  
    const isNewMovie = this.props.isNewMovie;
    return(
          <ReactModal 
            isOpen={this.props.isOpen}
            contentLabel="Minimal Modal Example">
              <CloseModalBtn handleCloseModal={this.props.handleCloseModal}/>
              <div className='modal-header'>
                <h2>{this.props.title}</h2>
              </div>
              
              <div className='modal-content'>
                {!isNewMovie &&
                    <div className='field-input'>
                    <label>Movie ID</label>
                    <div className='movie-id' >{this.props.movieData.id}</div>
                  </div>
                }
                  
               

                <div className='field-input'>
                  <label>Title</label>
                  <input value={this.props.movieData.title} onChange={evt => this.updatePropertyValue(evt, 'title')}/>
                </div>
                <div className='field-input'>
                  <label>Release Date</label>
                  <input type='date' placeholder='Select Date' value={this.props.movieData.release_date} onChange={evt => this.updatePropertyValue(evt, 'release_date')} />
                </div>
                <div className='field-input'>
                  <label>Movie URL</label>
                  <input value={this.props.movieData.poster_path} onChange={evt => this.updatePropertyValue(evt, 'poster_path')} />
                </div>
                <div className='field-input' id='genre'>
                  <label>Genre</label>
                  <input placeholder='Add Genre' value={this.props.movieData.genres} onChange={evt => this.updatePropertyValue(evt, 'genres')} />
                </div>
                <div className='field-input'>
                  <label>Overview</label>
                  <input  placeholder='Overview Here' value={this.props.movieData.overview} onChange={evt => this.updatePropertyValue(evt, 'overview')} />
                </div>
                <div className='field-input'>
                  <label>Runtime</label>
                  <input placeholder='Runtime Here' value={this.props.movieData.runtime} onChange={evt => this.updatePropertyValue(evt, 'runtime')} />
                </div>                
              </div>
              <div className='modal-footer'>
                <ResetModalBtn label='Reset' 
                   onResetAction={(e) => { this.props.onResetForm(this.savedData)}} />
                  <button className='submit-modal-btn' 
                  onClick={(e) => { this.props.onSubmitForm(this.props.movieData, this.props.isNewMovie)}}>
                    Submit
                </button>    
              </div>
            
          </ReactModal>       
    );
  }
}

