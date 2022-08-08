import React from "react";
import ReactDOM from 'react-dom';


const page=(
    <div>
    <h1 className="header">This is Jsx</h1>
    <p>This is a paragraph</p>
    </div>
    
)
const navbar =(
    <div>
    <h1>List Of Names</h1>
    <ul>
    <li>Menu</li>
    <li>About</li>
    <li>contact</li>
    </ul>
    </div>
)
function image() {
    return (
        
    
    <div>
    <img src ="./react-logo.png" width="40px"/>
    <h1> Iam Learn React Js</h1>
    <ol>
    <li> Its a popular library</li>
    <li> components</li>
    <li> hooks</li>
    <li> functions</li>
    </ol>
    </div>
)
}

ReactDOM.render(
page,document.getElementById("root")
)
ReactDOM.render(
<image/>,document.getElementById("root")
)
document.getElementById("root").append(JSON.stringify(navbar))

