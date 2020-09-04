import React from 'react'
import "./index.css"
 function Services() {
     return(
         <div>
             <h3 className="fourth-style">Services Offered</h3>
             <u1>
                 <li className="third-style">Booking Venues</li>
                 <li className="third-style">Transportation</li>
                 <li className="third-style">Accommodation</li>
                 <li className="third-style">Meals,Snacks and Drinks</li>
                 <li className="third-style">Shopping</li>
                 <li className="third-style">Tour Guides</li>
                 <li className="third-style">Games and Fun activities</li>
             </u1>
         </div>
     )
 }

 export default Services


 //CLASSWORK AND ASSIGNMENTS FROM APP.JS
 /*import React from 'react'
//import React, { Component } from 'react';
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Nav from './Nav'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route} from 'react-router-dom'
*/

/*function App(){
    return(
        <div>
            <h3>this is my zone</h3>
            <u1>
                <li>one</li>
                <li>two</li>
                <li>three</li>
                </u1>

        </div>
    )
}
*/
/*function App(){
    return(
        <div>
            <BrowserRouter>
            <Nav />
            <Route path='/home' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/services' component={Services} />
            <Route path='/contact' component={Contact} />
            </BrowserRouter>
           
        </div>

    )
}
export default App
*/

/*import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super()
        this.state = {
            baseNumber:34,
            rooms:4,
            name:"John"

        }
    }
    */
   /*HOW TO BIND
        this.clickChange = this.clickChange.bind(this)
    */
   /* clickChange = () =>{
        this.setState({
            baseNumber:this.state.baseNumber + 1
        })
    }
    render() { 
        return ( 
            <div>
                <h1>{this.state.baseNumber}</h1>
                <button onClick={this.clickChange}>Click Me To Add</button>
                
            </div>
         );
    }
}
 
export default App;
*/

import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
//import Home from './Home'

class App extends Component {
    constructor(){
        super()
        this.state = {
            likes:0
            
        }
    }
     clickLike = () =>{
         this.setState({
             likes:this.state.likes + 1
         })
     }
    
    render() { 
        return ( 
            <div>  
             <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" >
                     <img src="https://res.cloudinary.com/dg2udsocr/image/upload/v1598639348/jackson-david-PdniSFPlBdQ-unsplash_1_oicmzj.jpg" width="100" height="100" alt="" loading="lazy"/>
                    </a>
              </nav>
              <div className="container">
                  <div className="row" style={{backgroundColor:"lavender", width: "100rem", height: "1100px"}}>
                      <div className="col-4">
                            <div className="card" style={{width: "25rem", height: "110px"}}>
                                    <img src="https://res.cloudinary.com/dg2udsocr/image/upload/v1598677547/tender-couple-touching-foreheads-bonding-260nw-1361685944_bymvjm.jpg "Name="card-img-top" alt="..."/>
                                    
                                     <div className="card-body">
                                        <h5 className="card-title" style={{textallign: "centre", textEmphasisColor: "purple"}}>Country For All</h5>
                                         
                                    </div>

                                    <button className="btn-info" style={{width: "15%"}} onClick={this.clickLike}>Like</button>
                                     <small >{this.state.likes}</small>
                            </div>
                      </div>

                      <div className="col-4">
                            <div className="card" style={{width: "25rem", height: "5px"}}>
                                    <img src="https://res.cloudinary.com/dg2udsocr/image/upload/v1598165473/sample.jpg"Name="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Life For All</h5>
                                        
                                    </div>
                                    <button className="btn-info" style={{width: "15%"}} onClick={this.clickLike}>Like</button>
                                    <small >{this.state.likes}</small>       
                            </div>
                      </div>

                      <div className="col-4">
                            <div className="card" style={{width: "30rem", height: "5px"}}>
                                    <img src="https://res.cloudinary.com/dg2udsocr/image/upload/v1598677545/ec170c4f3f3e21d3fdf381e229077aa6_ihy4kp.jpg"Name="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Happiness For All</h5>
                                        
                                    </div>
                                    <button className="btn-info" style={{width: "15%"}} onClick={this.clickLike}>Like</button>
                                    <small >{this.state.likes}</small>
                            </div>
                      </div>

                  </div>
              </div>
                
            </div>

         );
    }
}
 
export default App;