import React, { Component } from 'react';
import './footer.css';
import Logo from '../logo';

export default class Footer extends Component {
    render() {
        return (
          <div className='footer'>
            <Logo/>
          </div>
        )
      }
}
