import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state={
            count: 0
        }
    }

    inc() {
        this.setState((prevState) => ({
            count: prevState.count+1
        }), () => console.log(this.state.count))
    }

    incFive() {
        this.inc();
        this.inc();
        this.inc();
        this.inc();
        this.inc();
    }

    render() {
        const { count } = this.state;
        return (
            <>
            <p>{this.state.count}</p>
            <button onClick={(e) => {this.setState(prevState => ({count: prevState.count+1}), () => console.log(this.state.count))}}>click</button>
            <button onClick={() => this.incFive()}>click5</button>
            </>
        )
    }
}

export default Counter;

// use callback in setState to make it execute after this.setState bcz this.setState is asynchronous
// this.setState((prevstate) => ({}), (callbackFunction))
// this.setState({name: "wow"}) object as argument when not dependent on prev
// state else prevState, setState takes two argument as obj/function, callback

