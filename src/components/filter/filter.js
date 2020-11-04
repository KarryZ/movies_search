import React, { Component } from 'react';
import './filter.css';
import { connect } from 'react-redux';
import { compose } from '../../utils';
import { withMovieStoreService } from '../hoc';
import { getMovies, setFilter } from '../../store/actions';

class Filter extends Component {

  state = { activeItem: null }

  onFilterEvent = (event) => {
    this.toggleActive(event);
    const value = event.target.innerHTML;
    const sFilterGenre = value === "all" ? [""] : [value];
    const { setFilter, getMovies, sorter, moviestoreService } = this.props;
    setFilter(sFilterGenre);
    getMovies(sorter, sFilterGenre, moviestoreService);
  }

  toggleActive(event) {
    Array.from(document.getElementsByClassName("filter-list-item")).forEach(item => item.classList.remove("active"));
    event.target.classList.toggle("active")
  }

  render() {
    return (
      <div className='filter'>
        <ul className='filter-list'>
          <li className='filter-list-item active' onClick={(e) => { this.onFilterEvent(e) }} >all</li>
          <li className='filter-list-item' onClick={(e) => { this.onFilterEvent(e) }} >Documentary</li>
          <li className='filter-list-item' onClick={(e) => { this.onFilterEvent(e) }} >Comedy</li>
          <li className='filter-list-item' onClick={(e) => { this.onFilterEvent(e) }} >Horror</li>
          <li className='filter-list-item' onClick={(e) => { this.onFilterEvent(e) }} >Crime</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (props) => {
  return props;
}

const mapDispatchToProps = (dispatch) => ({
  getMovies: (sorter, filter, moviestoreService) => {
    return dispatch(getMovies(sorter, filter, moviestoreService, ""))
  },
  setFilter: (filter) => {
    return dispatch(setFilter(filter))
  },
});


export default compose(
  withMovieStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(Filter);


