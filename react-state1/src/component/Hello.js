export default function Hello() {
    let name = "Mike"

    function changeName() {
        name = name === "Mike" ? "Jane" : "Mike";
        console.log(name);
        document.getElementById("name").innerText = name;        
    }

    return (
    <div>
        <h1>State Example - not useState</h1>
        <h3 id="name">{name}</h3>
        <button onClick={changeName}> 
            Change
        </button>
    </div>
    )
}

