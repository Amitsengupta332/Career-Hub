import React from 'react';
import img from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Home = () => {
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
        </div>
    );
};

export default Home;