import React from "react";

class EventBinding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!"
        };

        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     this.setState({
    //         introduction: "Goodbye!"
    //     });
    // }

    handleClick = () => {
        this.setState({
            introduction: "Goodbye!"
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} </h1>
                {/* <button onClick={() => this.handleClick()}>Update</button> */}
                <button onClick={this.handleClick}>Update</button>
            </div>
        )
    }
}

export default EventBinding;