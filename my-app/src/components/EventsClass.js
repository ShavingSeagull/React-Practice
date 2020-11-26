import React from 'react';

class EventsClass extends React.Component {
    clickHandler() {
        console.log("Clicked my motherfucking class, bitches");
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me - Class Component</button>
            </div>
        )
    }
}

export default EventsClass;