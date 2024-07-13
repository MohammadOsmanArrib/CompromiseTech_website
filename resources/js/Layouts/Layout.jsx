import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Menu from '@/Components/Menu';
import '../../css/app.css';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';


export default function Layout({children}) {
    return (
        <div> 
            <header>
                 <Menu />  
            </header>

            {children}

            <footer>
                
            </footer>

        </div> 
                  
    );
}