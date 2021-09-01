import React, {useState, useCallback} from 'react'

const functionCounter = new Set()
function App() {
    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(0)
    const incrementA = useCallback(() => {
        console.log('incrementA')
        setCountA(countA+1)
    }, [countA])
    const incrementB = useCallback(() => {
        console.log('incrementB')
        setCountB(countB+1)
    }, [countB])
    functionCounter.add(incrementA)
    functionCounter.add(incrementB)
    console.log(functionCounter)
    return (
        <div>
            <p>CountA: {countA} | CountB: {countB}</p>
            <button onClick={incrementA}> increment A </button>
            <button onClick={incrementB}> increment B </button>
        </div>
    )
}

export default App
