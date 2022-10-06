import React,  { useState } from 'react';
import CounterOutput from './CounterOutput';
import CounterButton from './CounterButton';

const Counter = () => {

    const [ counter, setCounter ] = useState(0)

    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    const decrementCounter = () => {
        setCounter(counter - 1)
    }

    return(
        <div className='row'>
            <div className='col-lg-12'>
                <div className='my-3'>
                    <CounterOutput data={ counter } />
                </div>
                <div className='my-3'>
                    <CounterButton
                     incrementHandler={ incrementCounter }
                     decrementHandler={ decrementCounter }
                    />
                </div>
            </div>
        </div>
    )
}
export default Counter;