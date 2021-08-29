import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Badge } from 'reactstrap';

const initialState = {
    counter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, counter: state.counter+1}
        case 'decrement':
            return {...state, counter: state.counter-1}
        case 'reset':
            return {...state, counter: initialState.counter}
        default:
            return state
    }
}

const Counter = _ => {
    const [state1, dispatch1] = useReducer(reducer, initialState)
    const [state2, dispatch2] = useReducer(reducer, initialState)
    return (
        <div>
            <ButtonGroup>
                <Button color="danger">
                    Counter1 <Badge>{state1.counter}</Badge>
                </Button>
                <Button color="primary">Counter2 
                    <Badge>{state2.counter}</Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={() => { dispatch1({type:'increment'})}}>increment</Button>
                <Button color="dark" onClick={() => { dispatch1({type:'decrement'})}}>decrement</Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={() => { dispatch2({type:'increment'})}}>increment</Button>
                <Button color="dark" onClick={() => { dispatch2({type:'decrement'})}}>decrement</Button>
            </ButtonGroup>
            <p></p>
            <Button color="danger" onClick={() => { 
                dispatch1({type:'reset'})
                dispatch2({type:'reset'})
            }}>reset all</Button>
        </div>
        
    );
}

export default Counter;