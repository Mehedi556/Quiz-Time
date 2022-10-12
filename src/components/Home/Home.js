import React from 'react';
import { useLoaderData } from 'react-router-dom';
import logo from '../../components/123.jpeg'
import SingleCart from '../SingleCart/SingleCart';

const Home = () => {
    const carts = useLoaderData();
    // console.log(cart.data.length);
    return (
        <div className="Home-container">

        <div className='block md:flex py-10 w-10/12 mx-auto'>
            <img className='w-[400px] h-[250px]' src={logo} alt="" />
            <div className='p-5'>
                <h1 className='font-bold text-2xl text-justify'>Are you a budding computer programmer? Take our question quiz to see how much you know about the world of coding! </h1>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-300 w-10/12 mx-auto p-5 rounded-3xl'>
            {
                carts.data.map(cart => <SingleCart key={cart.id} cart={cart}></SingleCart>)
            }
        </div>

        </div>

        
    );
};

export default Home;