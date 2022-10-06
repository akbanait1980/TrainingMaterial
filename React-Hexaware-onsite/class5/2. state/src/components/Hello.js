import React, { Component } from 'react';

class Hello extends Component{

    constructor(){
        super()
        this.state = {
            name: 'Guest',
            email: 'g@gmail.com',
            address: [
                { address1 }
            ]
        }
    }

    onClickHandler = () =>{        
        //console.log('clicked')
        // console.log(this.state.name)
        // this.state.name = 'Mark'
        // console.log(this.state.name)
        this.setState({
            name: 'Mark'
        })
    }


    render(){
        return(
            <div>
                <h1 className='center'>Welcome, { this.state.name }</h1>
                <button onClick={ this.onClickHandler } className='btn btn-primary'>Login</button>
            </div>
        )
    }
}
export default Hello;