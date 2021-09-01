import React from 'react'
import useInput from './useInput'

const App = () => {
    const [name, bindName, clearName] = useInput('')
    const [email, bindEmail, clearEmail] = useInput('')
    const submitHandler = e => {
        e.preventDefault()
        console.log(`The name is ${name} and email is ${email}`)
        clearName()
        clearEmail()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name: </label><input {...bindName} />
                </div>
                <div>
                    <label>Email: </label><input {...bindEmail}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default App
