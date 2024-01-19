import React, { useState } from "react";
import Header from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import UserCard from "./components/UserCard";
import { createContext } from "react";

export const myContext = createContext();

function App() {
  const[name,setName]=useState("");
  const[color,setColor]=useState("");

  const myname=(event)=>{
    setName(event.target.value);
  };

  const mycolor=(event)=>{
    setColor(event.target.value);
  };
  
  return (
    <myContext.Provider value={{name,color}}>
    <Header/>
    <form>
      <input
      type={"text"}
      placeholder="Enter name"
      value={name}
      onChange={myname}/>
      <input
      type={"text"}
      placeholder="Enter color"
      value={color}
      onChange={mycolor}/>
    </form>
    <HeroSection/>
    <UserCard/>
    </myContext.Provider>
  );
}

export default App;
