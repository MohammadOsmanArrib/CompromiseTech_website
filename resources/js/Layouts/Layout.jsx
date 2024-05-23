import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Menu from '@/Components/Menu';

export default function Layout({children}) {
    return (
        <div>
            <Menu />
            {children}
        </div>
    );
}