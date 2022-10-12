import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, Tooltip, ResponsiveContainer, XAxis ,YAxis } from 'recharts';


const Statistics = () => {

const courses = useLoaderData();

    return (
        <div>
            <div className='bg-white w-full h-full'>
         <LineChart width={350} height={400} data={courses.data}>
         <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
         <XAxis dataKey="name" />
         <YAxis />
         <Tooltip></Tooltip>
         <CartesianGrid strokeDasharray="3 3" />
         </LineChart>
      </div>
        </div>
      
    );
};

export default Statistics;