import React from 'react'
import ComponentA from './components/ComponentA'
export const NameContext = React.createContext()

function ReactContextApp() {
    return (
        <div className="App">
            <NameContext.Provider value={'Smith'}>
                <ComponentA/>
            </NameContext.Provider>
        </div>
    )
}
export default ReactContextApp