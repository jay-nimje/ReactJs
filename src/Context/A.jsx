import React, { useState, createContext } from 'react'
import B from './B'
export const DataContext = createContext();


function A() {

    const [name, SetName] = useState("Jay Nimje");

    return (
        <div>
            <DataContext.Provider value={{name,SetName}}>
                <button onClick={()=>SetName('Nimje jay')}>Chanhe A</button>
                <h1>Hello H1 : {name}</h1>
            </DataContext.Provider>
            <B />
        </div>
    )
}

export default A