import React, {useContext} from 'react'
import ComponentC from './ComponentC'
import {NameContext, ColorContext} from '../ReactContextApp'

const ComponentB = () => {
    const name = useContext(NameContext)
    const color = useContext(ColorContext)
    return (
        <div>
            <div>ComponentB</div>
            <div>Name:{name} | Color:{color}</div>
            <ComponentC/>
        </div>
    )
}

export default ComponentB
