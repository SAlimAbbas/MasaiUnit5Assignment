import { useState } from "react"

export const Button =()=>{

    const [counter,setCounter]=useState(0);
    return (
        <div style={{color:"red"}}>
            <h1>{counter}</h1>

            <button 
            data-testid="addButton"
            onClick={()=>setCounter(counter+5)}  style={{color:"coral"}}
            >
                ADD</button>
            <button 
            data-testid="reduceButton"
            onClick={()=>setCounter(counter-5)}  style={{color:"coral"}}
            >
                REDUCE</button>
        </div>
    )
}