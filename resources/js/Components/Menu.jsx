import React from 'react';
import { Link, Head } from '@inertiajs/react';


const Menu = () => {
    return (
        <nav className=''>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                   <ul className='sub-menu'>
                        <li><Link href="/serivce1">Service1</Link></li>
                        <li><Link href="/serivce2">Service2</Link></li>
                        <li><Link href="/serivce3">Service3</Link></li>
                        <li><Link href="/serivce4">Service3</Link></li>
                   </ul>

                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <br></br>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/register">Register</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
