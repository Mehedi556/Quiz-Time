import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCart.css';

const SingleCart = ({cart}) => {
    const {id , name , logo , total} = cart;
    return (
        <div className='p-3 single-cart'>
            <div className="card bg-slate-900 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src={logo} alt="Shoes" className="rounded-xl" />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl text-white">{name}</h2>
                    <p>Questions: {total}</p>
                    <div className="card-actions">
                    <button className="btn btn-info font-bold"><Link to={`/${id}`}>Start now</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;