import React, { Component } from 'react';


class Welcome extends Component {
    // super(props);
    // props are immutable - their values can't be changed
    render() {
        return (
            <>
            <h1>Welcomes {this.props.name}</h1>
            </>
        )
    }
}

export default Welcome