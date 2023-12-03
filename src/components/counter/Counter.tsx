import React, { useState } from 'react';


const Counter=()=>{
    const [count, setCount] = useState(0);
   
    return (
       <div>
           <div>Counter:{count}</div>
           <div><button onClick={()=>{setCount(count+1)}}>Increase Count</button></div>

        </div>

    )


}

export default Counter;