import React, { useContext } from "react";
import { myContext } from "../App";
import '../index.css';


function Button() {
    const data=useContext(myContext);
  return (
    <>
    <div style={{backgroundColor:data.color}}>Button</div>
    </>
  );
}

export default Button;