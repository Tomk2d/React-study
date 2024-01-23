import React, {useState, useEffect} from "react";

export default function PlusButton(){
    const [count, setCount] = useState(0);

    const plus = ()=> {
        setCount(count+1);
    }

    useEffect(()=>{
        console.log(`count가 1 증가하여 ${count}가 되었다.`);
    },[count])

    return (
        <div>
            <div>{count}</div>
            <button onClick={plus}>더하기</button>
        </div>
    )


}