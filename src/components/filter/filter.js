import React, { Component } from 'react';
import './filter.css';
import { connect } from 'react-redux';
import { compose } from '../../utils';
import { withMovieStoreService } from '../hoc';
import { saveMovie,  moviesLoaded, moviesError, setFilter } from '../../store/actions';

class Filter extends Component {

  state = { activeItem: null } 

  onFilterEvent = (event) => {
    this.toggleActive(event);
    const value = event.target.innerHTML;
    const sFilterGenre = value === "all" ? [""] : [value];
    this.props.setFilter(sFilterGenre);
    this.props.moviestoreService.getAllMovies(this.props.sorter, sFilterGenre)
    .then((data) => { this.props.moviesLoaded(data)})
    .catch((error) => {this.props.moviesError(error)}) 
  }

  toggleActive(event){
    Array.from(document.getElementsByClassName("filter-list-item")).forEach(item => item.classList.remove("active"));
    event.target.classList.toggle("active")
  }

    render() {      
        return (
          <div className='filter'>
            <ul className='filter-list'>
              <li className='filter-list-item active'  onClick={(e) => { this.onFilterEvent(e)}} >all</li>
              <li className='filter-list-item'onClick={(e) => { this.onFilterEvent(e)}} >Documentary</li>
              <li className='filter-list-item' onClick={(e) => { this.onFilterEvent(e)}} >Comedy</li>
              <li className='filter-list-item' onClick={(e) => { this.onFilterEvent(e)}} >Horror</li>
              <li className='filter-list-item' onClick={(e) => { this.onFilterEvent(e)}} >Crime</li>
            </ul>
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
  setFilter
};

export default compose(
  withMovieStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)( Filter );
