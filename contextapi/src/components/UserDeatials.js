import React, { useContext } from "react";
import { myContext } from "../App";
import '../index.css';

function UserDeatials() {
    const data=useContext(myContext);
  return (
    <>
    <div>name is:{data.name}</div>
    </>
  );
}

export default UserDeatials;