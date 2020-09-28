import React, { Component } from 'react';
import './item-image.css';
import { connect } from 'react-redux';
import { withMovieStoreService } from '../hoc';
import {  currentMovieIDReceived } from '../../store/actions';
import { compose } from '../../utils';

class ItemImage extends Component {
    render() {
      var cover = this.props.poster_path;
      var styles= {
       backgroundImage: `url('${cover}')`,
      };
        return (
          <div className='item-image' style={styles} onClick={() => {this.props.currentMovieIDReceived(this.props.id)}} ></div>
        )
      }
}

const mapStateToProps = ({ moviesList, movieDetailData, loading, error}) => {
  return { moviesList, movieDetailData, loading, error}; 
}

const mapDispatchToProps =  {   
  currentMovieIDReceived
};

export default compose(
  withMovieStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ItemImage);