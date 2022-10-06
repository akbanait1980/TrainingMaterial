import React, { useState } from 'react';

const Header = () => {
    const [ display, setDisplay ] = useState(true)
    const [ message, setMessage ] = useState('display message')

    function onClickHandler(){
        if(display){
            setDisplay(false)
            setMessage('display message')
        }else{
            setDisplay(true)
            setMessage('hide message')
        }
    }

    return(
        <div>
            {/* <h1>{ message }</h1> */}
            { display && <h1>{ message }</h1> }
            <button onClick={ onClickHandler }>Toggle</button>
        </div>
    )
}
export default Header;