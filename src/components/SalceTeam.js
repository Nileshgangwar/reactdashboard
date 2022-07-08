import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export class SalceTeam extends Component {
  render() {
    return (
      <div className="React-router">
        <Link to="/" className='Go-back'>Go Back</Link>
        <h1 className="react_dom">SalceTeam</h1>
      </div>
    )
  }
}

export default SalceTeam;