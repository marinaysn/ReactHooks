import React, {useContext} from 'react'
import App from '../../App'
import {UserContext, ChannelContext} from '../../App';
import {CarContext, FoodContext} from './ComponentE'

function ComponentH() {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    const car = useContext(CarContext);
    const food = useContext(FoodContext);

    return (
        <div>
            Component H
            <div>
                {user} likes {channel}
            </div>

            <div>
                {user} likes car: {car} and food {food}
            </div>
            
        </div>
    )
}

export default ComponentH
