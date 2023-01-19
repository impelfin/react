import { useState } from 'react';

export default function Hello({ age }) {
    const [name, setName] = useState('Mike'); 
    const msg = age > 19 ? "성인입니다."  : "미성년자입니다.";

    return (
    <div>
        <h3 id="name">
            {name}({age}) : {msg}
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