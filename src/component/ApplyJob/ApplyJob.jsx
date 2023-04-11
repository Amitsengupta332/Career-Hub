import React from 'react';
import { Link } from 'react-router-dom';

const ApplyJob = ({ job }) => {
    const { companyLogo, companyName, jobTitle, location, salaryRange, fullTime, remote,id } = job
    return (
        <div>
            <div className="card w-[90%]  border-solid border-2 border-slate-400 rounded mx-auto mb-5 ">
                <div className='flex justify-between align-middle'>
                    <div className='flex justify-center align-middle '>
                        <div className='px-8 pt-20  '>

                            <img src={companyLogo} alt="companyLogo" className="rounded-xl w-32 " />

                        </div>
                        <div className="card-body items-start text-center ">
                            <h2 className="card-title">{jobTitle}</h2>
                            <p>{companyName}</p>
                            <div className='flex gap-2'>
                                <p className='border border-gray-300 p-1'>{remote ? 'Remote' : 'Onsite'}</p>
                                <p className='border border-gary-300 p-1'>{fullTime ? 'Fulltime' : ''}</p>
                            </div>
                            <p>{location}, Salary: {salaryRange}</p>

                        </div>
                    </div>
                    <div className='flex justify-center align-middle pt-20 pr-5'>
                         <Link to={`/jobdeails/${id}`} className="btn btn-primary">View Details</Link >
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ApplyJob;