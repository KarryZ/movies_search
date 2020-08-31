import React, { Component } from 'react';
import './movies-list.css';
import MovieItem from '../movie-item';
import ErrorBoudary from '../error-boudary';


export default class MoviesList extends Component {
  constructor(props) {
    super();
    this.data = props.moviesList;
    this.state = {
      oData: this.data
    }
  }

  toggleProperty(arr, id, property) {
    const idx = arr.findIndex( (el) => el.id === id );
    const oldItem = arr[idx];
    const newItem = {
        ...oldItem,
        [property]: !oldItem[property]
    }

    const newArr = [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx+1)
    ];
    
    return newArr;

}

  onOptionHandler = (id) => {    
    this.setState(( {oData} ) => {
      return {
        oData: this.toggleProperty(oData, id, "isOpenDropDown")
      }
  })
  }

  onCloseDropDown = (id) => {
    this.onOptionHandler(id);
  }

  render() {
    let movieItems = this.state.oData.map((item) => 
      <MovieItem 
        key={item.id} 
        id={item.id}
        title={item.title} 
        genres={item.genres} 
        release_date={item.release_date} 
        cover={item.poster_path} 
        isOpenDropDown={item.isOpenDropDown} 
        onOptionHandler={this.onOptionHandler}
        onCloseDropDown={this.onCloseDropDown}/>
    );
    let isDataReceived = this.data.length;
    return (
      <ErrorBoudary isDataReceived={isDataReceived} >
        <div className='movies-list'>
          {movieItems}
        </div>
      </ErrorBoudary>
      
    )
  }
}
