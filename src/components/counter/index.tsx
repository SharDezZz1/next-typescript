import React from 'react'
import { RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '@/store/futures/counter'


const TestCounter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <h1>Test Counter: {count}</h1>
            <button onClick={
                () => dispatch(increment())
            } className='btn btn-success'>+</button>
            <button onClick={
                () => dispatch(decrement())
            } className='btn btn-danger'>-</button>

        </>
    )
}

export default TestCounter