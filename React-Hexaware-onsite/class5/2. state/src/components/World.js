import React, { useState } from 'react';

const World = () => {
    const [ name, setName ] = useState('Guest')

    const onClickHandler = () => {
        setName('John')
    }

    return(
        <div>
            <h1>Hello { name }</h1>
            <button onClick={ onClickHandler }>Update</button>
        </div>
    )
}
export default World;