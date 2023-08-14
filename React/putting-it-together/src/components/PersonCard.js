import React, {useState} from "react"

const PersonCard = (props) => {

  const [counter, setCounter] = useState(props.age);
  const count = () => setCounter(counter+1);


    return (
      <div>
        <h1>
          My name is {props.firstName} {props.lastName}
        </h1>
        <p>Age: {counter}</p>
        <p>Hair Color: {props.hairColor}</p>

        <button onClick={count}>Birthday button for {props.firstName}</button>
      </div>
    );
}

export default PersonCard