import React, { useEffect, useState } from 'react';
import img from '../../assets/All Images/P3OLGJ1 copy 1.png'
import { useLoaderData } from 'react-router-dom';
import Jobcatagorie from '../JobCatagori/Jobcatagorie';
import JobFeature from '../JobFeature/JobFeature';

const Home = () => {

    const [Jobcatagories, setJobCatagories] = useState([]);
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        fetch('catagory.json')
            .then(res => res.json())
            .then(data => setJobCatagories(data))
    }, [])

    const featureJOb = useLoaderData();
    // console.log(featureJOb);

    const [jobFeature, setJobFeature] = useState([]);

    useEffect(() => {
        const jobFeature = featureJOb.slice(0, 4)
        setJobFeature(jobFeature)
    }, [])

    const seeAllJobs = () => {
        setJobFeature(featureJOb)
        setShowButton(false);
    }

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

            {/* header of feature job */}
            <div className='text-center mt-24 mb-6'>
                <h1 className='text-3xl font-semibold'>Job Category List</h1>
                <p className='text-gray-500 pt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            {/* card component */}
            <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-1'>
                {
                    Jobcatagories.map(job => (
                        <Jobcatagorie
                            key={job.id}
                            job={job}
                        >
                        </Jobcatagorie>
                    ))
                }
            </div>
            {/* heading job feature */}
            <div className='text-center mt-24 mb-6 pt-12'>
                <h1 className='text-4xl font-bold'>Featured Jobs</h1>
                <p className='text-gray-500 pt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            {/* job feature */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-5 mb-5'>
                {
                    jobFeature.map(feature =>  (
                        <JobFeature
                        key={feature.id}
                        feature={feature}
                        ></JobFeature>
                    ))
                }
            </div>
            <div className='text-center mb-5'>
                {
                    showButton && <button onClick={seeAllJobs} className="btn btn-primary">See ALL Jobs</button>
                }

            </div>
        </div>
    );
};

export default Home;

 