import React, { Component } from 'react';

class Header extends Component{
    constructor(){
        super()
        this.state = {
            name: 'Guest'
        }
        /** 
            2 way we can bind the this keyword in constructor bcoz if we use bind method on render
            it will be called everytime when we component getting updated
        */
        //this.onClickHandler = this.onClickHandler.bind(this)
    }

    // onClickHandler(){
    //     //console.log('button click')
    //     //console.log(this.state.name)
    //     console.log(this)
    //     this.setState({
    //         name: 'Mark'
    //     })
    // }

    onClickHandler = () => {        
        console.log(this)
        this.setState({
            name: 'Mark'
        })
    }

    render(){
        return(
            <div>
                <h1>Welcome { this.state.name }</h1>
                {/* 1 way */}
                {/* <button onClick={ this.onClickHandler.bind(this) }>Update</button> */}

                {/* 2 way */}
                {/* <button onClick={ this.onClickHandler }>Update</button> */}

                {/* 3 way */}
                {/* <button onClick={ () => this.onClickHandler() }>Update</button> */}

                {/* 4 way */}
                <button onClick={ this.onClickHandler }>Update</button>
            </div>
        )
    }
}
export default Header;