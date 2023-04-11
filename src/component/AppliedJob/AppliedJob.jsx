import React, { useEffect, useState } from 'react';
import { getStoredJob } from '../../utils/fakeDB';
import { useLoaderData } from 'react-router-dom';
import ApplyJob from '../ApplyJob/ApplyJob';


const AppliedJob = () => {

    const [jobdata, setJobData] = useState([]);
    const [getjob, setGetjob] = useState([]);

    useEffect(() => {
        fetch('jobInfo.json')
            .then(res => res.json())
            .then(data =>  setJobData(data))
    }, [])

    useEffect(() => {

        const appliedJob = getStoredJob();
        const savedJob = [];

        for (const id in appliedJob) {


            const addedProduct = jobdata.find(el => el.id == id)
            if (addedProduct) {
                const quantity = appliedJob[id];
                addedProduct.quantity = quantity;

                savedJob.push(addedProduct);
            }

        }

        setGetjob(savedJob);
    }, [jobdata])
    console.log(getjob);

    return (
        <div>
            <h2 className='text-center text-3xl font-bold bg-base-200 pb-5 pt-5'>Applied Jobs</h2>
            <div className='pt-6 mt-6'>
                {
                    getjob.map(job => 
                    <ApplyJob
                     key={job.id}
                     job={job}
                    ></ApplyJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;