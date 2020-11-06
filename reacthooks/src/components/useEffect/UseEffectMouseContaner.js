import React, { useState, useEffect } from 'react'
import UseEffectMouse from './UseEffectMouse'


function UseEffectMouseContainer() {

    const [display, setDisplay] = useState(true);


    return (
        <div>
            <div>
                <button
                    onClick={() => setDisplay(!display)}>
                    Toggle Display
                </button>
            </div>
            <div>
                Display: {display ? 1 : 0}

                <div>
                    {display ? <UseEffectMouse /> : null}

                </div>

            </div>
        </div>
    )
}

export default UseEffectMouseContainer
