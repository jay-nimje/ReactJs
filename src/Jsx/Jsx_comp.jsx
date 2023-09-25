import React from 'react'
import './style.css';
function Jsx_comp() {

    let data ="Hi i am the jsx"
    const myelement=<h1>I am jsx</h1>
    const sum  = <h1>Addition of 5 + 5 = {5+5}</h1>
    const myelement2 = (
        <div>
            <h2>i am header</h2>
            <h2>i am header to</h2>
        </div>
    );

  return (
    <div>
        <div>
            <h1>{"Hello i am document.write"}</h1>
            <hr />
            <h1>{data}</h1>
            <hr />
            <h1>{myelement}</h1>
            <hr />
            <h1>{sum}</h1>
            <hr />
            <h2>{myelement2}</h2>
            <hr />
            <p class="mybox">Hi,I am the external css</p>
        </div>
    </div>
  )
}

export default Jsx_comp