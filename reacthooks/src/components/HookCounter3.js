import React, {useState} from 'react';


function HookCounter3() {

    const [name, setName] = useState({firstName: '', lastName: ''});

    return (
        <div>

        <form>
            <input type='text' value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} />
            <input type='text' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}  />

            <h2>First Name: {name.firstName}</h2>
            <h2>Last Name: {name.lastName}</h2>
            <h3>{JSON.stringify(name)}</h3>
        </form>

        </div>
    )
}

export default HookCounter3
