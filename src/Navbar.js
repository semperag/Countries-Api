import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import 'font-awesome/css/font-awesome.min.css';

import './Navbar.css';

const Navbar = ({theme, setTheme}) => {
    const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };
    
    return (
            <nav className={`navbar ${theme}`}>
                <div className="links">
                    <Link className={`${theme}`} to="/">Where in the world?</Link>
                    <FontAwesomeIcon icon={faMoon} className={`lightMode ${theme}`} onClick={toggleTheme} tabindex="0"/>
                </div>
            </nav>
    );
}

export default Navbar;