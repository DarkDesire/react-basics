import {useState} from 'react'

const useInput = (initialState) => {
    const [value, setValue] = useState(initialState)
    const clearText = () => {
        setValue(initialState)
    }
    const bindForm = {
        value: value,
        onChange: e => {
            setValue(e.target.value)
        },
        type: 'password'
    }

    return [value, bindForm, clearText]
}
export default useInput