import React, {useReducer} from 'react'
import ComponentA2 from './components/ComponentA2'

// useReducer + useContext

export const CounterContext = React.createContext()
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
function ReducerContextApp() { 
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <CounterContext.Provider value={{counter: state.counter, dispatch:dispatch}}>
            <div className="App">
                <ComponentA2 />
            </div>
        </CounterContext.Provider>
    )
}
export default ReducerContextApp