import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (

  <div className="navbar bg-slate-900">
  <div className=' w-10/12 mx-auto'>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">QUIZ Time</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
        <Link className='pr-5' to='/'>Home</Link>
        <Link className='pr-5' to='/statistics'>Statistics</Link>
        <Link to='/blog'>Blog</Link>
        </ul>
      </div>
  </div>
</div>
    );
};

export default Nav;