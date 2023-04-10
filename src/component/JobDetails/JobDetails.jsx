import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

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

    console.log(selectedJob)

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
                            <p className='text-xl'><span >Salary </span> : {salaryRange}</p>
                            <p className='text-xl'><span >Job Title</span>: {jobTitle}</p>

                            <h2 className='text-xl'>Contact Information</h2>
                            <hr />
                            <p className='text-xl'><span>Phone</span>: {phone}</p>
                            <p className='text-xl'><span>Email :</span>{email}</p>
                            <p className='text-xl'><span>Address :</span>{location}</p>

                            <button className="btn btn-primary">Apply Now</button>
                            
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default JobDetails;