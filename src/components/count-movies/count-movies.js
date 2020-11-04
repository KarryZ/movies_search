import  React, { Component } from 'react';
import './count-movies.css';
import { connect } from 'react-redux';
import { withMovieStoreService } from '../hoc';
import { compose } from '../../utils';


class CountMovies extends Component {
    render() {
     let {moviesList} = this.props;
        return (
          <div className='count-movies'>
            <p className='movies-number'>{moviesList.length}
              <span className='counter-text'> movies found</span>
            </p>
          </div>
        )
      }
}

const mapStateToProps = ({moviesList}) => {
  return {moviesList};
}

export default compose(
  withMovieStoreService(),
  connect(mapStateToProps)
)(CountMovies);
