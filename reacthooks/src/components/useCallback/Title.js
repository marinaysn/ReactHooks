import React from 'react'

function Title() {
    console.log('Rengering Title')
    return (
        <div>
        <h2>
            useCallback hook
        </h2>
            
        </div>
    )
}

export default React.memo(Title)
