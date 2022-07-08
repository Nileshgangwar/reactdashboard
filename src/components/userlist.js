import React, { Component } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

class userlist extends Component {
    constructor(props) {
      super(props)
    
      this.props = props;
    }
  render() {
    return (
      <>
        <tbody>
            <tr>
                <td className='table-td'>{this.props.id}</td>
                <td className='table-td'>{this.props.names}</td>
                <td className='table-td'>{this.props.date}</td>
                <td className='table-td'>{this.props.role}</td>
                <td className='table-icons'>
                  <div className="delete">
                    <RiDeleteBin6Line className='table-delete' onClick={this.props.remove}/>
                  </div>                
                </td>
            </tr>
        </tbody>        
      </>
    )
  }
}

export default userlist;