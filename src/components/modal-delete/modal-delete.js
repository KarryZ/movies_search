import React from 'react';
import './modal-delete.css';
import ReactModal from 'react-modal';
import CloseModalBtn from '../close-modal-btn';
import { deleteMovieFromList } from '../../store/actions';
import { connect } from 'react-redux';
import { compose } from '../../utils';
import { withMovieStoreService } from '../hoc';


ReactModal.setAppElement('#root');

const ModalDelete = (props) => {

  const onDeleteMovie = (id) => {
    props.moviestoreService.deleteMovie(id)
    .then(response => {
      if(response.status === 204){
        props.deleteMovieFromList(id);
      }
      
    })
      
  }
    return(
          <ReactModal className='modal-delete'
            isOpen={props.isOpen}
            contentLabel="Minimal Modal Example">
              <CloseModalBtn handleCloseModal={props.handleCloseModal}/>
              <div className='modal-header'>
                <h2>DELETE MOVIE</h2>
              </div>
              <div className='modal-content'>
                <h3>Are you sure you want to delete this movie?</h3>
              </div>
              <div className='modal-footer'>
                <button className='confirm-modal-btn' 
                  onClick={(e) => { onDeleteMovie(props.id)}}>
                    Confirm
                </button>    
              </div>
          </ReactModal>       
    );  
}

const mapStateToProps = (props) => {
  return props;
}

const mapDispatchToProps =  {   
  deleteMovieFromList
};

export default compose(
  withMovieStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)( ModalDelete );