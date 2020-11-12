import React from 'react'

function Button(props) {
    console.log(`Rendering Button now ${props.children}`)
    return (
        
        <div>
            <button onClick={props.handleclick}>{props.children}</button>
        </div>
    )
}

export default React.memo(Button) ;
