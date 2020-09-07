import React, { Component } from 'react';
import './app.css';
import Header from '../header';
import MainSection from '../main-section';
import Footer from '../footer';
import aData from '../../data/movies.json';


export default class App extends Component {

  constructor() {
    super();
    this.maxid = 100;
    aData.forEach((item) => {
      item.isOpenDropDown = false;
    })
    this.state = {
      aData: aData,
      movieDetailData: null
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
    this.setState(( {aData} ) => {
      return {
        aData: this.toggleProperty(aData, id, "isOpenDropDown")
      }
  })
  }

  onCloseDropDown = (id) => {
    this.onOptionHandler(id);
  }

  createData(newData) {
    return  {
      budget: newData.budget || '',
      genres: newData.genres || [],
      id: this.maxid++,
      isOpenDropDown: false,
      overview: newData.overview || '',
      poster_path: newData.poster_path || '',
      release_date: newData.release_date || '',
      revenue: newData.revenue || '',
      runtime: newData.runtime || '',
      tagline: newData.tagline || '',
      title: newData.title || '',
      vote_average: newData.vote_average || '',
      vote_count: newData.vote_count || ''
    };
  }

  saveEditedMovie(aData, changedData) {
    const id = changedData.id;
    const idx = aData.findIndex( (el) => el.id === id );
    const newItem = {
      ...changedData,
      isOpenDropDown: false
    }

  const newArr = [
      ...aData.slice(0, idx),
      newItem,
      ...aData.slice(idx+1)
  ];
  
  return newArr;
  }

  onSubmitForm = (data, isNewMovie) => {
    if(isNewMovie){
      const newItem = this.createData(data);
      this.setState( ( {aData} ) => {
        const newArr = [...aData, newItem];
        return {
          aData: newArr
        }
      })
    } else {
      this.setState(( {aData} ) => {
        return {
          aData: this.saveEditedMovie(aData, data)
        }
       })
    }  

  }

  onDeleteMovie = (id) => {
    this.setState(( {aData} )=> {
      const idx = aData.findIndex( (el) => el.id === id );
      const newArr = [
          ...aData.slice(0, idx),
          ...aData.slice(idx+1)
      ];

      return {
        aData: newArr
      }
  })
  }

  onCloseMovieDetail = () => {
    this.setState({movieDetailData: null})
  }

  onOpenMovieDetail = (id) => {
    const idx = aData.findIndex( (el) => el.id === id );
    this.setState(( {aData}) => {
      return {
      movieDetailData: aData[idx]
      }
    })
  }
  

  render() {
    return (
      <>
        <Header 
          moviesList={this.state.aData} 
          onSubmitForm={this.onSubmitForm}
          movieDetailData={this.state.movieDetailData}          
          onCloseMovieDetail={this.onCloseMovieDetail}/>
        <MainSection 
          moviesList={this.state.aData} 
          onOptionHandler={this.onOptionHandler}
          onCloseDropDown={this.onCloseDropDown}
          onSubmitForm={this.onSubmitForm}
          onDeleteMovie={this.onDeleteMovie}
          onOpenMovieDetail={this.onOpenMovieDetail}
          />
        <Footer/>
      </>
    )
  }
}
