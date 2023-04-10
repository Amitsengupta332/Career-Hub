import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <div className="px-5 navbar bg-base-200">
                <div className="navbar-start">
                    <Link to='/' className="text-3xl">CareerScope</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
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
    );
};

export default Header;