import React, {useEffect, useState} from "react";

export default function BlinkComponent({text}){
    const [showText, setShowText] = useState(true);

    //useEffect(()=> {
    //    const timeoutId = setInterval(()=> {    //지정된 시간을 바탕으로 텍스트를 지웠다가 다시그림

    //        setShowText(showText=>!showText);
    //    }, 100)
    //    return ()=> {clearInterval(timeoutId)}
    //}, [])

    return (
        <div>
            <button onClick={()=>{
                setShowText(!showText);
            }}>클릭</button>
            {showText? text:null}
        </div>
    )
}