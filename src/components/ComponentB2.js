import React, {useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Badge } from 'reactstrap';
import { CounterContext } from "../ReducerContextApp"
import ComponentC2 from './ComponentC2'

const ComponentB2 = () => {
    const context = useContext(CounterContext)
    console.log(context)
    const {counter, dispatch} = context
    return (
        <div>
            <ButtonGroup>
                <Button color="success">
                    ComponentB Counter:<Badge>{counter}</Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={() => { dispatch({type:'increment'})}}>increment</Button>
                <Button color="dark" onClick={() => { dispatch({type:'decrement'})}}>decrement</Button>
            </ButtonGroup>
            <p></p>
            <ComponentC2/>
        </div>
    )
}

export default ComponentB2
