import React, {useRef, useState} from 'react'
import ComponentA from './ComponentA'

// useRef 

function App() { 
    const inputRef = useRef();
    const [show, setShow] = useState(true)
    return (
        <div className="App">
            <h1>Focus on input field</h1>
            <input ref={inputRef} type="text"/>
            <input type="text" name="1" id="1" />
            <input type="text" name="2" id="2" />
            <input type="text" name="3" id="3" />
            <button onClick={() => {
                inputRef.current.focus();
            }}>focus</button>
            <p></p>
            <button onClick={() => {
                setShow(!show)
            }}>change show</button>
            <h1>Unmount compoment</h1>
            {show && <ComponentA/>}
        </div>
    )
}
export default App