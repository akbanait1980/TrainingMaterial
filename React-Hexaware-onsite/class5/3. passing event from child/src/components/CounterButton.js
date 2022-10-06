import React from 'react';

const CounterButton = (props) => {
    return(
        <div>
            <button onClick={ props.incrementHandler  }  className='btn btn-primary'>Increment</button>
            <button onClick={ props.decrementHandler  } className='btn btn-danger'>decrement</button>
        </div>
    )
}
export default CounterButton;