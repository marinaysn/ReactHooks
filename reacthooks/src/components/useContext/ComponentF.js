import React from 'react'
import App from '../../App'
import {UserContext, ChannelContext} from '../../App'

function ComponentF() {
    return (
        <div>
            Component F
            <UserContext.Consumer>
                { user =>{
                    return (
                        <ChannelContext.Consumer>{
                            channel =>{
                                return <div>User context value {user} cannel {channel}</div>
                            }
                        }

                        </ChannelContext.Consumer>
                        
                    )
                }}
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
