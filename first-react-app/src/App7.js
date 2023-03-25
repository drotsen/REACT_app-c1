import "./App3.css";
import { useState } from "react";
import Axios from "axios";

function App() {
    const [generatedExcuse, setGeneratedExcuse] = useState("");
    
    const fetchExcuse = (excuse) => {
        Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res) =>{
            setGeneratedExcuse(res.data[0].excuse);
        });
    };
    
    return (
        <div className="App">
           <div>Generate a Excuse</div>
            <button onClick={() => fetchExcuse("party")}>Party </button>
            <button onClick={() => fetchExcuse("family")}>Family </button>
            <button onClick={() => fetchExcuse("office")}>Office </button>
            <p> {generatedExcuse} </p>
        </div>  
    );
}

export default App;