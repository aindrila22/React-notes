import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
       <footer className = "footer">
       <br/><p><b>copyright © {year}</b></p>
       </footer>
        </>

    )};
export default Footer;