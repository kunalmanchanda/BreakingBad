import React from 'react';
import logo from '../Images/logo.png';

const Header = (props) => {
    // console.log(props);
    return (
        <header className="center">
            <img src={logo} alt=""/>
            {/* <h1>{props.name}</h1> */}
            {/* {props.children} */}
        </header>
    );
}

export default Header


/*
    stateless functional component
        Solution without using state
        Absence of `this` keyword
        Mainly responsible for the UI 
        Stateless/Dumb/Presentational
        Hooks makes it possible to use life cycle hooks & states 

    stateful class component
        Maintains private internal state
        Information?Data private to that component
        Provide lifecycle hooks
        Statefull/smart/container
        Complex UI logics

    **Now both class components and functional components are same 

    JSX - JSXML. Extension to the javascript language syntax
    XML like code for elements and components

*/

