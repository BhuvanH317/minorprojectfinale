import React from 'react';
import logo from '../Header/LOGO.png'; 
import { Link,NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="shadow sticky z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link to="/home" className="flex items-center">
                    <img
                        src={logo}
                        className="mr-3 h-12"
                        alt="Logo"
                    /><b className='text-blue-950 text-xl'>FinFlow</b>
                </Link>
                <div
                    className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <NavLink to="/home"
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-950" : "text-gray-700"}border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-950 lg:p-0`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard"
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-950" : "text-gray-700"}border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-950 lg:p-0`
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/transaction"
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-950" : "text-gray-700"}border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-950 lg:p-0`
                                }
                            >
                                Transaction
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/budgetandsaving"
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-950" : "text-gray-700"}border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-950 lg:p-0`
                                }
                            >
                                Budget and Saving
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
};

export default Header;
