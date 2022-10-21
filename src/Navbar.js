import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">Where in the world?</Link>
            </div>
        </nav>
    );
}

export default Navbar;