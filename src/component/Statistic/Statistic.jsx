import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";

const Statistic = () => {
    const assigmentData =[
        {
            id: 1,
            name: "Assigment 1",
            num: 53
        },
        {
            id: 2,
            name: "Assigment 2",
            num: 59
        },
        {
            id: 3,
            name: "Assigment 3",
            num: 60
        },
        {
            id: 4,
            name: "Assigment 4",
            num: 52
        },
        {
            id: 5,
            name: "Assigment 5",
            num: 50
        },
        {
            id: 6,
            name: "Assigment 6",
            num: 56
        },
        {
            id: 7,
            name: "Assigment 7",
            num: 60
        },
        {
            id: 8,
            name: "Assigment 8",
            num: 59
        }

    ]
    return (
        <div>
             <h2 className='text-center text-3xl font-bold bg-base-200 pb-5 pt-5'>Statistics</h2>
           <div className='pt-6 mt-4'>
           <AreaChart width={1200} height={400} data={assigmentData} >
                <XAxis dataKey="name" ></XAxis>
                <YAxis dataKey="num"></YAxis>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Area dataKey="num" fill="#8884d8" type="monotone" stroke="#8884d8"/>
                 
             </AreaChart>
           </div>
        </div>
    );
};

export default Statistic;