import React from 'react';
import { Link } from 'react-router-dom';

const ApplyJob = ({ job }) => {
    const { companyLogo, companyName, jobTitle, location, salaryRange, fullTime, remote, id } = job
    return (
        <div>
            <div className="card w-[90%]  border-4   rounded mx-auto mb-5 ">
                <div className='flex justify-between align-middle'>
                    <div className='flex justify-center align-middle '>
                        <div className='px-8 pt-20  '>

                            <img src={companyLogo} alt="companyLogo" className="rounded-xl w-32 " />

                        </div>
                        <div className="card-body items-start text-center ">
                            <h2 className="card-title">{jobTitle}</h2>
                            <p>{companyName}</p>
                            <div className='flex justify-self-start gap-4 '>
                                <p className='border-2 px-4'>{remote ? 'Remote' : 'Onsite'}</p>
                                <p className='border-2 px-4'>{fullTime ? 'Fulltime' : 'part-time'}</p>
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