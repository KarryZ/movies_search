import React, { Component } from 'react';
import './sorting.css';

export default class Sorting extends Component {
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
    this.setState({selectedOption: value})
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
                <li className='sorting-option-item' data-option='Release date' onClick={this.onSelectHandler}>Release date</li>
                <li className='sorting-option-item' data-option='Popularity' onClick={this.onSelectHandler}>Popularity</li>                
              </ul>
            </div>
            </div>
            
          </div>
        )
      }
}
