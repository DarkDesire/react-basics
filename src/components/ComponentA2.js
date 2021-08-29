import React, {useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Badge } from 'reactstrap';
import { CounterContext } from "../ReducerAppAndContextApp"
import ComponentB2 from './ComponentB2'

const ComponentA2 = () => {
    const context = useContext(CounterContext)
    console.log(context)
    const {counter, dispatch} = context
    return (
        <div>
            <ButtonGroup>
                <Button color="success">
                    ComponentA Counter:<Badge>{counter}</Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={() => { dispatch({type:'increment'})}}>increment</Button>
                <Button color="dark" onClick={() => { dispatch({type:'decrement'})}}>decrement</Button>
            </ButtonGroup>
            <p></p>
            <ComponentB2/>
            <p></p>
            <Button color="danger" onClick={() => { 
                dispatch({type:'reset'})
            }}>reset</Button>
        </div>
    )
}

export default ComponentA2
