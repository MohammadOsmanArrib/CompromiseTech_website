import { Link, Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import '../../css/app.css';

// The fragment of ReactJS (start with <> and end with </>)
export default function Home () {
    return (
        <Layout>
            <Head title="Home" />
            <div className='homepage'>
                 <h1>Welcome to <b>Home</b> page</h1>
            </div>
        </Layout>
        
    );
};

