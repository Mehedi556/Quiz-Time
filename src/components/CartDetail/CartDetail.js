import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const CartDetail = () => {
    const cart = useLoaderData();
    const {id , name , questions} = cart.data;
    console.log(cart.data);
    return (
        <div>
            <h2 className='text-4xl text-center py-10'>{name}</h2>
            <div className='px-10'>
                {
                    questions.map(quiz => <SingleQuestion key={id} quiz={quiz}></SingleQuestion>)
                }
            </div>
        </div>
    );
};

export default CartDetail;