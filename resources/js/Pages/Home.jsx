import { Link, Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function Home (){
    return (
        <Layout>
              <div>
                 <h1>Welcome to <b>Home</b> page</h1>
            </div>
            <Head title="Home" />
        </Layout> 
        
    );
};

