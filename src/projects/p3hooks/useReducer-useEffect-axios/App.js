import React, {useReducer, useEffect} from 'react'
import axios from 'axios'
import { ListGroup, ListGroupItem } from 'reactstrap';

// useReducer + useEffect + axios

const initialState = {
    loading: true,
    error: "",
    todos: []
}

const reducer = (state,action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                loading: false,
                error: "",
                todos: action.payload
            }
        case 'SET_ERROR':
            return {
                loading: false,
                error: "There are some errors",
                todos: []
            }
        default:
            return state
    }
}

function App() { 
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => { 
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then( res => {
                console.log('res.data',res.data)
                dispatch({type:'SET_DATA',payload:res.data}
            )})
            .catch( _ => dispatch({type:'SET_ERROR'}))
    }, [])
    const listmarkup = <ListGroup>{state.todos.map(todo => 
        <ListGroupItem  key={todo.id}>{todo.title} {todo.completed ? <b>completed</b>:<i>incompleted</i>}</ListGroupItem>)})
    </ListGroup>
    return (
            <div className="App">
                {state.loading ? 'Loading': (state.error ? state.error : listmarkup)}
            </div>
    )
}

export default App