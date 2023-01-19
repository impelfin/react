import { useState } from 'react';

export default function Hello() {
    const [name, setName] = useState('Mike');

    return (
    <div>
        <h3>State Example - useState</h3>
        <h3 id="name">{name}</h3>
        <button onClick={() => {
            console.log(name)
            setName(name === "Mike" ? "Jane" : "Mike");
        }}> 
            Change
        </button>
    </div>
    )
}