import React, { useState, useEffect, useRef } from 'react';
import { Link, Head } from '@inertiajs/react';
import '../../css/menu.css';
import '../../css/app.css';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (event) => {
        event.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='menu'>
                    <div class="logo">
                        <Link href="/">  <img src="/logo.png" alt="Logo" /></Link>
                    </div>

            <div className="menu-toggle" onClick={toggleMenu}>
                ☰ 
            </div>
            <div className='all-menu'>
                <nav>
                    <ul className={`menu-list ${isOpen ? 'open' : ''}`}>
                        <li className='home'><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li className="dropdown" ref={dropdownRef}>
                            <a href="#" onClick={toggleDropdown}>Services</a>
                            <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                                <li><Link href="service1">Service1</Link></li>
                                <li><Link href="service2">Service2</Link></li>
                                <li><Link href="service3">Service3</Link></li>
                                <li><Link href="service4">Service4</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li className="contactus"><Link href="/contact">Contact Us</Link></li>
                        <br></br>
                     {/*   <li><Link href="/login">Login</Link></li>
                        <li><Link href="/register">Register</Link></li>  */}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Menu;
