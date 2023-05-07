import { NavLink } from 'react-router-dom';

import logo from './../../img/logo 2.png'
import './style.css'
const Navbar = () => {
    const normalLink = 'navbar__link';
    const activeLink = 'navbar__link activeLink';

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__body">
                    <div className="navbar__logo">
                        <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
                    </div>
                    <div className="navbar__menu">
                        <NavLink to="/teachers" className={({ isActive }) => isActive ? activeLink : normalLink}>Teachers</NavLink>
                        <NavLink to="/tutors" className={({ isActive }) => isActive ? activeLink : normalLink}>Tutors</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? activeLink : normalLink}>About us</NavLink>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;