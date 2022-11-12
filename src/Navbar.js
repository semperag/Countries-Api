import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
       
    
    return (
            <nav className={`navbar`}>
                <div className="links">
                    <Link to="/">Where in the world?</Link>
                    <button onClick={" "}>light mode</button>
                </div>
            </nav>
    );
}

export default Navbar;