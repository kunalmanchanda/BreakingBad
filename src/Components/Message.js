import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "visitor"
        }
    }

    render() {
        return (
            <>
               <h3> welcome {this.state.name}</h3>
               <button onClick={(e) => {e.preventDefault(); this.setState({name: "new"})}}>Change</button>
            </>
        )
    }
}

export default Message;