import React from 'react';

// with JSX code
const Hello = () => {
    return (
        <div className='myClass2'>
            <h1 className='text-success'>Welcome User</h1>
        </div>
    )
}



// without JSX code
// const Hello = () => {
//     return React.createElement(
//         'div',
//        { class: 'myClass', id: 1 },
//         React.createElement(
//             'h1',
//             null,
//             'Hello User'
//         )
//     )
// }



export default Hello;