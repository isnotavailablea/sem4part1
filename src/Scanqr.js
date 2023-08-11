import React, { useEffect ,useState , useContext} from 'react'
import {Html5QrcodeScanner} from 'html5-qrcode';
import { AllContexts } from './App';
function Scanqr() {
  const [text , setText] = useState(false);
  let scanner;
  const cur_str = "hi"
  const changepg=useContext(AllContexts);
  useEffect(()=>{
    if(!scanner?.getState()){
       scanner = new Html5QrcodeScanner(
            "read",
            { fps: 10, qrbox: {width: 250, height: 250} },
            /* verbose= */ false);
            scanner.render(success , error);
            function success(result){
            scanner.clear();
            if(cur_str === result){
               console.log(result);
               changepg.movePgs(4);
            }
            setText(true);
            }
            function error(err){
                console.log(err);
        
            }
    }
  },[])
  return (
    <div id = "read">
      {text ? console.log("hello"): console.log("not yet")}
    </div>
  )
}

export default Scanqr
