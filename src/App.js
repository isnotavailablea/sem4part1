import React,{useState,createContext, useEffect} from 'react'
import Generateqr from './Generateqr.js';
import Scanqr from './Scanqr.js';
import Takepic  from './Takepic.js';
export const AllContexts=createContext();
function App() {
  const [pg ,setPg] = useState(1);
  const movePgs=(val)=>{
    setPg(val);
  }
  return (
      
      <AllContexts.Provider value={{pg , movePgs}}>
      {pg === 1 && <div><button onClick={()=>{setPg(2)}}>Generate Qr</button>
        <button onClick={()=>{setPg(3)}}>Scanqr</button>
      </div>}
      {pg === 2 && <Generateqr/>}
      {pg === 3 && <Scanqr/>}
      {pg === 4 && <Takepic/>}
        </AllContexts.Provider>
  );
}

export default App;
