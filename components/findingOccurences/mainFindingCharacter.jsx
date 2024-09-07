import React, {useState} from 'react';
import FindCharacter from "./findCharacter.jsx";

function MainFindingCharacter(props) {
    const [sentence,setSentence] = useState("")
    const [letter,setLetter] = useState("")
    const countOccurence=(str,occu)=>{
        let count=0;
        for(let i=0; i<str.length; i++){
            if(str[i] === occu){
                count++
            }
        }
        return count
    }
    return (
        <>
            <input type="text" className={"form-control mt-5"} value={sentence}
                   onChange={(e) => setSentence(e.target.value)}/>
            <input type="text" className={"form-control mt-5"} value={letter}
                   onChange={(e) => setLetter(e.target.value)}/>
            <FindCharacter sentance={sentence} letter={letter} calculateLetters={countOccurence(sentence,letter)}/>
        </>
    );
}

export default MainFindingCharacter;