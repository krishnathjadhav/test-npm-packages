import React, { useState } from 'react';


const Counter=()=>{
    const [count, setCount] = useState(0);
   
    return (
       <div>
           Counter <div>Counter:{count}</div>
           <div><button onClick={()=>{setCount(count+1)}}>Increase Count</button></div>
           Enter your Name: <input type='text'/>
        </div>

    )


}

export default Counter;