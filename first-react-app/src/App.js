import './App.css';

function App() {
 const age = 11;
  return (
    <div className='App'>
      {age>=18 ? <h1>OVERAGE</h1> : <h1>Under Age </h1>}

      <User name="Bo" age={21} email= "Bt@email.com"/>
      <User name="Lars" age={88} email= "LL@email.com"/>
      <User name="Aven" age={44} email= "AV@email.com"/>
      <Jobs salary={22900} position="VD" company= "ATAT"/>

    </div>
  );
}


const User = (props) =>{
  return(
    <div>
    <h1>{props.name}</h1>
    <h2>{props.email}</h2>
    <h3>{props.age}</h3>
    </div>
  );
};
const Jobs = (props) =>{
  return(
    <div>
    <h1>{props.salary}</h1>
    <h2>{props.position}</h2>
    <h3>{props.company}</h3>
    </div>
  );
};


export default App;
