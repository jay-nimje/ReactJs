import React from 'react'
import { useContext } from 'react'
import { DataContext } from './A'

function D() {
    const{name,SetName}=useContext(DataContext);
    return (
        <div>
            <button onClick={()=>SetName("Nimje Jay")}></button>
            <h1>Hello H4 :{name}</h1>

        </div>
    )
}

export default D