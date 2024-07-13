import React from 'react';
import { Link, Head } from '@inertiajs/react';
import '../../css/menu.css';
import '../../css/app.css';

const Menu = () => {
    return (
        <div className='menu-box'>
            <div className=''>
                <nav>
                <ul>
                    <li className='home'><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <ul className='sub-menu'>
                            <li><Link href="/service1">Service1</Link></li>
                            <li><Link href="/service2">Service2</Link></li>
                            <li><Link href="/service3">Service3</Link></li>
                            <li><Link href="/service4">Service4</Link></li>
                    </ul>

                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <br></br>
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/register">Register</Link></li>
                </ul>
                </nav>
            </div>
        </div>
    );
};

export default Menu;
