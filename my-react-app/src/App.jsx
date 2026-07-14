import { createContext, useContext, useState } from 'react';
import { createRoot } from 'react-dom/client';

const UserContext =createContext();
function Component1() {
  const [user, setUser] = useState("Linus");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <UserContext.Provider value ={user}>
      <Component2  />
      </UserContext.Provider>
    </>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const user =useContext(UserContext);
  
  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}


function App() {
  const carInfo = ['ford','mustang','ferrari','lamborgini'];

  return <Component1 />;
}

export default App;