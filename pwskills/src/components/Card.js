import React from "react";

function Card(props){
    return(
        <>
        
        <div className="flex justify-start shadow-md w-72 rounded-xl h-18 p-3">
            <div>
            <img src={props.imgSrc} alt="logo " className="h-12 w-16 "/>
            </div>
            <div className="pl-4 text-slate-800">
                <span className="font-bold text-lg  block">{props.number}</span>
                <span className="font-thin ">{props.des}</span>
            </div>
        </div>
        </>
    )
};

export default Card;