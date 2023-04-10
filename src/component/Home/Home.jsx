import React from 'react';
import img from '../../assets/All Images/P3OLGJ1 copy 1.png'
import { useLoaderData } from 'react-router-dom';
import Jobcatagorie from '../JobCatagori/Jobcatagorie';

const Home = () => {

    const  catagory = useLoaderData();
    console.log(catagory)

    return (
        <div >
            <div className="px-5 hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="w-50% mr-0" />
                    <div>
                        <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1>
                        <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn btn-primary ">Get Started</button>
                    </div>
                </div>
            </div>

            {/* card component */}
            <div className='text-center mt-24 mb-6'>
                <h1 className='text-3xl font-semibold'>Job Category List</h1>
                <p className='text-gray-500 pt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
             <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-1'>
                {
                    catagory.map(job => (
                        <Jobcatagorie
                        key={job.id}
                        job={job}
                        >
                        </Jobcatagorie>
                    ))
                }
             </div>
        </div>
    );
};

export default Home;