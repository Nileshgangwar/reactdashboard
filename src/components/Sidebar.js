import React, { Component } from 'react';
import SidebarTitle from './SidebarTitle';
import Styled from 'styled-components';

export class Sidebar extends Component {
    constructor(props) {
      super(props)   
      this.state = {
        
      }
    }
  render() {
    
    // let Sidebar;
    // Sidebar = this.state.sidebar.map((p) => {
    //     return <SidebarTitle key={p.id} title={p.title}/>
    // })
    const Sidebar2 = Styled.div`
      margin-top: -11px;
      border-top: 1px solid #d4cfcf;
      border-right: 1px solid #d4cfcf;  
    `
    return (
      <Sidebar2>
        <SidebarTitle/>
      </Sidebar2>
    )
  }
}

export default Sidebar;