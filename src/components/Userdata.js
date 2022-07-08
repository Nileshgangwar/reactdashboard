import React, { Component } from 'react';
import Userlist from './userlist';
import { TbCaretUp } from 'react-icons/tb';
import { TbCaretDown } from 'react-icons/tb';
import Register from './Register';
import './UserData.css';

class Userdata extends Component {
    constructor(props) {
      super(props)   
      this.state = {
         Data:[
            {
                name: "amit",
                role: "admin",
                date: "1 day before",
            },
            {
                name: "sumit kumar",
                role: "user",
                date: "23 hour before",
            },
            {
                name: "shidhart takur",
                role: "user",
                date: "15 hour before",
            },
            {    
                name: "john rek",
                role: "user",
                date: "1 hour before",
            },
            
         ],
        isShow : false,
      }
    }
    removehendaler = (personsIndex) => {
       const persons = this.state.Data;
       persons.splice(personsIndex, 1);
       this.setState({persons : persons});
    };
    togglehendaler = () =>{
        this.setState({isShow : !this.state.isShow});
    }
    submithandler = (event) =>{
        const name = event.target.name.value; 
        const role = event.target.role.value; 
        let current = [...this.state.Data];
        current.push({name:name,role:role})
        this.setState({...this.state,Data:current, isShow:false})
        event.preventDefault();

    };
  render() {
    let persons;
    persons = this.state.Data.map((p,index) =>{
        return <Userlist 
        id={index+1} 
        names={p.name}
        role={p.role}
        date={p.date}
        remove={() => this.removehendaler(index)}/>
    })
    return (
      <div className="Userdata-h1">
         <button type='submit' className='adduserbtn' onClick={this.togglehendaler}>Add User</button>
         <table className="table">
            <thead className="table-thead">
                <tr className="table-tr">
                    <th className="table-th">#</th>
                    <th className="table-th">User
                    <TbCaretUp className='table-TbCaretUp'/>
                    <TbCaretDown className='table-TbCaretDown'/>
                    </th>
                    <th className="table-th">Last Signed In
                    <TbCaretUp className='table-TbCaretUp'/>
                    <TbCaretDown className='table-TbCaretDown'/>
                    </th>
                    <th className="table-th">Role
                    <TbCaretUp className='table-TbCaretUp'/>
                    <TbCaretDown className='table-TbCaretDown'/>
                    </th>
                    <th className="table-th"></th>
                </tr>
            </thead>
           {persons}
         </table>
         {this.state.isShow === true ? <Register close={this.togglehendaler} submit={this.submithandler}/> : ""}
         <div className="privese">
             <a href='#' className='close' onClick={this.close}>Previous</a>
             <p className="Close-number green-close">1</p>
             <p className="Close-number">2</p>
             <a href='#' className='close' onClick={this.close}>Next</a>
         </div>
      </div>
    )
  }
}

export default Userdata