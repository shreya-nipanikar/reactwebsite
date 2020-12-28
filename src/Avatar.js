import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

class Avatar extends Component {

    constructor() {
        super();
        this.state = {
            name: "Welcome to Avatar World!"
        }
    }

    namechange() {
        this.setState ({
            name: "Hey Honey! You have been subscribed successfully!"
        })
    }

    render () {

        const avaratlistarray = [
            {
                id: 1,
                name: "Sanae Lacchab",
                work: "Web developer"
            },
            
            {
                id: 2,
                name: "HariPriya",
                work: "Full Stack developer"
            },
            
            {
                id: 3,
                name: "Grey Christ",
                work: "C++ developer"
            },
            
            {
                id: 4,
                name: "Julie Joss",
                work: "Python developer"
            }
        ]
    
       const arraycard = avaratlistarray.map( (myavatar, i) => {
           return <Avatarlist key={i} id={avaratlistarray[i].name} 
                   name={avaratlistarray[i].name} 
                   work={avaratlistarray[i].work} />
    
       })

        return (
            <div>
                <h1 className="tc"> {this.state.name}</h1> 
                {arraycard}
                 <br></br>
                 <center>
                 <button onClick= { () => this.namechange()}> Click Here to Subscribe!</button>
                 </center>
        
        </div>
        )
        
    }
}

    
export default Avatar;