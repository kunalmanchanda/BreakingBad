import React, { Component } from 'react'

export class EventBinding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }

        // this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = (msg) => {
        this.setState({
            message: msg
        })

        console.log(this);
    }

    render() {
        // const { message } = this.state()

        return (
            <div>
                <h3>{this.state.message}</h3>  
                <button onClick={() => this.clickHandler("msg")}>Click Me</button>          
            </div>
        )
    }
}

export default EventBinding
