import React, {useRef, useState, useEffect} from 'react'

const ComponentA = () => {
    const [count, setCount] = useState(0);
    const componentRef = useRef(true)
    useEffect(() => {
        return () => {
            componentRef.current = false
        }
    });
    const fakeFetch = () => {
        setTimeout(() =>{
            if (componentRef.current) setCount(count+1)
        }, 2000);
    };
    return (
        <div>
            <h1>ComponentA counter: {count}</h1>
            <button onClick={fakeFetch}>fakeFetch</button>
        </div>
    )
}

export default ComponentA
