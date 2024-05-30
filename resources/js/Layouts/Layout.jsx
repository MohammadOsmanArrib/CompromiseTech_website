import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Menu from '@/Components/Menu';


export default function Layout({children}) {
    return (
        <div>
            <div id='menu'>
                <div id='menu-box'>
                    <Menu />
                </div> 
                <div id='logo_top'>logo here</div>
            </div>
            
          {children}
        </div>
    );
}