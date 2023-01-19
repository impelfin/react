import World from "./World";
import styles from "./Hello.module.css";
import { useState } from 'react';

export default function Hello() {
    function showName() {
        console.log("Moon");
    }

    function showAge(age) {
        console.log(age);
    }

    function showText(txt) {
        console.log(txt)
    }

    // let name = "Mike"

    // function changeName() {
    //     name = name === "Mike" ? "Jane" : "Mike";
    //     console.log(name);
    //     document.getElementById("name").innerText = name;        
    // }

    const [name, setName] = useState('Mike');

    return (
    <div>
        <h1 style={
            {
                color: '#f00',
                borderRight : '2px solid #000',
                marginBottom : '50px',
                opacity: 1,
            }
        }>Hello</h1>
        <div className={styles.box}>Hello</div>
        <World />
        <button onClick={showName}>Show name</button>
        <button onClick={() => {
                showAge(22)
            }
        }>Show age</button>
        <input type="text" onChange={e => {
            const txt = e.target.value;
            showText(txt);
        }}
        />
        <h3>State Example</h3>
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

// // How to make : 1
// const Hello = function() { 
//     return <h1>Hello</h1>
// }

// export default Hello;


// // How to make : 2
// const Hello = () => { 
//     return <h1>Hello</h1>
// }

// export default Hello;