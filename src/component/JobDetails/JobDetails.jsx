import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import img from '../../assets/Icons/Frame-1.png'
import { addTodb } from '../../utils/fakeDB';

const JobDetails = () => {

    // console.log(job);
    const job = useParams();
    const { id } = job;

    const featureJOb = useLoaderData();

    const [selectedJob, setSelected] = useState({})

    useEffect(() => {
        const selectJob = featureJOb.find(ele => (
            ele.id == id
        ))
        setSelected(selectJob)
    }, [featureJOb])

    // console.log(selectedJob)
    const handleappliedJob = id =>{
        // console.log(id);
        addTodb(id)
    }

    const { jobTitle, jobDescription, jobResponsibilities, educationalRequirements, experienceRequirements, location, salaryRange, phone, email } = selectedJob;
    // console.log(dynamic);
    return (
        <div>
            <h2 className='text-center text-3xl font-bold bg-base-200 pb-5 pt-5'>Job Details</h2>
            <div className='grid grid-cols-3 gap-6 mt-24'>
                <div className='col-span-2'>
                    <p className='pb-6'><span className='font-bold text-xl'>Job Description: </span> {jobDescription}</p>
                    <p className='pb-6'><span className='font-bold text-xl'>Job Responsibility: </span>{jobResponsibilities}</p>
                    <p className='font-bold text-xl pb-4'>Educational Requirements: </p>
                    <p className='pb-6'>{educationalRequirements}</p>
                    <p className='font-bold text-xl pb-4'>Experiences: </p>
                    <p>{experienceRequirements}</p>
                </div>
                <div>
                    <div className="card card-compact w-96 bg-purple-100 bg-opacity-100 ">
                        <div className="card-body">
                            <h2 className="card-title">Job Details</h2>
                            <hr />
                            <div className='flex justify-center items-center gap-2'>
                                <CurrencyDollarIcon className="h-6 w-6" />
                                <p className='text-xl'><span >Salary </span> : {salaryRange}</p>
                            </div>
                            <div className='flex items-start justify-center  gap-2'>
                                <img src={img} alt="" />
                                <p className='text-xl'>Job Title: {jobTitle}</p>
                            </div>

                            <h2 className='text-xl'>Contact Information</h2>
                            <hr />
                            <div className='flex justify-center items-center gap-2'>
                                <PhoneIcon className="h-4 w-4 " />
                                <p className='text-xl'>
                                    <span>Phone</span>: {phone}</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <EnvelopeIcon className="h-4 w-4 " />
                                <p className='text-xl'><span>Email :</span>{email}</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <MapPinIcon className="h-4 w-4 " />
                                <p className='text-xl'><span>Address :</span>{location}</p>
                            </div>

                            <button   onClick={()=>handleappliedJob(id)} className="btn btn-primary">Apply Now</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;