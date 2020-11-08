import React from 'react'
import ComponentF from './ComponentF'
import ComponentH from './ComponentH';

export const CarContext = React.createContext();
export const FoodContext = React.createContext();


function ComponentE() {
    return (
        <div>

    <CarContext.Provider value='Acura'>
        <FoodContext.Provider value='Fish'>
          
          <ComponentF />
           <ComponentH />

        </FoodContext.Provider>
      </CarContext.Provider>


            
        </div>
    )
}

export default ComponentE
