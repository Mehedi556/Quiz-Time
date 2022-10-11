import React from 'react';
import logo from '../../components/123.jpeg'

const Home = () => {
    return (
        <div className='flex p-12'>
            <img className='w-[400px] h-[250px]' src={logo} alt="" />
            <div className='p-5'>
                <h1 className='font-bold text-2xl'>Are you a budding computer programmer? Take our 10-question quiz to see how much you know about the world of coding! </h1>
            </div>
        </div>

        
    );
};

export default Home;