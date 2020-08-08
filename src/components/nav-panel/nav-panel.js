import React, { Component } from 'react';
import './nav-panel.css';
import Filter from '../filter';
import Sorting from '../sorting';

export default class NavPanel extends Component {
    render() {
        return (
          <div className='nav-panel'>
            <Filter/>
            <Sorting/>
          </div>
        )
      }
}
