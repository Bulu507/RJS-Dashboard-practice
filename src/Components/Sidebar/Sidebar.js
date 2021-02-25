import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Sidebar() {
    return(
        <>
            <nav className='fixed w-64 h-screen bg-gray-100 p-4 shadow-xl'>
                <div className='text-gray-700 text-sm uppercase font-bold py-4'>
                Notus React
                </div>
                <hr className='my-4 w-full'></hr>
                <h6 className='text-gray-500 text-xs uppercase font-bold'>
                    Admin Layout Pages
                </h6>
                <ul className='list-none pt-4'>
                    <li className="items-center flex">
                        <div className='text-xs uppercase py-3 font-bold text-gray-800 hover:text-gray-600'>
                        <FontAwesomeIcon className='text-sm mr-3 opacity-75' icon='tv' size="md" />
                            Dashboard
                        </div>
                    </li>
                    <li className="items-center flex">
                        <div className='text-xs uppercase py-3 font-bold text-gray-800 hover:text-gray-600'>
                        <FontAwesomeIcon className='text-sm mr-3 opacity-75' icon='tools' size="md" />
                            Settings
                        </div>
                    </li>
                    <li className="items-center flex">
                        <div className='text-xs uppercase py-3 font-bold text-gray-800 hover:text-gray-600'>
                        <FontAwesomeIcon className='text-sm mr-3 opacity-75' icon='table' size="md" />
                            Tables
                        </div>
                    </li>
                    <li className="items-center flex">
                        <div className='text-xs uppercase py-3 font-bold text-gray-800 hover:text-gray-600'>
                        <FontAwesomeIcon className='text-sm mr-3 opacity-75' icon='map' size="md" />
                            Maps
                        </div>
                    </li>
                </ul>
                <hr className='my-4 w-full'></hr>
                <h6 className='text-gray-500 text-xs uppercase font-bold'>
                    Auth Layout Pages
                </h6>
                <ul className='list-none pt-4'>
                    <li className="items-center flex">
                        <div className='text-xs uppercase py-3 font-bold text-gray-800 hover:text-gray-600'>
                        <FontAwesomeIcon className='text-sm mr-3 opacity-75' icon='fingerprint' size="md" />
                            Login
                        </div>
                    </li>
                    <li className="items-center flex">
                        <div className='text-xs uppercase py-3 font-bold text-gray-800 hover:text-gray-600'>
                        <FontAwesomeIcon className='text-sm mr-3 opacity-75' icon='clipboard-list' size="md" />
                            Register
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}