import React, {useState} from 'react';
import ReverseIt from "./reverseIt.jsx";
import reverseIt from "./reverseIt.jsx";

function ReverseMain(props) {
    const [sentance,setSentance] = useState("")
const sentReverse=(str)=>{
        return str.split('').reverse()
}
    return (
        <>
        <h1>Reverse string</h1>
            <input type="text" className={"mt-5 form-control"} name={sentance} onChange={(e)=>setSentance(e.target.value)}/>
      <ReverseIt sent={sentance} revind={sentReverse(sentance)}/>
        </>
    );
}

export default ReverseMain;