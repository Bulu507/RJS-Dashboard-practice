import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import AdminNavbar from '../Components/Navbar/AdminNavbar.js';

export default function Home() {
    return(
        <>
            <Sidebar />
            <div className='relative ml-64 bg-blue-200'>
                <AdminNavbar />
            </div>
        </>
    )
} 
