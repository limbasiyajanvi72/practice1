import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data=useLoaderData();

    // const [data,setdata]=React.useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setdata(data);
    //     });
    // },[])

    return (<>
    <div className="text-3xl text-white bg-gray-600 p-4 m-4">
        <div>Github folllowers: {data.followers}</div>
    <img src={data.avatar_url} width={200}/>  
    </div> 
    </>)
}

export default Github;

export const githubInfoLoader=async()=>{
const response=await fetch('https://api.github.com/users/hiteshchoudhary');
return response.json();
}