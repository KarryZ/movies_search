import React, { Component } from 'react';
import './modal-dialog.css';
import ReactModal from 'react-modal';
import CloseModalBtn from '../close-modal-btn';
import ResetModalBtn from '../reset-modal-form';
import { saveMovie, moviesError } from '../../store/actions';
import { connect } from 'react-redux';
import { compose } from '../../utils';
import { withMovieStoreService } from '../hoc';
import { Formik, Field, Form } from 'formik';

ReactModal.setAppElement('#root');

class ModalDialog extends Component {
  constructor(props) {
    super(props);
    let oEditMovieData = this.props.movieData;
    this.savedData = {
      id: oEditMovieData.id || '',
      title: oEditMovieData.title || '',
      release_date: oEditMovieData.release_date || '',
      poster_path: oEditMovieData.poster_path || '',
      genres: oEditMovieData.genres || '',
      overview: oEditMovieData.overview || '',
      runtime: oEditMovieData.runtime || ''
    }
  }

  updatePropertyValue = (evt, property) => {
    this.props.updatePropertyValue(evt, property, this.props.movieData.id);

  }

  render() {
    const isNewMovie = this.props.isNewMovie;
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        contentLabel="Minimal Modal Example">
        <CloseModalBtn handleCloseModal={this.props.handleCloseModal} />
        <div className='modal-header'>
          <h2>{this.props.title}</h2>
        </div>
        <Formik
          initialValues={{
            title: this.props.movieData.title,
            release_date: this.props.movieData.release_date,
            poster_path: this.props.movieData.poster_path,
            genres: this.props.movieData.genres,
            overview: this.props.movieData.overview,
            runtime: this.props.movieData.runtime
          }}
          validateOnChange={false}
          validateOnBlur={false}
          validate={values => {
            this.errors = {};
            ["title", "release_date", "poster_path", "genres", "overview", "runtime"].forEach(sKey => {
              if (!values[sKey]) {
                this.errors[sKey] = `Required Field ${sKey}`;
              } else if (sKey === "runtime" && values[sKey] < 0) {
                this.errors[sKey] = `${sKey}: must be larger than or equal to 0`;
              } 
            });

            Object.values(this.errors).length && alert(Object.values(this.errors));

          }}
          onSubmit={(values) => {
            if (Object.keys(this.errors).length === 0) {
              this.props.saveMovie(this.props.movieData, this.props.isNewMovie, this.props.moviestoreService, this.props.sorter, this.props.filter)
                .finally(() => this.props.handleCloseModal())
                .catch((error) => { this.props.moviesError(error) });
            }
          }}
        >{({ handleChange, handleReset }) => (
          <Form>
            {!isNewMovie &&
              <div className='field-input'>
                <label htmlFor="movie-id" >Movie ID</label>
                <div className='movie-id' >{this.props.movieData.id}</div>
              </div>
            }
            <div className='field-input'>
              <label htmlFor="title">Title</label>
              <Field id="title" name="title" onChange={evt => { handleChange(evt); this.updatePropertyValue(evt, 'title') }} />
            </div>

            <div className='field-input'>
              <label htmlFor="release_date">Release Date</label>
              <Field id="release_date" name="release_date" type='date' placeholder='Select Date'
                onChange={evt => { handleChange(evt); this.updatePropertyValue(evt, 'release_date') }} />
            </div>

            <div className='field-input'>
              <label htmlFor="poster_path">Movie URL</label>
              <Field id="poster_path" name="poster_path"
                onChange={evt => { handleChange(evt); this.updatePropertyValue(evt, 'poster_path') }} />
            </div>

            <div className='field-input' id='genre'>
              <label htmlFor="genres" >Genre</label>
              <Field id="genres" name="genres" placeholder='Add Genre'
                onChange={evt => { handleChange(evt); this.updatePropertyValue(evt, 'genres') }} />
            </div>

            <div className='field-input'>
              <label htmlFor="overview" >Overview</label>
              <Field id="overview" name="overview" placeholder='Overview Here'
                onChange={evt => { handleChange(evt); this.updatePropertyValue(evt, 'overview') }} />
            </div>

            <div className='field-input'>
              <label htmlFor="runtime" >Runtime</label>
              <Field id="runtime" name="runtime" placeholder='Runtime Here'
                onChange={evt => { handleChange(evt); this.updatePropertyValue(evt, 'runtime') }} />
            </div>

            <div className='modal-footer'>
              <ResetModalBtn label='Reset'
                onResetAction={(e) => { handleReset(e); this.props.onResetForm(this.savedData) }} />
              <button className='submit-modal-btn' type="submit">
                Submit
           </button>
            </div>
          </Form>
        )}
        </Formik>
      </ReactModal>// <div className='modal-content'>
      ////   {!isNewMovie &&
      //     <div className='field-input'>
      //       <label>Movie ID</label>
      //       <div className='movie-id' >{this.props.movieData.id}</div>
      //     </div>
      //   }



      //   <div className='field-input'>
      //     <label>Title</label>
      //     <input value={this.props.movieData.title} onChange={evt => this.updatePropertyValue(evt, 'title')} />
      //   </div>
      //   <div className='field-input'>
      //     <label>Release Date</label>
      //     <input type='date' placeholder='Select Date' value={this.props.movieData.release_date} onChange={evt => this.updatePropertyValue(evt, 'release_date')} />
      //   </div>
      //   <div className='field-input'>
      //     <label>Movie URL</label>
      //     <input value={this.props.movieData.poster_path} onChange={evt => this.updatePropertyValue(evt, 'poster_path')} />
      //   </div>
      //   <div className='field-input' id='genre'>
      //     <label>Genre</label>
      //     <input placeholder='Add Genre' value={this.props.movieData.genres} onChange={evt => this.updatePropertyValue(evt, 'genres')} />
      //   </div>
      //   <div className='field-input'>
      //     <label>Overview</label>
      //     <input placeholder='Overview Here' value={this.props.movieData.overview} onChange={evt => this.updatePropertyValue(evt, 'overview')} />
      //   </div>
      //   <div className='field-input'>
      //     <label>Runtime</label>
      //     <input placeholder='Runtime Here' value={this.props.movieData.runtime} onChange={evt => this.updatePropertyValue(evt, 'runtime')} />
      //   </div>
      // </div>
      // <div className='modal-footer'>
      //   <ResetModalBtn label='Reset'
      //     onResetAction={(e) => { this.props.onResetForm(this.savedData) }} />
      //   <button className='submit-modal-btn'
      //     onClick={(e) => { this.onSubmitForm(this.props.movieData, this.props.isNewMovie) }}>
      //     Submit
      //         </button>
      // </div>

      // </ReactModal>
    );
  }
}

const mapStateToProps = (props) => {
  return props;
}

const mapDispatchToProps = (dispatch) => ({
  saveMovie: (newMovieData, isNewMovie, moviestoreService, sorter, filter) => {
    return dispatch(saveMovie(newMovieData, isNewMovie, moviestoreService, sorter, filter))
  },
  moviesError: (error) => {
    return dispatch(moviesError(error))
  }
});

export default compose(
  withMovieStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ModalDialog);