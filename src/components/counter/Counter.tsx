import React, { useState } from 'react';


const Counter=()=>{
    const [count, setCount] = useState(0);
   
    return (
       <div>
           Krishnath Jadhav, Kodani See Chimata <div>Counter:{count}</div>
           <div><button onClick={()=>{setCount(count+1)}}>Increase Count</button></div>
           Checking for file structure 
        </div>

    )


}

export default Counter;