import "./App3.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
    const [name, setName] = useState("");

    const [predictedAge, setPredictedAge] = useState(null);
    
    const fetchAgeFact = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) =>{
            setPredictedAge(res.data);
        });
    };
    
    return (
        <div className="App">
            <input 
            placeholder = ""
            onChange={(event) => {
                setName(event.target.value);
                }}
            />
            <button onClick={fetchAgeFact}> Predict Age </button>
                <h1>Name: {predictedAge?.name} </h1> 
                <h1>Predicted age: {predictedAge?.age} </h1>
                <h1>Count: {predictedAge?.count} </h1>        
        </div>  
    );
}

export default App;