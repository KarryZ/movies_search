import React, { Component } from 'react';
import './header.css';
import Logo from '../logo';
import AddMovieBtn from '../add-movie-btn';
import Search from '../search';


export default class Header extends Component {
    state = {
      movieData: {
        id: '',
        title: '',
        genres: '',
        release_date: '',
        poster_path: '',
        overview: '',
        runtime: '',
        isOpenDropDown: ''
      }
    }
    render() {
      
        return (
          <div className='header'>
                <div className='container'>
                    <div className='wrapper'>
                        <Logo/>
                        <AddMovieBtn movieData={this.state.movieData} onSubmitForm={this.props.onSubmitForm}/>
                    </div>
                    <h1 className='title'>FIND YOUR MOVIE</h1>
                    <Search/>
                </div>
          </div>
        )
      }
}
