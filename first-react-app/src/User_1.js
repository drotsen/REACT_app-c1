export const User = (props) =>{
    return (
      <div>
        {props.name}  {props.age}
        </div>
    );
  };

export const User1 = (props) =>{
    return(
      <div>
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
      <h3>{props.age}</h3>
      </div>
    );
  };

export const Jobs = (props) =>{
    return(
      <div>
      <h1>{props.salary}</h1>
      <h2>{props.position}</h2>
      <h3>{props.company}</h3>
      </div>
    );
  };
  