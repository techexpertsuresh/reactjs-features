import React from "react";
/*
export const MyComponent = () => {
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    // Simulating async call
    setTimeout(() => {
      setUsername("John");
    }, 1500);
  }, []);

  return (
    <>
      <h4>{username}</h4>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
    </>
  );
};
*/


export const MyComponent:React.FC = () => {
  const[name, setName] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      setName("Suresh");
    },1500);
  },[]);

  return (<>
    <h4>{name}</h4>
    <input value={name} onChange={(e) => setName(e.target.value)} />
  </>);

}