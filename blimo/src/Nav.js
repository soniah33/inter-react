import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div>
                    
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to='/home' className="navbar-brand" >Home</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to='/about' className="nav-link" >About </Link>
              </li>
              <li className="nav-item">
                <Link to='/services' className="nav-link" >Services </Link>
              </li>
              <li className="nav-item">
              <Link to='/contact' className="nav-link" >Contact </Link>
              </li>
            </ul>
          </div>
        </nav>
          </div>

    )


}


export default Nav


//CLASS NOTES AND ASSIGNMENTS FRO APP.JS
 // CONTROLLED COMPONENTS, (REACT FORMS)
 import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css"


class App extends Component{
    constructor(){
        super()
        this.state = {
            username:'',
            email:'',
            password:''
        }
    }

    changeUsername = (event) =>{
        this.setState({
            username:event.target.value
        })
    }
    changeEmail = (event) =>{
        this.setState({
            email:event.target.value
        })
    }
    changePassword = (event) =>{
        this.setState({
            password:event.target.value
        })
    } 

     render() { 
         return ( 
             <div>
                 <form>
                     <input type="text"
                     placeholder="username"
                     onChange={this.changeUsername}
                     className="form-group form-control"
                     value={this.state.username}
                     />

                     <input type="email"
                     placeholder="Email"
                     onChange={this.changeEmail}
                     className="form-group form-control"
                     value={this.state.email}
                     />

                     <input type="password"
                     placeholder="Password"
                     onChange={this.changePassword}
                     className="form-group form-control"
                     value={this.state.password}
                     />

                 </form>
                 <h1>{this.state.username}</h1>
                 <h1>{this.state.email}</h1>
                 <h1>{this.state.password}</h1>

             </div>
          );
     }
 }
  
 export default App;
   
 