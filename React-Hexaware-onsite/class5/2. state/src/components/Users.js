import React, { useState } from 'react';

const Users = () => {
    // const [ name, setName ] = useState('guest')
    // const [ email, setEmail ] = useState('guest@gmail.com')
    const [ user, setUser ] = useState({
        name: 'guest2',
        email: 'g2@gmail.com'
    });

    const onClickHandler = () => {
        // setName('Mark')
        // setEmail('m@gmail.com')
        setUser({
            name: 'John2',
            email: 'j2@gmail.com'
        })
    }

    return(
        <div>
            {/* <h1>Welcome { name }, { email }</h1> */}
            <h1>Welcome { user.name }, { user.email }</h1>
            <button onClick={ onClickHandler }>Update</button>
        </div>
    )
}
export default Users;