import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Navbar = ({theme, setTheme}) => {
       const toggleTheme = () => {
        setTheme({ ...theme, isLightTheme: !theme.isLightTheme });
       };
    
    return (
        <Navbar value={{
            ...theme,
            toggleTheme
           }}>
            <nav className={`navbar ${theme}`}>
                <div className="links">
                    <Link to="/">Where in the world?</Link>
                    <button onClick={toggleTheme}>light mode</button>
                </div>
            </nav>
        </Navbar>
    );
}

export default Navbar;