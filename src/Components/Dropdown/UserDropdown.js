import React, {useState, createRef} from 'react';
import { createPopper} from "@popperjs/core";
import {ILNullPhoto} from '../../Assets/img';

const UserDropdown = () => {
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const btnDropdownRef = createRef();
    const popoverDropdownRef = createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: 'bottom-start',
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    const handleOnClick = (e) => {
        e.preventDefault();
        dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
    }

    return (
        <>
            <div className='flex items-center'>
                <a href='#test' ref={btnDropdownRef} onClick={handleOnClick}>
                        <img 
                            alt='profil'
                            src={ILNullPhoto} 
                            className='w-12 rounded-full border-none shadow-lg'
                        /> 
                </a>       
            </div>
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? 'block' : 'hidden') + 
                    ' bg-white py-2 list-none rounded shadow-lg min-w-48'
                }
            >
                <a href="#test"
                    className='text-sm py-2 px-4 block w-full text-gray-800'
                >
                    Another Action
                </a>
                <a href="#test"
                    className='text-sm py-2 px-4 block w-full text-gray-800'
                >
                    Somethings else here
                </a>
                <a href="#test"
                    className='text-sm py-2 px-4 block w-full text-gray-800'
                >
                    Separated link
                </a>
            </div>
        </>
    )
}

export default UserDropdown;
