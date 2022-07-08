import React, { Component } from 'react';
// import styled from 'styled-components';
import './Navbar.css';

class Navbar extends Component {
  
  render() {
    return (
      <div>
        <nav className="navbar_main">
            <div className="logo">
                <div className="logo192">1</div>
                <p className="logo_my">my application</p>
                <div className="username">
                    <div className="img">0</div>
                    <div className="User_name">Amit gangwar</div>    
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;