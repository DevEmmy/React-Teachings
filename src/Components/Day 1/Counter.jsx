import React from 'react'
import './App.css';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    const increase = ()=>{
      setCount(count+1)
    }
  
    const decreament = ()=>{
      setCount(count-1)
    }
  
    const increaseBy = (value)=>{
      setCount(count+value)
    }
  
  return (
    <div className="App">
      <p>
        Counter : {count}
      </p>
      
      <button onClick={increase}> Increament</button>
      <button onClick={decreament}> Decreament</button>
      <button onClick={()=>{increaseBy(10)}}> Increase By 10</button>
    </div>
  )
}

export default Counter