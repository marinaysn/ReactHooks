import React, {useContext} from 'react'
import App from '../../App'
import {UserContext, ChannelContext} from '../../App'

function ComponentH() {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <div>
            Component H
            <div>
                {user} likes {channel}
            </div>
            
        </div>
    )
}

export default ComponentH
