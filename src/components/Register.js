import React, { Component } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import './Register.css';

export class Register extends Component {
    constructor(props) {
      super(props)
    
      this.props = props;
    }
  render() {
    return (
      <div className='Register-div'>
          <div className="Register-data">
            <AiOutlineUserAdd className='add_logo'/>
            <p className="Register-data-p">Lorem ipsum dolor sit sitamet , dolor the consectetuur, theadipisicing eliit. Accusantium magsdnam ismolestiae soluta esse sequi laudantium porro nostrum, perferendis thiste itaque recusandae, the </p>
          </div>
          <div className="Register-input">
              <p className="p-user">User Information</p>
              <form onSubmit={this.props.submit} >
                <div className="from-group">
                    <label htmlFor="" className='Email-id'>Email Id of user</label>
                    <input type="text" name="name" className='input-text' required/>
                    <label htmlFor="" className="Email-id">Role</label>
                    <select className="select" name="role">
                        <option value="admin">Admin</option>
                        <option value="owner">Owner</option>
                        <option value="sales">Sales</option>
                    </select>
                </div>
                <div className="btn">
                    <button className='table-button' onClick={this.props.close} >Cancle</button>                
                    <button className="table-add_logo" type='submit'>Add</button> 
                </div>                              
              </form>
          </div>
      </div>
    )
  }
}

export default Register;