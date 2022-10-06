import React, { useState } from 'react';

const Header = () => {
    const [ name, setName ] = useState('Guest')

    // function onClickHandler(){
    //     setName('John')
    // }

    const onClickHandler  = () => {
        setName('Paul')
    }

    return(
        <div>
            <h1>Hello { name }</h1>
            <button onClick={ onClickHandler  }>Update</button>
        </div>
    )
}
export default Header;