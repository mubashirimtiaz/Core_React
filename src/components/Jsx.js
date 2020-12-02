import React from 'react';

const Jsx = () => {
    const firstName = "Ahmed";
    const lastName = "Ali";
    return (
        <div>

            <h1>Hello {`${firstName} ${lastName}`} </h1>
    <p>Two and Two make {2*2}</p>
        </div>
    )
}

export default Jsx;