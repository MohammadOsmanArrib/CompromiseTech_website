import React from 'react';
import { Link, Head } from '@inertiajs/react';

const Menu = () => {
    return (
        <nav className=''>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/about">About</Link></li>
                <br></br>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/register">Register</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
