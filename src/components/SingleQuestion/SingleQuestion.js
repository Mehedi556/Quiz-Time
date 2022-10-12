import React from 'react';

const SingleQuestion = ({quiz}) => {
    console.log(quiz);
    const {question , id ,options ,correctAnswer} =quiz;
    return (
        <div className='w-10/12 mx-auto bg-slate-500 my-10 text-white p-10 rounded-3xl'>
            <h1 className='text-center text-[25px] bg-slate-900 p-5 m-2 mb-10 rounded-2xl'>{question}</h1>

<div className='grid grid-cols-1 md:grid-cols-2'>
    {
        options.map(option => <div className='w-10/12 mx-auto'><p className='bg-slate-900 p-4 m-2 rounded-xl'>{option}</p></div>)
    }
</div>
        </div>
    );
};

export default SingleQuestion;