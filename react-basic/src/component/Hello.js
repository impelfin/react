import World from "./World";
import styles from "./Hello.module.css";

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