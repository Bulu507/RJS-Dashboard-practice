import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserDropdown from '../Dropdown/UserDropdown';

export default function Navbar (params){
    return(
        <>
            <nav className='absoloute bg-blue-600 flex top-0 left-0 w-full z-10 p-4 px-14'>
                <div className='flex justify-between w-full'>
                    <a className='text-white text-sm uppercase font-bold py-4' href='#test'>
                        Dashboard
                    </a>
                    <div className='flex space-x-4'>
                        <div className='relative flex items-center'>
                            <FontAwesomeIcon className='absolute text-gray-400 z-10 ml-3 opacity-50' icon='search' size="md" />
                            <input 
                                type='text'
                                placeholder='Search...' 
                                className='rounded w-full relative p-3 pl-10 placeholder-gray-400 text-gray-700 shadow text-sm outline-none focus:outline-none focus:ring'
                            />
                        </div>
                        <UserDropdown />
                    </div>
                </div>
            </nav>
        </>
    )
}
