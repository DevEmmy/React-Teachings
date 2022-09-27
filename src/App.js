import './App.css';
import { useState } from 'react';

function App() {
  const [property, setProperty] = useState();


  const users=[
    {
      name: 'John',
      age: 19,
      sex: "male"
    },
    {
      name: 'Jane',
      age: 20,
      sex: "female"
    },
    {
      name: 'Joe',
      age: 30,
      sex: "male"
    },
    {
      name: 'Joe Same',
      age: 30,
      sex: "male"
    }
  ]

  const addToProp = (user)=>{
    setProperty(user)
  }

  return (
    <div className="App">
      {
        users.map((user, i)=>{
          return(
            <div key={i} onClick={()=> addToProp(user)}>
              <h1>Name: {user.name}</h1>
              <p>Age: {user.age}</p>
              <p>sex: {user.sex}</p>
            </div>
          )
        })
          
      }

      {
        property &&  
        <div>
        <h1>Selected User</h1>
        <p onClick={()=> setProperty(null)}>clear</p>
        <h3>{property.name}</h3>
        <p>{property.age}</p>
        <p>{property.sex}</p>
      </div>
      }
     

    </div>
  );
}

export default App;
