 // CONTROLLED COMPONENTS, (REACT FORMS)
 import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css"


class App extends Component{
    constructor(){
        super()
        this.state = {
            firstname:'',
            secondname:'',
            dateOfBirth:'',
            county:'',
            telephonenumber:'',
            email:'',
            nationalIdNumber:'',
            votersNumber:''

        }
    }

    changeFirstname = (event) =>{
        this.setState({
            firstname:event.target.value
        })
    }
    changeSecondname = (event) =>{
        this.setState({
            secondname:event.target.value
        })
    }
    changeDOB = (event) =>{
        this.setState({
            dateOfBirth:event.target.value
        })
    }
    changeCounty = (event) =>{
        this.setState({
            county:event.target.value
        })
    }
    changeTelephone = (event) =>{
        this.setState({
            telephonenumber:event.target.value
        })
    }
    changeEmail = (event) =>{
        this.setState({
            email:event.target.value
        })
    }
    changeNationalIdNumber = (event) =>{
        this.setState({
            nationalIdNumber:event.target.value
        })
    } 
    changeVotersNumber = (event) =>{
        this.setState({
            votersNumber:event.target.value
        })
    }

    render = () =>{ 
        return ( 
          <div>
              <form>
                    <div>
                        <h1 className="text-centre">UGANDA VOTERS REGISTRATION FORM</h1>
                    </div>
                    <div>
                        <label for="Firstname">First Name</label>
                        <input type="text"
                        placeholder="Firstname"
                        onChange={this.changeFirstname}
                        className="form-group form-control"
                        value={this.state.firstname}
                        />
                    </div>
                        
                    <div>
                        <label for="Secondname">Second Name</label>
                        <input type="text"
                        placeholder="Secondname"
                        onChange={this.changeSecondname}
                        className="form-group form-control"
                        value={this.state.secondname}
                        />
                    </div>
                        
                    <div>
                        <label for="Date Of Birth">Date Of Birth</label>
                        <input type="date"
                        placeholder="Date Of Birth"
                        onChange={this.DOB}
                        className="form-group form-control"
                        value={this.state.dateOfBirth}
                        />
                    </div>
                    <div>
                        <label for="gender">Gender</label>
                        <input type="radio" 
                        id="male" name="gender" className="form-group form-control" 
                        value="male"/>
                        <label for="male">Male</label>
                        <input type="radio"
                        id="famale" name="gender" className="form-group form-control"
                        value="female"/>
                        <label for="female">Female</label>                        
                    </div>

                    <div>
                        <label for="County">County</label>
                        <input type="text"
                        placeholder="County"
                        onChange={this.County}
                        className="form-group form-control"
                        value={this.state.county}
                        />
                    </div>

                    <div>
                        <label for="Telephonenumber">Telephone Number</label>
                        <input type="number"
                        placeholder="Telephone Number"
                        onChange={this.Telephonenumber}
                        className="form-group form-control"
                        value={this.state.telephonenumber}
                        />
                    </div>

                    <div>
                        <label for="email">Email</label>
                        <input type="email"
                        placeholder="Email"
                        onChange={this.changeEmail}
                        className="form-group form-control"
                        value={this.state.email}
                        />
                    </div>

                    <div>
                        <label for="NationalIdNumber">National Id Number</label>
                        <input type="text"
                        placeholder="National Id Number"
                        onChange={this.NationalIdNumber}
                        className="form-group form-control"
                        value={this.state.nationalIdNumber}
                        />
                    </div>

                    <div>
                        <label for="VotersNumber">Voter"s Number</label>
                        <input type="text"
                        placeholder="VotersNumber"
                        onChange={this.changeVotersNumber}
                        className="form-group form-control"
                        value={this.state.votersNumber}
                        />
                    </div>

                    <div>
                        <input type="checkbox"
                        id="Confirm" name="Confirm"
                        value="Confirm"/>
                        <label for="Confirm">I confirm that the information filled in above is accurate to the best of my ability.</label>
                    </div>

                    <div>
                        <input type="submit"
                        className="form-group form-control"
                        value="Submit"/>
                    </div>

                    <div>
                        <h1 className="text-centre">For more Information, Contact</h1>
                    </div>
                    <div>
                        <h1 className="text-centre">email: nationalvotersforum@gmail.com</h1>
                    </div>
                    <div>
                        <h1 className="text-centre">+256 789123451   +256 708090213   +256 798023459</h1>
                    </div>
             </form>
         </div>
        );
         
         
    }
 
} 
export default App;   