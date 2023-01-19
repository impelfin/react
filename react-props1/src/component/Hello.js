import { useState } from 'react';

export default function Hello(props) {
    const [name, setName] = useState('Mike');
    const [age, setAge] = useState(props.age);

    return (
    <div>
        <h3 id="name">
            {name}({age})
        </h3>
        <button onClick={() => {
            console.log(name)
            setName(name === "Mike" ? "Jane" : "Mike");
            setAge(age + 1);
        }}> 
            Change
        </button>
    </div>
    )
}