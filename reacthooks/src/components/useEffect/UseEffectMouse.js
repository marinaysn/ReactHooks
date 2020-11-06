import React, { useState, useEffect } from 'react'

function UseEffectMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e =>{

        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('UseEffectisCalled')
        window.addEventListener('mousemove', logMousePosition)

    },[]);


    return (
        <div>
            <p>Hooks:  X - {x} and Y - {y} </p>
        </div>
    )
}

export default UseEffectMouse
