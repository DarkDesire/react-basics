import React from 'react'
import { NameContext } from '../ReactUseContextApp'
import { ColorContext } from '../ReactUseContextApp'

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
