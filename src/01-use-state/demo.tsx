import React, { useState } from "react";

export const MyComponent : React.FC =() => {
  const[myName, setMyName] = React.useState("Suresh");
  return (
    <>
    <h4>{myName}</h4>
    <input type="text" value={myName} onChange={(e)=>setMyName(e.target.value)} />
    </>
  )
}