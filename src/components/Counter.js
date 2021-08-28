import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Badge } from 'reactstrap';

const initialState = {
    counter1: 0,
    counter2: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment1':
            return {...state, counter1: state.counter1+1+action.payload}
        case 'decrement1':
            return {...state, counter1: state.counter1-1-action.payload}
        case 'increment2':
            return {...state, counter2: state.counter2+1}
        case 'decrement2':
            return {...state, counter2: state.counter2-1}
        case 'reset':
            return {...state, counter1: initialState.counter1}
        default:
            return state
    }
}

const Counter = _ => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <ButtonGroup>
                <Button color="primary" outline>Counter1 
                    <Badge color="secondary">{count.counter1} </Badge>
                </Button>
                <Button color="primary" outline>Counter2 
                    <Badge color="secondary">{count.counter2} </Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={() => { dispatch({type:'increment1', payload: 1})}}>increment counter1 1</Button>
                <Button color="dark" onClick={() => { dispatch({type:'decrement1', payload: 1})}}>decrement counter1 1</Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={() => { dispatch({type:'increment1', payload: 5})}}>increment counter1 5</Button>
                <Button color="dark" onClick={() => { dispatch({type:'decrement1', payload: 5})}}>decrement counter1 5</Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={() => { dispatch({type:'increment2', payload: 5})}}>increment counter2</Button>
                <Button color="dark" onClick={() => { dispatch({type:'decrement2', payload: 5})}}>decrement counter2</Button>
            </ButtonGroup>
        </div>
        
    );
}

export default Counter;