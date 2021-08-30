import React from 'react'
import { NameContext } from '../ContextApp'
import { ColorContext } from '../ContextApp'

const ComponentC = () => {
    return (
        <div>
            <div>ComponentC</div>
            <NameContext.Consumer>
                {name => {
                    return (
                        <ColorContext.Consumer>
                            {color => (<div>Name:{name} | Color:{color}</div>)}
                        </ColorContext.Consumer>
                    )
                }}
            </NameContext.Consumer>
        </div>
    )
}

export default ComponentC
