import React, { Component } from 'react';
import './sorting.css';
import { connect } from 'react-redux';
import { compose } from '../../utils';
import { withMovieStoreService } from '../hoc';
import { saveMovie,  moviesLoaded, moviesError, setSorter } from '../../store/actions';

class Sorting extends Component {
  state= {
    showOptions: false,
    selectedOption: 'release date'
  }

  toggleShowDropdown = ()  => {
    this.setState(({showOptions}) =>{
      return {
        showOptions: !showOptions
      }
    });
  }

  onSelectHandler = (e) => {
    const value = e.target.dataset.option;
    this.setState({selectedOption: value});

    const sortOption = e.target.dataset.sort;
    this.props.setSorter(sortOption);
    this.props.moviestoreService.getAllMovies(sortOption, this.props.filter)
    .then((data) => { this.props.moviesLoaded(data)})
    .catch((error) => {this.props.moviesError(error)}) 
  }

    render() {
      let showOptionsStyles = this.state.showOptions ? 'sorting-dropdown show' : 'sorting-dropdown';
        return (
          <div className='sorting'>
            <div className='sorting-label'>sort by:</div>
            <div className={showOptionsStyles} onClick={this.toggleShowDropdown}>
              <p>{this.state.selectedOption}</p>
              <span className='caret-down'></span>
              <div className='sorting-options'>
              <ul>
                <li className='sorting-option-item' data-option='Release date' data-sort='release_date' onClick={this.onSelectHandler}>Release date</li>
                <li className='sorting-option-item' data-option='Popularity' data-sort='vote_count' onClick={this.onSelectHandler}>Popularity</li>                
              </ul>
            </div>
            </div>
            
          </div>
        )
      }
}


const mapStateToProps = (props) => {
  return props;
}

const mapDispatchToProps =  {   
  saveMovie,
  moviesLoaded,
  moviesError,
  setSorter
};

export default compose(
  withMovieStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)( Sorting );
