import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/statistic'>Statistic</Link></li>
                    <li  >
                        <Link to='/appliedJob'>
                            Applied Job
                        </Link>
                    </li>
                    <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-start">
                    <Link to='/' className="text-3xl">CareerScope</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/statistic'>Statistic</Link></li>
                    <li  >
                        <Link to='/appliedJob'>
                            Applied Job
                        </Link>
                    </li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                    <a className="btn btn-primary">Start Applying</a>
                </div>
        </div>
    );
};

export default Header;


/**
 * <div className=''>
            <div className="px-5 navbar bg-base-200">
                <div className="navbar-start">
                    <Link to='/' className="text-3xl">CareerScope</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/statistic'>Statistic</Link></li>
                        <li  >
                            <Link to='/appliedJob'>
                            Applied Job
                            </Link>
                        </li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary">Start Applying</a>
                </div>
            </div>
        </div>
 */