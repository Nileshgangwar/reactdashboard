import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export class Demos extends Component {
  render() {
    return (
      <div className="React-router">
        <Link to="/" className='Go-back'>Go Back</Link>
        <h1 className="react_dom">Demos</h1>
      </div>
    )
  }
}

export default Demos;