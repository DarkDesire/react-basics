import React, {useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Badge } from 'reactstrap';
import { CounterContext } from "../ReducerContextApp"

const ComponentC2 = () => {
    const context = useContext(CounterContext)
    console.log(context)
    const {counter, dispatch} = context
    return (
        <div>
            <ButtonGroup>
                <Button color="success">
                    ComponentC Counter:<Badge>{counter}</Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={() => { dispatch({type:'increment'})}}>increment</Button>
                <Button color="dark" onClick={() => { dispatch({type:'decrement'})}}>decrement</Button>
            </ButtonGroup>
        </div>
    )
}

export default ComponentC2
