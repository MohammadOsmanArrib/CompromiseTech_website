import { Link, Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import '../../css/app.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// The fragment of ReactJS (start with <> and end with </>)
export default function Home () {
        const [banner, setBanner] = useState(null);
    
        useEffect(() => {
            axios.get('/api/banner')
                .then(response => {
                    setBanner(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the banner data!", error);
                });
        }, []);

    return (
        <Layout>
            <Head title="Home" />
            <div className='homepage'>

                <div className='banner_image'>
                {banner && (
                <div className="bg-blue-500 text-white p-6">
                    <h1 className="text-3xl font-bold">{banner.title}</h1>
                    <p className="mt-2">{banner.description}</p>
                    {banner.image && <img src={`/storage/${banner.image}`} alt={banner.title} className="mt-4 rounded-lg shadow-lg" />}
                </div>
                )}
                {/* Other content of the Home component */}

                </div>
                 
            </div>
        </Layout>
        
    );
};

