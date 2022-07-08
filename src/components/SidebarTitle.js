import React, { Component } from 'react';
import Styled from 'styled-components';
import {Link } from "react-router-dom";

class SidebarTitle extends Component {
    constructor(props) {
      super(props)   
      this.props = props;
    }
    backgroundcolorchange = () => {
        
    }
  render() {
    const StyleSidebar = Styled.div`
        margin-left: 0%;
        width: 200px;
        
    `
    const Styleli = Styled.li`
        list-style: none;
        font-size: 22px;
        color: #4e4b4b;
        margin-left: 26px;
        padding: 15px 0px;
        &:hover{
          background-color: #3bd76f;
      }
    `
    return (
        <StyleSidebar className='sidebar_main' onClick={this.backgroundcolorchange}>
            <Styleli className="Sidebar_li">
              <Link className="Link-li" to='/Products'>
                 Product
              </Link>
            </Styleli>
            <Styleli className="Sidebar_li">
              <Link className="Link-li" to="/DemoScript">
              Demo Script
              </Link>
            </Styleli>
            <Styleli className="Sidebar_li">
              <Link className="Link-li" to="/Coustomers">
                Coustomers
              </Link>
            </Styleli>
            <Styleli className="Sidebar_li">
              <Link className="Link-li" to="/SalceTeams">
                Salce Team
              </Link>
              </Styleli>
            <Styleli className="Sidebar_li">
              <Link className="Link-li" to="/Demo">
                Demos
              </Link>
              </Styleli>
            <Styleli className="Sidebar_li">
              <Link to="" className="Link-li">
                 Settings
              </Link>
              </Styleli>
        </StyleSidebar>
     
    )
  }
}

export default SidebarTitle