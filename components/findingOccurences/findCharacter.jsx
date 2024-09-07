import React from 'react';

function FindCharacter({sentance,letter, calculateLetters}) {
    return (
        <>
            <h1>Your Sentance <span className={"text-primary"}>{sentance}</span>, The Latter you looking for <span className={"border text-danger"}> {letter}</span> The Repition No <span className={"text-success"}> {calculateLetters}</span></h1>
        </>
    );
}

export default FindCharacter;