import React from 'react';

const Jobcatagorie = ({ job }) => {
    const { logo, name, jobs_available } = job;
    // console.log(job);
    return (
        <div className='mt-8'>
            <div className="card bg-base-300 shadow-xl ">
                <div className='px-10 pt-10'>
                    <img src={logo} alt="Logo" className="rounded-xl" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{jobs_available}</p>
                </div>
            </div>
        </div>
    );
};

export default Jobcatagorie;