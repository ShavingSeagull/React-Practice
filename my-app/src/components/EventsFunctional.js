import React from 'react';

function EventsFunctional() {
    function clickHandler() {
        console.log("Bitch, I got clicked");
    }

    return (
        <div>
            <button onClick={clickHandler}>Click me - Functional component</button>
        </div>
    )
}

export default EventsFunctional;