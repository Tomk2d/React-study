import React from "react";

export default function CaptionImage(props){
    return(
        <div style={{fontSize: 30, backgroundColor: 'skyblue'}}
        className="">
            <img src={props.imgUrl} alr={props.caption} />
            <p>{props.caption}</p>
        </div>
    )
}