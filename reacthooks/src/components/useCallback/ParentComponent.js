import React, { useState, useCallback } from 'react';
import Title from './Title';
import Button from './Button';
import Count from './Count';



function ParentComponent() {

    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(1000);

    const incrementAge = useCallback( () => {       
           setAge(age + 1)    
    },[age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    const incrementFunc = useCallback((str, num) => {
        
        if (str ==='age') {
            setAge(age + num)  
        }

        else {
          setSalary(salary + num)  
        }     
    }, [])


    return (
        <div>
            <Title />
            <Count text='Age' count={age} />
            <Button handleclick={incrementAge}> Increment Age</Button>
            <Count text='Salary' count={salary} />
            <Button handleclick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent
