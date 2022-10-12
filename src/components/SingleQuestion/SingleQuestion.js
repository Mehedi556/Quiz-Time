import React from 'react';

const SingleQuestion = ({quiz}) => {
    console.log(quiz);
    const {question , id ,options ,correctAnswer} =quiz;
    return (
        <div className='w-10/12 mx-auto bg-slate-500 my-10 text-white p-10 rounded-3xl'>
            
        </div>
    );
};

export default SingleQuestion;