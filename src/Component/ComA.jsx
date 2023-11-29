import { useState } from "react";
import ComB from "./ComB";

const ComA = () => {
   const [a, seta] = useState(0)
    const Clicked = () =>{
            seta(a+1)
    }
  return <><ComB a={a} fn={seta} />
  <button onClick={Clicked}>click</button>
  </>;
};

export default ComA;
