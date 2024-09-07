import React from 'react';

function CalculateEverything({first,second,sign,symbol}) {
    return (
        <>
        <h1>{first} {sign}  {second} {" = "+symbol}</h1>
        </>
    );
}

export default CalculateEverything;