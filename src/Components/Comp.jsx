import { useState } from "react"


function Comp() {
    
    let [counter,setCounter]=useState(45);
     
    const addValue=()=>{
        setCounter(counter+1);
    }
    const remVal=()=>{
        setCounter(counter-1);
    }

  return (
    <div>
        <h2>Counter Value :{counter}</h2>
        <br />
        <button onClick={addValue}>Add value</button>
        <button onClick={remVal}>Remove Value</button>
    </div>
  )
}

export default Comp