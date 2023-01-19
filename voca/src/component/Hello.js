import { useState } from 'react';

export default function Hello(age) {
    const [name, setName] = useState('Mike');

    return (
    <div>
        <h3 id="name">
            {name}({age})
        </h3>
        <button onClick={() => {
            console.log(name)
            setName(name === "Mike" ? "Jane" : "Mike");
        }}> 
            Change
        </button>
    </div>
    )
}