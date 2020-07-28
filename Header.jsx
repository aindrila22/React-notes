import React from "react";
import logo from './images/logo.jpg';

const Header = () => {
    return(
        <>
        <div className ="header">
        <img src = {logo} alt="logo" width="80" height="70" />
        <h1>&nbsp;&nbsp;YOUR NOTES</h1>
        </div><br/></> );
};
export default Header;
