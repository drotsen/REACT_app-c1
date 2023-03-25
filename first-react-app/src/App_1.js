import './App.css';
import {User, User1, Jobs} from './User'
import { useState } from "react";

function App() {

 const age2 = 11;
 const isGreen = true;
 const names=["Marko","Jake","Jessica","Mike","Dan"];
 const users = [
  {name: "Pedro", age:21},
  {name: "Jake", age:29},
  {name: "Tom", age:33}
 ]

  // const [age, setAge] = useState(0);

  // const increaseAge = () => {
  //   setAge(age+1);

  // };



  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);

  };
  const [textColor, setTextColor] = useState("black");
  return (
    <div className='App'>
      {/* state */}
      {/* {age}
      <button onClick={increaseAge} >INcrease age</button> */}

       <button onClick={() => {
        setTextColor(textColor === "black" ? "red" : "black");
      }}
        
      > Shoe/Hide</button>
      
      <h1 style={{color:textColor}}>Hi my name is Marko</h1> 

      <input type="text" onChange={handleInputChange}/>
      {inputValue}

      {/* Listor */}
      {users.map((user, key) => {
        return <User name={user.name} age2={user.age}/>
        })}    

      {names.map((name, key) => {
        return <h2 key={key}>{name}</h2>
      })}

      <h1>{names[0]}</h1>

      {/* If satser */}
      {age2>=18 ? <h1>OVERAGE</h1> : <h1>Under Age </h1>}
      <h1 style={{color:isGreen ? "green" : "red"}} >This is green</h1>

      {isGreen && <button>This is a Button</button>}

      {/* Komponerter */}
      <User1 name="Bo" age={21} email= "Bt@email.com"/>
      <User1 name="Lars" age={88} email= "LL@email.com"/>
      <User1 name="Aven" age={44} email= "AV@email.com"/>
      <Jobs salary={22900} position="VD" company= "ATAT"/>

    </div>
  );
}


// Komponenter


export default App;
