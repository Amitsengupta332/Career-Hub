import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'

const JobFeature = ({ feature }) => {
    const { companyLogo, companyName, location, salaryRange, fullTime, jobTitle, remote } = feature;
    console.log(feature);
    return (
        <div className='pt-3 mt-3'>
            <div className="card lg:w-[90%] bg-base-100 border">
                <div className='px-10 pt-10'>
                    <img src={companyLogo} alt="Shoes" className="rounded-xl" />
                </div>
                <div className="card-body ">
                    <h2 className="card-title">{jobTitle}</h2>
                    <p>{companyName}</p>
                    <div className='flex justify-self-start'>
                        <p>{remote ? 'Remote' : 'Onsite'}</p>
                        <p>{fullTime ? 'Fulltime' : 'part-time'}</p>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex'>
                            < MapPinIcon className="h-6 w-6 " />
                            <p>{location}</p>
                        </div>
                        <div className='flex'>
                        <CurrencyDollarIcon className="h-6 w-6 " />
                            <p>Salary: {salaryRange}</p>
                        </div>
                    </div>
                    <div className="">
                        <Link className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobFeature;

