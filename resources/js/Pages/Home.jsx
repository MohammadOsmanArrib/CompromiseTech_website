import { Link, Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import '../../css/app.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


// The fragment of ReactJS (start with <> and end with </>)
export default function Home ({banner}) {


    return (
        <Layout>
            <Head title="Home" />
            <div className='homepage'>

                <div className='banner_container'>
                        {
                            banner ? ( <img src={banner.image} alt="" /> ) : //Dynamic Banner Image
                            ( <img src={'images/default.jpg'} alt="Banner" className='banner-image' />  ) //default image
                        }

                        <div className='banner_overlay'>
                            <h1 className='banner_title'>Next-Level IT Solutions for Your Business. </h1>
                            <p className='banner_text'>We believe on technology role in shaping your company and level-up your business to the Next-Level</p>
                          <Link href="/contact">  <img  className='banner_btn' src='images/banner_btn.png' /> </Link>
                        </div>
                </div>
        

                 {/* Other content of the Home component */}
            </div>
        </Layout>
        
    );
};

