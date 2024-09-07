import React, {useLayoutEffect, useState} from 'react';
import CalculateEverything from "./calculateEverything.jsx";

function MainCalculate(props) {
    useLayoutEffect(() => {
        const stratTime = new Date();
        return ()=>{
            const endTime = new Date()
            const elapsedTime = endTime - stratTime
            console.log(elapsedTime)
        }
    }, []);
    const [firstNum,setFirstNum] = useState(0)
    const [secondNum , setSecondNum] = useState(0)

    return(
        <>
            <div className="container">
                <input type="text" className={"form-control mt-5"} value={firstNum}
                       onChange={(e) => setFirstNum(e.target.value)}/>
                <input type="text" className={"form-control mt-5"} value={secondNum}
                       onChange={(e) => setSecondNum(e.target.value)}/>
                <CalculateEverything first={firstNum}  sign={"*"} symbol={firstNum*secondNum} second={secondNum}/>
                <CalculateEverything first={firstNum}  sign={"+"} symbol={firstNum+secondNum} second={secondNum}/>
                <CalculateEverything first={firstNum}  sign={"-"} symbol={firstNum-secondNum} second={secondNum}/>
                <CalculateEverything first={firstNum}  sign={"/"} symbol={firstNum/secondNum} second={secondNum}/>

            </div>
        </>
    )
}

export default MainCalculate;