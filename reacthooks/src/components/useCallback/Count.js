import React from 'react'

function Count(props) {
    console.log(`Rendering count: ${props.text}`)
    return (
        <div>
           {props.text} - {props.count} 
        </div>
    )
}

export default React.memo(Count)
