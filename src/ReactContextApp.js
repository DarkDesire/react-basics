import React from 'react'
import ComponentA from './components/ComponentA'
export const NameContext = React.createContext()
export const ColorContext = React.createContext()

function ReactContextApp() {
    return (
        <div className="App">
            <NameContext.Provider value={'Smith'}>
                <ColorContext.Provider value={'red'}>
                    <ComponentA/>
                </ColorContext.Provider>
            </NameContext.Provider>
        </div>
    )
}
export default ReactContextApp